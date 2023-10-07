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
exports.OfferInput = void 0;
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
const types_1 = require("../types");
let OfferInput = class OfferInput {
};
__decorate([
    (0, type_graphql_1.Field)(_type => types_1.OfferT, { nullable: true }),
    __metadata("design:type", types_1.OfferT)
], OfferInput.prototype, "offer", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", mongodb_1.ObjectId)
], OfferInput.prototype, "user_id", void 0);
OfferInput = __decorate([
    (0, type_graphql_1.InputType)()
], OfferInput);
exports.OfferInput = OfferInput;
