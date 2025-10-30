const User = require("../models/user.model.js");
const Enterprise = require("../models/enterprise.model.js");
const jwt = require("jsonwebtoken");

const AuthService = {
    login: async (email, password_query) => {
        try {
            console.log(email)
            const user = await User.findOne({ email });
            console.log("login: ", user)
            if (!user) {
                throw new Error("Usuario no encontrado");
            }

            const isMatch = await user.matchPassword(password_query);
            if (!isMatch) {
                throw new Error("Contraseña incorrecta");
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "30d",
            });

            const safeUser = user.toObject();
            delete safeUser.password;

            return { user: safeUser, token };

        } catch (error) {
            console.error("Error en login:", error.message);
            throw new Error(error.message || "Error al iniciar sesión");
        }
    },

    register: async (userData) => {
        try {
            const { email, password, firstName, lastName } = userData;

            if (!email || !password || !firstName || !lastName) {
                throw new Error("Faltan campos requeridos");
            }

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                throw new Error("El correo ya está registrado");
            }

            const newUser = new User(userData);
            await newUser.save();

            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
                expiresIn: "30d",
            });

            const safeUser = newUser.toObject();
            delete safeUser.password;

            return { user: safeUser, token };

        } catch (error) {
            console.error("Error en registro:", error.message);
            if (error.name === "ValidationError") {
                throw new Error("Datos inválidos al registrar usuario");
            }

            if (error.code === 11000) {
                throw new Error("Correo ya registrado (error de duplicado)");
            }

            throw new Error(error.message || "Error al registrar usuario");
        }
    },

    registerEnterprise: async (enterpriseData) => {
        console.log(enterpriseData)
        try {
            const { email, password, enterpriseName, contactName, phone, enterpriseSize } = enterpriseData;

            console.log(enterpriseData)

            if (!email || !password || !enterpriseName || !contactName || !phone || !enterpriseSize) {
                throw new Error("Faltan campos requeridos para la empresa");
            }

            const existingEnterprise = await Enterprise.findOne({ email });
            if (existingEnterprise) {
                throw new Error("El correo ya está registrado");
            }

            const enterprise = {
                email,
                password,
                enterpriseName,
                contactName,
                phone,
                enterpriseSize
            }

            console.log("saving enterprise:", enterprise)

            const newEnterprise = new Enterprise(enterprise);
            await newEnterprise.save();

            const token = jwt.sign({ id: newEnterprise._id }, process.env.JWT_SECRET, {
                expiresIn: "30d",
            });

            const safeEnterprise = newEnterprise.toObject();
            delete safeEnterprise.password;

            return { user: safeEnterprise, token };
        } catch (error) {
            console.error("Error en registro empresa:", error.message);
            throw new Error(error.message || "Error al registrar empresa");
        }
    },

    loginEnterprise: async (email, password_query) => {
        try {
            const enterprise = await Enterprise.findOne({ email });
            console.log("login enterprise: ", enterprise);
            if (!enterprise) {
                throw new Error("Empresa no encontrada");
            }
            const isMatch = await enterprise.matchPassword(password_query);
            if (!isMatch) {
                throw new Error("Contraseña incorrecta");
            }
            const token = jwt.sign({ id: enterprise._id }, process.env.JWT_SECRET, {
                expiresIn: "30d",
            });
            const safeEnterprise = enterprise.toObject();
            delete safeEnterprise.password;
            return { user: safeEnterprise, token };
        } catch (error) {
            console.error("Error en login empresa:", error.message);
            throw new Error(error.message || "Error al iniciar sesión de empresa");
        }
    },
};

module.exports = AuthService;
