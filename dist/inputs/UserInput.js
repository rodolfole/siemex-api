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
exports.UserInput = void 0;
const type_graphql_1 = require("type-graphql");
const enums_1 = require("../enums");
const types_1 = require("../types");
let UserInput = class UserInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInput.prototype, "cart", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: new Date(), nullable: true }),
    __metadata("design:type", Date)
], UserInput.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UserInput.prototype, "date_of_birth", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "first_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => enums_1.GenderEnum, { nullable: true }),
    __metadata("design:type", String)
], UserInput.prototype, "gender", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInput.prototype, "gender_other", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => types_1.Img, { nullable: true }),
    __metadata("design:type", types_1.Img)
], UserInput.prototype, "img", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "last_name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UserInput.prototype, "newsletter", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => enums_1.PlanEnum, { nullable: true }),
    __metadata("design:type", String)
], UserInput.prototype, "plan", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => types_1.Professional, { nullable: true }),
    __metadata("design:type", types_1.Professional)
], UserInput.prototype, "professional", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => types_1.Provider, { nullable: true }),
    __metadata("design:type", types_1.Provider)
], UserInput.prototype, "provider", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => enums_1.RoleEnum),
    __metadata("design:type", String)
], UserInput.prototype, "role", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UserInput.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], UserInput.prototype, "terms", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInput.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [types_1.UbicationT]),
    __metadata("design:type", Array)
], UserInput.prototype, "ubication", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: new Date(), nullable: true }),
    __metadata("design:type", Date)
], UserInput.prototype, "updated_at", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInput.prototype, "wish_list", void 0);
UserInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserInput);
exports.UserInput = UserInput;
