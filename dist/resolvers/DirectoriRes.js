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
exports.DirectoriResolver = void 0;
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../entities");
const inputs_1 = require("../inputs");
const isAuth_1 = require("../middlewares/isAuth");
let DirectoriResolver = class DirectoriResolver {
    getDirectories() {
        return __awaiter(this, void 0, void 0, function* () {
            return entities_1.DirectoryMdl.find();
        });
    }
    postDirectory(directoriInput) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const directory = (yield entities_1.DirectoryMdl.create(directoriInput)).save();
                return directory;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [entities_1.Directories]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DirectoriResolver.prototype, "getDirectories", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Directories),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.DirectoriInput]),
    __metadata("design:returntype", Promise)
], DirectoriResolver.prototype, "postDirectory", null);
DirectoriResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => entities_1.Directories)
], DirectoriResolver);
exports.DirectoriResolver = DirectoriResolver;
