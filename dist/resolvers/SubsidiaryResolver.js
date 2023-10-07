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
exports.SubsidiaryResolver = void 0;
const mongoose_1 = require("mongoose");
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../entities");
const isAuth_1 = require("../middlewares/isAuth");
const inputs_1 = require("../inputs");
let SubsidiaryResolver = class SubsidiaryResolver {
    deleteSubsidiary(subsidiaryId, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield entities_1.SubsidiaryMdl.updateOne({ user_id: payload === null || payload === void 0 ? void 0 : payload.userId }, { $pull: { subsidiaries: { _id: subsidiaryId } } });
                return true;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    getSubsidiaries(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (userId === "")
                    return null;
                return yield entities_1.SubsidiaryMdl.findOne({ user_id: userId }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    getSubsidiariesUser({ payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield entities_1.SubsidiaryMdl.findOne({ user_id: payload === null || payload === void 0 ? void 0 : payload.userId }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    postSubsidiary(subsidiaryInput // : Promise<DocumentType<Subsidiaries> | null>
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id } = subsidiaryInput, rest = __rest(subsidiaryInput, ["user_id"]);
                const subsidiary = yield entities_1.SubsidiaryMdl.findOne({ user_id });
                subsidiaryInput.user_id = user_id;
                if (!subsidiary) {
                    return yield entities_1.SubsidiaryMdl.create(subsidiaryInput);
                }
                else {
                    console.log("UPDATE");
                    subsidiary.subsidiaries = [
                        ...subsidiary.subsidiaries,
                        ...rest.subsidiaries,
                    ];
                    subsidiary.save();
                    return subsidiary;
                }
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    putSubsidiary(subsidiaryId, subsidiaryInput, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = subsidiaryInput.subsidiaries[0], { created_at } = _a, rest = __rest(_a, ["created_at"]);
                // return await SubsidiaryMdl.findOneAndUpdate({ _id: subsidiaryId, user_id: payload?.userId }, rest, { new: true }).populate('user_id');
                return yield entities_1.SubsidiaryMdl.findOneAndUpdate({
                    user_id: mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId),
                    "subsidiaries._id": subsidiaryId,
                }, { $set: { "subsidiaries.$": Object.assign(Object.assign({}, rest), { _id: subsidiaryId }) } }, { new: true }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("subsidiaryId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SubsidiaryResolver.prototype, "deleteSubsidiary", null);
__decorate([
    (0, type_graphql_1.Query)(() => entities_1.Subsidiaries, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubsidiaryResolver.prototype, "getSubsidiaries", null);
__decorate([
    (0, type_graphql_1.Query)(() => entities_1.Subsidiaries, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubsidiaryResolver.prototype, "getSubsidiariesUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Subsidiaries),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.SubsidiaryInput // : Promise<DocumentType<Subsidiaries> | null>
    ]),
    __metadata("design:returntype", Promise)
], SubsidiaryResolver.prototype, "postSubsidiary", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Subsidiaries, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("subsidiaryId")),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, inputs_1.SubsidiaryInput, Object]),
    __metadata("design:returntype", Promise)
], SubsidiaryResolver.prototype, "putSubsidiary", null);
SubsidiaryResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => entities_1.Subsidiaries)
], SubsidiaryResolver);
exports.SubsidiaryResolver = SubsidiaryResolver;
