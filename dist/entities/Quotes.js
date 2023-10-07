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
exports.QuoteMdl = exports.Quotes = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const enums_1 = require("../enums");
let Quotes = class Quotes {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Quotes.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Quotes.prototype, "cellPhone", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: Date.now() }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Quotes.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Quotes.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Quotes.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Quotes.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => enums_1.QuoteEnum),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Quotes.prototype, "quote", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Quotes.prototype, "message", void 0);
Quotes = __decorate([
    (0, type_graphql_1.ObjectType)()
], Quotes);
exports.Quotes = Quotes;
exports.QuoteMdl = (0, typegoose_1.getModelForClass)(Quotes);
