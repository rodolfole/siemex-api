"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResolver = void 0;
const mongoose_1 = require("mongoose");
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../entities");
const isAuth_1 = require("../middlewares/isAuth");
const ServiceInput_1 = require("../inputs/ServiceInput");
let ServiceResolver = class ServiceResolver {
    getServices(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield entities_1.ServiceMdl.find({ user_id: userId }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    getServicesUser({ payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield entities_1.ServiceMdl.find({ user_id: payload === null || payload === void 0 ? void 0 : payload.userId }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    postService(serviceInput, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("serviceInput", serviceInput);
                serviceInput.user_id = mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId);
                return yield entities_1.ServiceMdl.create(serviceInput);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    putService(serviceId, serviceInput, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { created_at, user_id } = serviceInput, rest = __rest(serviceInput, ["created_at", "user_id"]);
                return yield entities_1.ServiceMdl.findOneAndUpdate({ _id: serviceId, user_id: payload === null || payload === void 0 ? void 0 : payload.userId }, rest, { new: true }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [entities_1.Services], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "getServices", null);
__decorate([
    (0, type_graphql_1.Query)(() => [entities_1.Services], { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "getServicesUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Services, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceInput_1.ServiceInput, Object]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "postService", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Services, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("serviceId")),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ServiceInput_1.ServiceInput, Object]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "putService", null);
ServiceResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => entities_1.Services)
], ServiceResolver);
exports.ServiceResolver = ServiceResolver;
