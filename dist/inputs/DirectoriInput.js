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
exports.DirectoryMdl = exports.DirectoriInput = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../entities");
const enums_1 = require("../enums");
const types_1 = require("../types");
let DirectoriInput = class DirectoriInput {
};
__decorate([
    (0, type_graphql_1.Field)(_type => types_1.BusinessT),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], DirectoriInput.prototype, "businessLine", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], DirectoriInput.prototype, "cellPhone", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: Date.now() }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], DirectoriInput.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], DirectoriInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], DirectoriInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], DirectoriInput.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => types_1.LookOfferT),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], DirectoriInput.prototype, "lookOffer", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], DirectoriInput.prototype, "newsletter", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], DirectoriInput.prototype, "terms", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], DirectoriInput.prototype, "typeProfession", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => enums_1.ProviderEnum),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], DirectoriInput.prototype, "typeSeller", void 0);
DirectoriInput = __decorate([
    (0, type_graphql_1.InputType)()
], DirectoriInput);
exports.DirectoriInput = DirectoriInput;
exports.DirectoryMdl = (0, typegoose_1.getModelForClass)(entities_1.Directories);
