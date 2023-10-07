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
exports.SubsidiaryType = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const Ubication_1 = require("./Ubication");
const ContactInformation_1 = require("./ContactInformation");
let SubsidiaryType = class SubsidiaryType {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SubsidiaryType.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: new Date(), nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], SubsidiaryType.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => ContactInformation_1.ContactInformation, { nullable: true }),
    (0, typegoose_1.prop)({ type: () => ContactInformation_1.ContactInformation }),
    __metadata("design:type", ContactInformation_1.ContactInformation)
], SubsidiaryType.prototype, "contact_information", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => Ubication_1.UbicationT),
    (0, typegoose_1.prop)({ type: () => Ubication_1.UbicationT }),
    __metadata("design:type", Ubication_1.UbicationT)
], SubsidiaryType.prototype, "ubication", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: new Date(), nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], SubsidiaryType.prototype, "updated_at", void 0);
SubsidiaryType = __decorate([
    (0, type_graphql_1.InputType)("SubsidiaryTypeInput"),
    (0, type_graphql_1.ObjectType)("SubsidiaryType")
], SubsidiaryType);
exports.SubsidiaryType = SubsidiaryType;
