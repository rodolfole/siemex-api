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
exports.ChatResolver = void 0;
const mongoose_1 = require("mongoose");
const type_graphql_1 = require("type-graphql");
const Chat_1 = require("../entities/Chat");
const ChatInput_1 = require("../inputs/ChatInput");
const isAuth_1 = require("../middlewares/isAuth");
let ChatResolver = class ChatResolver {
    getChats() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Chat_1.ChatMdl.find().populate("members");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    getChatsUser({ payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Chat_1.ChatMdl.find({
                    members: { $in: [mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId)] },
                })
                    .populate("members")
                    .populate("owner_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    createChat(chatInput, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                chatInput.owner_id = mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId);
                return (yield Chat_1.ChatMdl.create(chatInput))
                    .populate("members")
                    .execPopulate();
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    // @Mutation(() => Rooms, { nullable: true })
    // @UseMiddleware(isAuth)
    // async createRoom(
    //   @Arg("input") messageInput: MessageInput,
    //   @Arg("chat_id") chat_id: string,
    //   @Ctx() { payload }: Context
    // ) {
    //   try {
    //     let room;
    //     messageInput.owner_id = Types.ObjectId(payload?.userId);
    //     messageInput._id = Types.ObjectId();
    //     room = await RoomMdl.findOne({ chat_id });
    //     if (room) {
    //       room.messages = [...room.messages, messageInput];
    //       room.save();
    //     } else {
    //       room = await RoomMdl.create({
    //         chat_id,
    //         messages: messageInput,
    //         owner: Types.ObjectId(payload?.userId),
    //       });
    //     }
    //     return room;
    //   } catch (err) {
    //     console.log(err);
    //     return null;
    //   }
    // }
    // @Query(() => [Rooms], { nullable: true })
    // @UseMiddleware(isAuth)
    // async getRoomsUser(
    //   @Ctx() { payload }: Context
    // ): Promise<DocumentType<Rooms>[] | null> {
    //   try {
    //     return await RoomMdl.find({
    //       "messages.owner_id": Types.ObjectId(payload?.userId),
    //     }).populate("chat_id");
    //   } catch (err) {
    //     console.log(err);
    //     return null;
    //   }
    // }
    deleteChat({ payload }, offerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Chat_1.ChatMdl.findOneAndDelete({
                    _id: offerId,
                    user_id: mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId),
                });
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    updateChat(chatInput, { payload }, offerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Chat_1.ChatMdl.findOneAndUpdate({ _id: offerId, user_id: mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId) }, chatInput, { new: true });
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Chat_1.Chats], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "getChats", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Chat_1.Chats], { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "getChatsUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Chat_1.Chats, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChatInput_1.ChatInput, Object]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "createChat", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Chat_1.Chats, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("offerId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "deleteChat", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Chat_1.Chats),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("offer")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __param(2, (0, type_graphql_1.Arg)("offerId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChatInput_1.ChatInput, Object, String]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "updateChat", null);
ChatResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Chat_1.Chats)
], ChatResolver);
exports.ChatResolver = ChatResolver;
