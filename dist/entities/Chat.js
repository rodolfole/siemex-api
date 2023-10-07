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
exports.ChatMdl = exports.Chats = void 0;
const mongodb_1 = require("mongodb");
const typegoose_1 = require("@typegoose/typegoose");
const constants_1 = require("@typegoose/typegoose/lib/internal/constants");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
let Chats = class Chats {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", mongodb_1.ObjectId)
], Chats.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ default: new Date() }),
    __metadata("design:type", Date)
], Chats.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ default: "" }),
    __metadata("design:type", String)
], Chats.prototype, "img", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], Chats.prototype, "is_closed", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [User_1.Users], { nullable: true }),
    (0, typegoose_1.prop)({ ref: () => User_1.Users }, constants_1.WhatIsIt.ARRAY),
    __metadata("design:type", Array)
], Chats.prototype, "members", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Chats.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => User_1.Users),
    (0, typegoose_1.prop)({ ref: () => User_1.Users }),
    __metadata("design:type", Object)
], Chats.prototype, "owner_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ default: "" }),
    __metadata("design:type", String)
], Chats.prototype, "topic", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ default: "" }),
    __metadata("design:type", String)
], Chats.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ default: new Date() }),
    __metadata("design:type", Date)
], Chats.prototype, "updated_at", void 0);
Chats = __decorate([
    (0, type_graphql_1.ObjectType)()
], Chats);
exports.Chats = Chats;
exports.ChatMdl = (0, typegoose_1.getModelForClass)(Chats);
