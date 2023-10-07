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
exports.ProjectResolver = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const mongoose_1 = require("mongoose");
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../entities");
const isAuth_1 = require("../middlewares/isAuth");
const ProjectInput_1 = require("../inputs/ProjectInput");
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
let ProjectResolver = class ProjectResolver {
    deleteProject(projectId, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield entities_1.ProjectMdl.updateOne({ user_id: payload === null || payload === void 0 ? void 0 : payload.userId }, { $pull: { projects: { _id: projectId } } });
                return true;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    getProjects(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (userId === "")
                    return null;
                return yield entities_1.ProjectMdl.findOne({ user_id: userId }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    getProjectsUser({ payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield entities_1.ProjectMdl.findOne({ user_id: payload === null || payload === void 0 ? void 0 : payload.userId }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    postProject(projectInput, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id } = projectInput, rest = __rest(projectInput, ["user_id"]);
                const projects = yield entities_1.ProjectMdl.findOne({ user_id: payload === null || payload === void 0 ? void 0 : payload.userId });
                projectInput.user_id = mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId);
                if (!projects) {
                    return yield entities_1.ProjectMdl.create(projectInput);
                }
                else {
                    projects.projects = [...projects.projects, ...rest.projects];
                    projects.save();
                    return projects;
                }
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    putProject(projectId, projectInput, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = projectInput.projects[0], { created_at } = _a, rest = __rest(_a, ["created_at"]);
                const project = yield entities_1.ProjectMdl.findOne({ "projects._id": projectId });
                project === null || project === void 0 ? void 0 : project.projects.filter((p) => {
                    if (p._id.toString() === projectId.toString()) {
                        if (p.img.public_id !== rest.img.public_id) {
                            cloudinary_1.default.v2.uploader.destroy(p.img.public_id);
                        }
                    }
                });
                return yield entities_1.ProjectMdl.findOneAndUpdate({ user_id: payload === null || payload === void 0 ? void 0 : payload.userId, "projects._id": projectId }, { $set: { "projects.$": Object.assign(Object.assign({}, rest), { _id: projectId }) } }, { new: true }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("projectId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "deleteProject", null);
__decorate([
    (0, type_graphql_1.Query)(() => entities_1.Projects, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "getProjects", null);
__decorate([
    (0, type_graphql_1.Query)(() => entities_1.Projects, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "getProjectsUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Projects),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProjectInput_1.ProjectInput, Object]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "postProject", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Projects, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("projectId")),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ProjectInput_1.ProjectInput, Object]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "putProject", null);
ProjectResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => entities_1.Projects)
], ProjectResolver);
exports.ProjectResolver = ProjectResolver;
