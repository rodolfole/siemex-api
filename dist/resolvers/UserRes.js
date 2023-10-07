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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const bcryptjs_1 = require("bcryptjs");
const cloudinary_1 = __importDefault(require("cloudinary"));
const jsonwebtoken_1 = require("jsonwebtoken");
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../entities");
const jwt_1 = require("../helpers/jwt");
const inputs_1 = require("../inputs");
const createUrl_1 = require("../helpers/createUrl");
const email_1 = require("../helpers/email");
const isAuth_1 = require("../middlewares/isAuth");
const enums_1 = require("../enums");
const types_1 = require("../types");
const menu_1 = require("../helpers/menu");
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
let MenuItem = class MenuItem {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MenuItem.prototype, "icon", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MenuItem.prototype, "text", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MenuItem.prototype, "url", void 0);
MenuItem = __decorate([
    (0, type_graphql_1.ObjectType)()
], MenuItem);
let LoginResponse = class LoginResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [MenuItem]),
    __metadata("design:type", Array)
], LoginResponse.prototype, "menu", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => entities_1.Users),
    __metadata("design:type", entities_1.Users)
], LoginResponse.prototype, "user", void 0);
LoginResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], LoginResponse);
let UserResponse = class UserResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => entities_1.Users),
    __metadata("design:type", entities_1.Users)
], UserResponse.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => [MenuItem]),
    __metadata("design:type", Array)
], UserResponse.prototype, "menu", void 0);
UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
let UsersResponse = class UsersResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [entities_1.Users]),
    __metadata("design:type", Array)
], UsersResponse.prototype, "professionals", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [entities_1.Users]),
    __metadata("design:type", Array)
], UsersResponse.prototype, "providers", void 0);
UsersResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UsersResponse);
let UserResolver = class UserResolver {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield entities_1.UserMdl.find();
        });
    }
    getUserData(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const authorization = context.req.headers["authorization"];
            if (!authorization)
                return null;
            try {
                const token = authorization.split(" ")[1];
                const payload = (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_SECRET);
                let menu = [];
                const user = yield entities_1.UserMdl.findOne({ _id: payload.userId });
                if (user)
                    menu = (0, menu_1.getMenu)(user === null || user === void 0 ? void 0 : user.role);
                return { user, menu };
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    getUserUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield entities_1.UserMdl.findOne({ url });
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const professionals = yield entities_1.UserMdl.find({
                confirmed: true,
                role: enums_1.RoleEnum.PROFESSIONAL,
                terms: true,
            });
            const providers = yield entities_1.UserMdl.find({
                confirmed: true,
                role: enums_1.RoleEnum.PROVIDER,
                terms: true,
            });
            return { professionals, providers };
        });
    }
    /*@Mutation( () => Boolean )
      async revokeRefreshTokensForUser( @Arg('userId', () => Int ) userId: number) {
          await getConnection()
              .getRepository( Users )
              .increment( { _id: userId }, 'tokenVersion', 1 );
      
          return true;
      }*/
    confirmUserEmail(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("CONFIRM TOKEN", token);
                const payload = (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_SECRET);
                console.log(payload);
                //console.log(_id, type);
                yield entities_1.UserMdl.findOneAndUpdate({ _id: payload.userId._id }, { confirmed: true });
                return true;
            }
            catch (err) {
                console.log("EXPIRED", err);
                return false;
            }
        });
    }
    getPendingUser(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield entities_1.UserMdl.findOne({ _id });
            if (!(user === null || user === void 0 ? void 0 : user.password)) {
                return user;
            }
            return null;
        });
    }
    createPendingUser(userInput) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield entities_1.UserMdl.create(userInput)).save();
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    editPendingUser(_id, userInput) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                userInput.password = (0, bcryptjs_1.hashSync)(userInput.password, 12);
                if (userInput.role === enums_1.RoleEnum.PROFESSIONAL) {
                    userInput.professional.seo_url = (0, createUrl_1.createUrl)(userInput.role, !userInput.professional.sector
                        ? userInput.professional.sector_other
                        : userInput.professional.sector, userInput.professional.company
                        ? userInput.professional.company
                        : userInput.first_name + "-" + userInput.last_name);
                }
                if (userInput.role === enums_1.RoleEnum.PROVIDER) {
                    userInput.provider.seo_url = (0, createUrl_1.createUrl)(userInput.role, !userInput.provider.sector
                        ? userInput.provider.sector_other
                        : userInput.provider.sector, userInput.provider.store_name
                        ? userInput.provider.store_name
                        : userInput.first_name + "-" + userInput.last_name);
                }
                console.log("userInput", userInput);
                const user = yield entities_1.UserMdl.findOneAndUpdate({ _id }, userInput, {
                    new: true,
                });
                if (user) {
                    const token = (0, jwt_1.createAccessToken)({ _id: user._id, type: "EDIT_PENDING_USER" }, "2h");
                    const template = (0, email_1.getConfirmTemplate)(`${user.first_name} ${user.last_name}`, "CONFIRM_EMAIL", (0, createUrl_1.createConfirmUrl)("confirmacion-email", token));
                    console.log(token);
                    console.log("conf url", (0, createUrl_1.createConfirmUrl)("confirmacion-email", token));
                    yield (0, email_1.sendEmail)("", user.email, "Confirmacion de registro", template);
                    return user;
                }
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    createUser(userInput) {
        return __awaiter(this, void 0, void 0, function* () {
            let { password } = userInput, rest = __rest(userInput, ["password"]);
            const hashedPassword = (0, bcryptjs_1.hashSync)(password, 12);
            password = hashedPassword;
            try {
                let existUser = [];
                let contactI;
                if (rest.role === enums_1.RoleEnum.PROFESSIONAL) {
                    existUser = yield entities_1.UserMdl.find({
                        url: (0, createUrl_1.createUrl)(rest.role, !rest.professional.sector
                            ? rest.professional.sector_other
                            : rest.professional.sector, rest.professional.company
                            ? rest.professional.company
                            : rest.first_name + "-" + rest.last_name),
                    });
                    /*const contact = await ContactInfoMdl.create({ facebook: 'Test F', phone: 'Test Phoneee' })
                            console.log(contact)
                            contactI = Types.ObjectId(contact._id);*/
                    if (existUser.length === 0) {
                    }
                    rest.professional.seo_url = (0, createUrl_1.createUrl)(rest.role, !rest.professional.sector
                        ? rest.professional.sector_other
                        : rest.professional.sector, rest.professional.company
                        ? rest.professional.company
                        : rest.first_name + "-" + rest.last_name);
                }
                if (rest.role === enums_1.RoleEnum.PROVIDER) {
                    existUser = yield entities_1.UserMdl.find({
                        url: (0, createUrl_1.createUrl)(rest.role, !rest.provider.sector
                            ? rest.provider.sector_other
                            : rest.provider.sector, rest.provider.store_name
                            ? rest.provider.store_name
                            : rest.first_name + "-" + rest.last_name),
                    });
                    if (existUser.length === 0)
                        rest.provider.seo_url = (0, createUrl_1.createUrl)(rest.role, !rest.provider.sector
                            ? rest.provider.sector_other
                            : rest.provider.sector, rest.provider.store_name
                            ? rest.provider.store_name
                            : rest.first_name + "-" + rest.last_name);
                }
                const user = (yield entities_1.UserMdl.create(Object.assign(Object.assign({}, rest), { password }))).save();
                const token = (0, jwt_1.createAccessToken)({ _id: (yield user)._id, type: "CREATE_USER" }, "1h");
                const template = (0, email_1.getConfirmTemplate)(`${rest.first_name} ${rest.last_name}`, "CONFIRM_EMAIL", (0, createUrl_1.createConfirmUrl)("confirmacion-email", token));
                // await sendEmail("", rest.email, "Confirmacion de registro", template);
                return user;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    existUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDB = yield entities_1.UserMdl.findOne({ email: email.toLowerCase() });
            if (!userDB)
                return null;
            return true;
        });
    }
    updateUser(userInput, { payload }, _id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password } = userInput, rest = __rest(userInput, ["password"]);
                const user = yield entities_1.UserMdl.findOne({ _id: payload.userId });
                if (user) {
                    if ((user === null || user === void 0 ? void 0 : user.img.public_id) !== "" &&
                        userInput.img.public_id !== (user === null || user === void 0 ? void 0 : user.img.public_id)) {
                        yield cloudinary_1.default.v2.uploader.destroy(user.img.public_id);
                    }
                    if (user.role === enums_1.RoleEnum.PROFESSIONAL) {
                        if (user.professional.img.public_id !== "" &&
                            userInput.professional.img.public_id !==
                                user.professional.img.public_id) {
                            yield cloudinary_1.default.v2.uploader.destroy(user.professional.img.public_id);
                        }
                    }
                    else if (user.role === enums_1.RoleEnum.PROVIDER) {
                        if (user.provider.img.public_id !== "" &&
                            userInput.provider.img.public_id !== user.provider.img.public_id) {
                            yield cloudinary_1.default.v2.uploader.destroy(user.provider.img.public_id);
                        }
                    }
                }
                const userUp = yield entities_1.UserMdl.findOneAndUpdate({ _id: payload.userId }, Object.assign({}, rest), { new: true });
                return userUp;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    updateUserImg(imgInput, role, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield entities_1.UserMdl.findOne({ _id: payload === null || payload === void 0 ? void 0 : payload.userId });
                if (!user)
                    return null;
                role === enums_1.RoleEnum.BUYER
                    ? (yield cloudinary_1.default.v2.uploader.destroy(user.img.public_id),
                        (user.img = imgInput))
                    : role === enums_1.RoleEnum.PROFESSIONAL
                        ? (yield cloudinary_1.default.v2.uploader.destroy(user.professional.img.public_id),
                            (user.professional.img = imgInput))
                        : role === enums_1.RoleEnum.PROVIDER
                            ? (yield cloudinary_1.default.v2.uploader.destroy(user.provider.img.public_id),
                                (user.provider.img = imgInput))
                            : null;
                yield user.save();
                return user;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    updateUserPassword(pwdAct, pwdConf, pwdNew, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (pwdNew !== pwdConf)
                    return null;
                const user = yield entities_1.UserMdl.findOne({ _id: payload === null || payload === void 0 ? void 0 : payload.userId });
                if (!user)
                    return null;
                if (pwdAct && !(0, bcryptjs_1.compareSync)(pwdAct, user.password))
                    return null;
                user.password = (0, bcryptjs_1.hashSync)(pwdNew, 12);
                user.save();
                const template = (0, email_1.getConfirmTemplate)(`${user.first_name} ${user.last_name}`, "UPDATED_PASSWORD");
                yield (0, email_1.sendEmail)("", user.email, "Contraseña actualizada", template);
                return true;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    resetPassword(pwdNewConf, pwdNew, token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (pwdNew !== pwdNewConf)
                return "Las contraseñas deben de ser iguales";
            try {
                (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_SECRET);
            }
            catch (error) {
                return "Link invalido, crea un nuevo link";
            }
            try {
                const user = yield entities_1.UserMdl.findOne({ token });
                if (!user)
                    return "Link invalido";
                user.password = (0, bcryptjs_1.hashSync)(pwdNew, 12);
                user.token = "";
                user.save();
                return "Restablecimiento de contraseña con éxito";
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    forgotUserPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield entities_1.UserMdl.findOne({ email });
                if (!user)
                    return `El usuario con el email: ${email} no existe`;
                const token = (0, jwt_1.createAccessToken)({ _id: user._id, type: "FORGET_PASSWORD" }, "1h");
                user.token = token;
                user.save();
                const template = (0, email_1.getConfirmTemplate)(`${user.first_name} ${user.last_name}`, "FORGET_PASSWORD", (0, createUrl_1.createConfirmUrl)("cambiar-contrasena", token));
                yield (0, email_1.sendEmail)("", user.email, "Reestablecer contraseña", template);
                return "Se envio enlace para cambiar la contraseña";
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    userLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDB = yield entities_1.UserMdl.findOne({ email, confirmed: true });
            if (!userDB)
                return null;
            console.log(userDB);
            const valid = (0, bcryptjs_1.compareSync)(password, userDB.password);
            let menu = [];
            if (userDB)
                menu = (0, menu_1.getMenu)(userDB === null || userDB === void 0 ? void 0 : userDB.role);
            console.log("validdd", valid);
            if (!valid)
                return null;
            return {
                accessToken: (0, jwt_1.createAccessToken)(userDB._id, "7d"),
                menu,
                user: userDB,
            };
        });
    }
    userLogout({ res }) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, jwt_1.sendRefreshToken)(res, "");
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [entities_1.Users]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    (0, type_graphql_1.Query)(() => UserResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserData", null);
__decorate([
    (0, type_graphql_1.Query)(() => entities_1.Users, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("url")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserUrl", null);
__decorate([
    (0, type_graphql_1.Query)(() => UsersResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "confirmUserEmail", null);
__decorate([
    (0, type_graphql_1.Query)(() => entities_1.Users, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getPendingUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Users, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createPendingUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Users, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, inputs_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "editPendingUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Users, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "existUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Users),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __param(2, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.UserInput, Object, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Users),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Arg)("role")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.Img, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserImg", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("pwdAct")),
    __param(1, (0, type_graphql_1.Arg)("pwdConf")),
    __param(2, (0, type_graphql_1.Arg)("pwdNew")),
    __param(3, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("pwdNewConf")),
    __param(1, (0, type_graphql_1.Arg)("pwdNew")),
    __param(2, (0, type_graphql_1.Arg)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "resetPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "forgotUserPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => LoginResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "userLogin", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "userLogout", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => entities_1.Users)
], UserResolver);
exports.UserResolver = UserResolver;
