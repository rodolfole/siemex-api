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
exports.OfferT = exports.PlaceT = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const enums_1 = require("../enums");
let PlaceT = class PlaceT {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], PlaceT.prototype, "state", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], PlaceT.prototype, "town", void 0);
PlaceT = __decorate([
    (0, type_graphql_1.InputType)("PlaceTInput"),
    (0, type_graphql_1.ObjectType)("PlaceT")
], PlaceT);
exports.PlaceT = PlaceT;
let OfferT = class OfferT {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], OfferT.prototype, "application_deadline", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], OfferT.prototype, "budget", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: new Date(), nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], OfferT.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => enums_1.ModalityEnum, { nullable: true }),
    (0, typegoose_1.prop)({ default: enums_1.ModalityEnum.FACETOFACE }),
    __metadata("design:type", String)
], OfferT.prototype, "modality", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], OfferT.prototype, "need", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], OfferT.prototype, "need_description", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => PlaceT, { nullable: true }),
    (0, typegoose_1.prop)({ type: () => PlaceT }),
    __metadata("design:type", PlaceT)
], OfferT.prototype, "place", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: true, nullable: true }),
    (0, typegoose_1.prop)({ default: true }),
    __metadata("design:type", Boolean)
], OfferT.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: new Date(), nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], OfferT.prototype, "updated_at", void 0);
OfferT = __decorate([
    (0, type_graphql_1.InputType)("OfferTInput"),
    (0, type_graphql_1.ObjectType)("OfferT")
], OfferT);
exports.OfferT = OfferT;
