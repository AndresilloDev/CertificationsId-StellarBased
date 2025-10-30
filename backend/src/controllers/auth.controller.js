import AuthService from "../services/auth.service.js";

const AuthController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            let user = await AuthService.login(email, password);
            if (!user) {
                user = await AuthService.loginEnterprise(email, password);
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({
                message: "Error al iniciar sesión",
                error: error.message,
            });
        }
    },

    register: async (req, res) => {
        let user;
        if (req.body.userType === 'enterprise') {
            const {
                email,
                password,
                enterpriseName,
                contactName,
                phone,
                enterpriseSize
            } = req.body;
            user = await AuthService.registerEnterprise({
                email,
                password,
                enterpriseName,
                contactName,
                phone,
                enterpriseSize
            });
        }
        if (req.body.userType === 'user') {
            if (!req.body.password != !req.body.confirmPassword) {
                return res.status(400).json({
                    message: "Las contraseñas no coinciden",
                });
            }

            const {
                email,
                password,
                firstName,
                lastName,
                address,
                phone,
                birthDate,
            } = req.body;
            user = await AuthService.register({
                email,
                password,
                firstName,
                lastName,
                address,
                phone,
                birthDate,
            });
        }
        try {
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({
                message: "Error al registrar usuario",
                error: error.message,
            });
        }
    },

    verify: async (req, res) => {
        const { token } = req.body;
        // Perform verification logic
    },
};

export default AuthController;