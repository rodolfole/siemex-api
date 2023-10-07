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
exports.Schedule = exports.Days = exports.Day = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const uuid_1 = require("uuid");
let Day = class Day {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Day.prototype, "start", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Day.prototype, "end", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true, defaultValue: (0, uuid_1.v4)() }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Day.prototype, "id", void 0);
Day = __decorate([
    (0, type_graphql_1.InputType)("DayInput"),
    (0, type_graphql_1.ObjectType)("Day")
], Day);
exports.Day = Day;
let Days = class Days {
};
__decorate([
    (0, type_graphql_1.Field)((_type) => [Day], { nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Days.prototype, "monday", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [Day], { nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Days.prototype, "tuesday", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [Day], { nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Days.prototype, "thursday", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [Day], { nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Days.prototype, "wednesday", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [Day], { nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Days.prototype, "friday", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [Day], { nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Days.prototype, "saturday", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [Day], { nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Days.prototype, "sunday", void 0);
Days = __decorate([
    (0, type_graphql_1.InputType)("DaysInput"),
    (0, type_graphql_1.ObjectType)("Days")
], Days);
exports.Days = Days;
let Schedule = class Schedule {
};
__decorate([
    (0, type_graphql_1.Field)((_type) => Days, { nullable: true }),
    (0, typegoose_1.prop)({ type: () => Days }),
    __metadata("design:type", Days)
], Schedule.prototype, "days", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], Schedule.prototype, "vacation", void 0);
Schedule = __decorate([
    (0, type_graphql_1.InputType)("ScheduleInput"),
    (0, type_graphql_1.ObjectType)("Schedule")
], Schedule);
exports.Schedule = Schedule;
