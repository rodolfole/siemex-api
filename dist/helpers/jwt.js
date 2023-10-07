"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefreshToken = exports.createRefreshToken2 = exports.createRefreshToken = exports.createAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const createAccessToken = (userId, expiresIn) => {
    return (0, jsonwebtoken_1.sign)({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn
    });
};
exports.createAccessToken = createAccessToken;
const createRefreshToken = (user) => {
    return (0, jsonwebtoken_1.sign)({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};
exports.createRefreshToken = createRefreshToken;
const createRefreshToken2 = (idUser) => {
    return (0, jsonwebtoken_1.sign)({ userId: idUser }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "2m" });
};
exports.createRefreshToken2 = createRefreshToken2;
const sendRefreshToken = (res, token) => {
    res.cookie("jid", token, {
        httpOnly: true,
        path: "/refresh_token"
    });
};
exports.sendRefreshToken = sendRefreshToken;
