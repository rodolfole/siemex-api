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
exports.MessageMdl = exports.Messages = void 0;
const mongodb_1 = require("mongodb");
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
let Messages = class Messages {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", mongodb_1.ObjectId)
], Messages.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Messages.prototype, "content", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Messages.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: "" }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Messages.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Messages.prototype, "updated_at", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => User_1.Users),
    (0, typegoose_1.prop)({ ref: () => User_1.Users }),
    __metadata("design:type", Object)
], Messages.prototype, "owner_id", void 0);
Messages = __decorate([
    (0, type_graphql_1.ObjectType)()
], Messages);
exports.Messages = Messages;
exports.MessageMdl = (0, typegoose_1.getModelForClass)(Messages);
