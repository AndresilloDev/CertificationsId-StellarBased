import AuthService from "../services/auth.service.js";

const AuthController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await AuthService.login(email, password);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({
                message: "Error al iniciar sesión",
                error: error.message,
            });
        }
    },

    register: async (req, res) => {
        const { 
            email,
            password,
            confirmPassword,
            firstName,
            lastName,
            birthDate,
            phone,
            address
        } = req.body;
        
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Las contraseñas no coinciden",
            });
        }

        try {
            const user = await AuthService.register({
                email,
                password,
                firstName,
                lastName,
                birthDate,
                phone,
                address
            });

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