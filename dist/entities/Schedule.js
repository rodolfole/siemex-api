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
exports.ScheduleMdl = exports.Schedules = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const Schedule_1 = require("../types/Schedule");
const User_1 = require("./User");
let Schedules = class Schedules {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Schedules.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Schedule_1.Days, { nullable: true }),
    (0, typegoose_1.prop)({ type: () => Schedule_1.Days }),
    __metadata("design:type", Schedule_1.Days)
], Schedules.prototype, "days", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], Schedules.prototype, "vacation", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => User_1.Users),
    (0, typegoose_1.prop)({ ref: User_1.Users }),
    __metadata("design:type", Object)
], Schedules.prototype, "user_id", void 0);
Schedules = __decorate([
    (0, type_graphql_1.ObjectType)()
], Schedules);
exports.Schedules = Schedules;
exports.ScheduleMdl = (0, typegoose_1.getModelForClass)(Schedules);
