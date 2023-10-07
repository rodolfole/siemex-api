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
exports.Professional = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const enums_1 = require("../enums");
const index_1 = require("./index");
let Professional = class Professional {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Professional.prototype, "company", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Professional.prototype, "company_description", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Professional.prototype, "curp", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => index_1.Img, { nullable: true }),
    (0, typegoose_1.prop)({ type: () => index_1.Img }),
    __metadata("design:type", index_1.Img)
], Professional.prototype, "img", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => enums_1.KindOfPersonEnum),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Professional.prototype, "kind_of_person", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Professional.prototype, "profession", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [index_1.Review], { nullable: true }),
    (0, typegoose_1.prop)({ type: () => index_1.Review }),
    __metadata("design:type", Array)
], Professional.prototype, "reviews", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Professional.prototype, "rfc", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => enums_1.SectorEnum, { nullable: true }),
    (0, typegoose_1.prop)({ default: enums_1.SectorEnum.NA }),
    __metadata("design:type", String)
], Professional.prototype, "sector", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Professional.prototype, "sector_other", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Professional.prototype, "seo_url", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Professional.prototype, "website", void 0);
Professional = __decorate([
    (0, type_graphql_1.InputType)("ProfessionalInput"),
    (0, type_graphql_1.ObjectType)("Professional")
], Professional);
exports.Professional = Professional;
