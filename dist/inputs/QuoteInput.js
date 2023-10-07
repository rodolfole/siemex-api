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
exports.QuoteMdl = exports.QuoteInput = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../entities");
const enums_1 = require("../enums");
let QuoteInput = class QuoteInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], QuoteInput.prototype, "cellPhone", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: Date.now() }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], QuoteInput.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], QuoteInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], QuoteInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], QuoteInput.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], QuoteInput.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => enums_1.QuoteEnum),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], QuoteInput.prototype, "quote", void 0);
QuoteInput = __decorate([
    (0, type_graphql_1.InputType)()
], QuoteInput);
exports.QuoteInput = QuoteInput;
exports.QuoteMdl = (0, typegoose_1.getModelForClass)(entities_1.Quotes);
