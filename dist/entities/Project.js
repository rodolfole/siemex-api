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
exports.ProjectMdl = exports.Projects = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
const types_1 = require("../types");
let Projects = class Projects {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Projects.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => [types_1.ProjectType]),
    (0, typegoose_1.prop)({ type: () => types_1.ProjectType }),
    __metadata("design:type", Array)
], Projects.prototype, "projects", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => User_1.Users),
    (0, typegoose_1.prop)({ ref: User_1.Users }),
    __metadata("design:type", Object)
], Projects.prototype, "user_id", void 0);
Projects = __decorate([
    (0, type_graphql_1.ObjectType)()
], Projects);
exports.Projects = Projects;
exports.ProjectMdl = (0, typegoose_1.getModelForClass)(Projects);
