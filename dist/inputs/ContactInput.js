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
exports.ContactMdl = exports.ContactInput = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../entities");
let ContactInput = class ContactInput {
};
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: Date.now() }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ContactInput.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], ContactInput.prototype, "emailFrom", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ default: "" }),
    __metadata("design:type", String)
], ContactInput.prototype, "emailTo", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], ContactInput.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], ContactInput.prototype, "name", void 0);
ContactInput = __decorate([
    (0, type_graphql_1.InputType)()
], ContactInput);
exports.ContactInput = ContactInput;
exports.ContactMdl = (0, typegoose_1.getModelForClass)(entities_1.Contacts);
