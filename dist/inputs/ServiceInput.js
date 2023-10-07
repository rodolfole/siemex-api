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
exports.ServiceInput = void 0;
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
let ServiceInput = class ServiceInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ServiceInput.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: new Date(), nullable: true }),
    __metadata("design:type", Date)
], ServiceInput.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ServiceInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ServiceInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], ServiceInput.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: new Date(), nullable: true }),
    __metadata("design:type", Date)
], ServiceInput.prototype, "updated_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", mongodb_1.ObjectId)
], ServiceInput.prototype, "user_id", void 0);
ServiceInput = __decorate([
    (0, type_graphql_1.InputType)()
], ServiceInput);
exports.ServiceInput = ServiceInput;
