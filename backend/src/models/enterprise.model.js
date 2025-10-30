const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const enterpriseSchema = new mongoose.Schema({
    enterpriseName: {
        type: String,
        required: true,
    },
    contactName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        
    },
    phone: {
        type: String,
    },
    enterpriseSize: {
        type: String,
        enum: ["extra-small", "small", "medium", "large", "extra-large"],
    },
    role: {
        type: String,
        enum: ["enterprise"],
        default: "enterprise",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Antes de guardar, encriptar contraseña
enterpriseSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Método para comparar contraseñas
enterpriseSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Enterprise", enterpriseSchema);
