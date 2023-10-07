"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.isAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const apollo_server_express_1 = require("apollo-server-express");
const entities_1 = require("../entities");
const enums_1 = require("../enums");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const isAuth = ({ context }, next) => {
    const authorization = context.req.headers['authorization'];
    console.log(context.req.headers);
    if (!authorization) {
        throw new apollo_server_express_1.AuthenticationError("not authenticated");
    }
    try {
        const token = authorization.replace('Bearer ', '');
        const payload = (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_SECRET);
        const pubsub = new graphql_subscriptions_1.PubSub();
        context.payload = payload;
    }
    catch (err) {
        console.log(err);
        throw new apollo_server_express_1.AuthenticationError(err);
    }
    return next();
};
exports.isAuth = isAuth;
const isAdmin = ({ context }, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const user = yield entities_1.UserMdl.findOne({ _id: (_a = context.payload) === null || _a === void 0 ? void 0 : _a.userId });
        if ((user === null || user === void 0 ? void 0 : user.role) === enums_1.RoleEnum.ADMINISTRATOR) {
            console.log('ISaDMIN');
            return next();
        }
        else {
            throw new Error("No eres ADMINISTRATOR");
        }
        //     const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
        //     context.payload = payload as any;
    }
    catch (err) {
        console.log(err);
        throw new Error("not ADM");
    }
});
exports.isAdmin = isAdmin;
