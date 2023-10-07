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
exports.ProjectType = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const types_1 = require("../types");
let ProjectType = class ProjectType {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ProjectType.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: new Date(), nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], ProjectType.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ProjectType.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => types_1.Img),
    (0, typegoose_1.prop)({ type: () => types_1.Img }),
    __metadata("design:type", types_1.Img)
], ProjectType.prototype, "img", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ProjectType.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ProjectType.prototype, "rating", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], ProjectType.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: new Date(), nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], ProjectType.prototype, "updated_at", void 0);
ProjectType = __decorate([
    (0, type_graphql_1.InputType)("ProjectTypeInput"),
    (0, type_graphql_1.ObjectType)("ProjectType")
], ProjectType);
exports.ProjectType = ProjectType;
