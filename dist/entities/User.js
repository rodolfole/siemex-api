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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMdl = exports.Users = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const enums_1 = require("../enums");
const types_1 = require("../types");
let Users = class Users {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Users.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Users.prototype, "cart", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], Users.prototype, "confirmed", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Users.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Users.prototype, "date_of_birth", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ unique: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Users.prototype, "first_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => enums_1.GenderEnum, { nullable: true }),
    (0, typegoose_1.prop)({ default: enums_1.GenderEnum.NA }),
    __metadata("design:type", String)
], Users.prototype, "gender", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Users.prototype, "gender_other", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => types_1.Img, { nullable: true }),
    (0, typegoose_1.prop)({ type: () => types_1.Img }),
    __metadata("design:type", types_1.Img)
], Users.prototype, "img", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Users.prototype, "last_name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], Users.prototype, "newsletter", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Users.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => enums_1.PlanEnum, { nullable: true }),
    (0, typegoose_1.prop)({ default: enums_1.PlanEnum.FREE }),
    __metadata("design:type", String)
], Users.prototype, "plan", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => types_1.Professional, { nullable: true }),
    (0, typegoose_1.prop)({ type: () => types_1.Professional }),
    __metadata("design:type", types_1.Professional)
], Users.prototype, "professional", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => types_1.Provider, { nullable: true }),
    (0, typegoose_1.prop)({ type: () => types_1.Provider }),
    __metadata("design:type", types_1.Provider)
], Users.prototype, "provider", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => enums_1.RoleEnum),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Users.prototype, "role", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], Users.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], Users.prototype, "terms", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Users.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [types_1.UbicationT], { nullable: true }),
    (0, typegoose_1.prop)({ type: () => types_1.UbicationT }),
    __metadata("design:type", Array)
], Users.prototype, "ubication", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Users.prototype, "updated_at", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Users.prototype, "wish_list", void 0);
Users = __decorate([
    (0, type_graphql_1.ObjectType)()
], Users);
exports.Users = Users;
exports.UserMdl = (0, typegoose_1.getModelForClass)(Users);
