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
exports.RoomMdl = exports.Rooms = void 0;
const mongodb_1 = require("mongodb");
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const Chat_1 = require("./Chat");
const Message_1 = require("./Message");
let Rooms = class Rooms {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", mongodb_1.ObjectId)
], Rooms.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Chat_1.Chats, { nullable: true }),
    (0, typegoose_1.prop)({ ref: Chat_1.Chats }),
    __metadata("design:type", Object)
], Rooms.prototype, "chat_id", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [Message_1.Messages]),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Rooms.prototype, "messages", void 0);
Rooms = __decorate([
    (0, type_graphql_1.ObjectType)()
], Rooms);
exports.Rooms = Rooms;
exports.RoomMdl = (0, typegoose_1.getModelForClass)(Rooms);
