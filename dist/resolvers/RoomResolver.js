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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomResolver = void 0;
const mongoose_1 = require("mongoose");
const type_graphql_1 = require("type-graphql");
const Room_1 = require("../entities/Room");
const MessageInput_1 = require("../inputs/MessageInput");
const isAuth_1 = require("../middlewares/isAuth");
let RoomResolver = class RoomResolver {
    //   @FieldResolver(() => Users)
    //   async author(@Root() room: Rooms): Promise<Users | null> {
    //     const us = await UserMdl.findById(room.messages. owner_id);
    //     console.log("US REOLVER", us);
    //     return us;
    //   }
    createRoom(messageInput, chat_id, { payload } // @PubSub(TopicEnum.NEW_COMMENT) notifyNewComment: Publisher<Messages>
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let room;
                messageInput.owner_id = mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId);
                messageInput._id = mongoose_1.Types.ObjectId();
                room = yield Room_1.RoomMdl.findOne({ chat_id });
                if (room) {
                    room.messages = [...room.messages, messageInput];
                    room.save();
                }
                else {
                    room = yield Room_1.RoomMdl.create({
                        chat_id,
                        messages: [messageInput],
                    });
                }
                const roomFull = yield room
                    .populate([
                    {
                        path: "chat_id",
                        populate: [
                            {
                                path: "owner_id",
                            },
                            {
                                path: "members",
                            },
                        ],
                    },
                    {
                        path: "messages.owner_id",
                        model: "Users",
                    },
                ])
                    .execPopulate();
                // await notifyNewComment(room.messages.pop()!);
                return roomFull;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    getRoomsUser({ payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rooms = yield Room_1.RoomMdl.find().populate([
                    {
                        path: "chat_id",
                        match: {
                            members: { $in: [mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId)] },
                        },
                        populate: [
                            {
                                path: "members",
                            },
                            {
                                path: "owner_id",
                            },
                        ],
                    },
                    {
                        path: "messages.owner_id",
                        model: "Users",
                    },
                ]);
                return rooms.filter((room) => room.chat_id !== null);
                // return rooms;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    getRooms({ payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rooms = yield Room_1.RoomMdl.find().populate([
                    {
                        path: "chat_id",
                        populate: {
                            path: "owner_id",
                        },
                    },
                    {
                        path: "messages.owner_id",
                        model: "Users",
                    },
                ]);
                return rooms;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Room_1.Rooms, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Arg)("chat_id")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MessageInput_1.MessageInput, String, Object]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "createRoom", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Room_1.Rooms], { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "getRoomsUser", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Room_1.Rooms], { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "getRooms", null);
RoomResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Room_1.Rooms)
], RoomResolver);
exports.RoomResolver = RoomResolver;
