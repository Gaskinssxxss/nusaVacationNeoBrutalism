const jwt = require('jsonwebtoken');
const User = require('../model/user');
const { SECRET } = require("../consts")

module.exports.requireLogin = (req, res, next) => {
    const token = req.cookies.auth;
    if (token) {
        try {
            const _id = jwt.verify(token, SECRET).payload;
            User.findOne({ _id })
                .then(user => {
                    if (!user) {
                        return res.status(401).json({ message: "error", code: "unauthenticated-access" });
                    }
                    req.user = user;
                    next(); 
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(401).json({ message: "error", code: "unauthenticated-access" });
                });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "error", code: "token-expired", error });
        }
    } else {
        return res.status(401).json({ message: "error", code: "unauthenticated-access" });
    }
};

module.exports.requireAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: "error", code: "forbidden-access" });
    }
    next();
};