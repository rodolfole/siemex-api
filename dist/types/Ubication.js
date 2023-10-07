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
exports.UbicationT = exports.Coords = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
let Coords = class Coords {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Coords.prototype, "latitude", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Coords.prototype, "longitude", void 0);
Coords = __decorate([
    (0, type_graphql_1.InputType)("CoordsInput"),
    (0, type_graphql_1.ObjectType)("Coords")
], Coords);
exports.Coords = Coords;
let UbicationT = class UbicationT {
};
__decorate([
    (0, type_graphql_1.Field)(_type => Coords, { nullable: true }),
    (0, typegoose_1.prop)({ type: () => Coords }),
    __metadata("design:type", Coords)
], UbicationT.prototype, "coords", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UbicationT.prototype, "number", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UbicationT.prototype, "postal_code", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: '' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UbicationT.prototype, "reference", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UbicationT.prototype, "state", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UbicationT.prototype, "street", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UbicationT.prototype, "town", void 0);
UbicationT = __decorate([
    (0, type_graphql_1.InputType)("UbicationInput"),
    (0, type_graphql_1.ObjectType)("Ubication")
], UbicationT);
exports.UbicationT = UbicationT;
