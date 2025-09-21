const jwt = require("jsonwebtoken");

const AuthMiddleware = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ data: null, message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ data: null, message: "Invalid token" });
    }
};

module.exports = AuthMiddleware;

