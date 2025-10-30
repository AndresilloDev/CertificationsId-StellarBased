export const authMiddleware = (roles) => {
    return (req, res, next) => {
        if(!req.session.user) {
            if (process.env.DEBUG === 'true') {
                console.error("User session not found:", req.session);
            }
            return res.status(401).json({ message: "No estás autenticado" });
        }
        if (roles && roles.length > 0 && !roles.includes(req.session.user.role)) {
            if (process.env.DEBUG === 'true') {
                console.error("User role not authorized:", req.session.user.role);
            }
            return res.status(403).json({ message: "No tienes permisos para acceder a este recurso" });
        }
        return next();
    }
}