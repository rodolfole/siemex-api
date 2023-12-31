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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const mongoose_1 = require("mongoose");
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../entities");
const ProductInput_1 = require("../inputs/ProductInput");
const isAuth_1 = require("../middlewares/isAuth");
let ProductResolver = class ProductResolver {
    getProduct(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield entities_1.ProductMdl.findOne({ _id });
                return product;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    getProducts(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (userId === "")
                    return null;
                return yield entities_1.ProductMdl.find({ user_id: userId }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    getProductsUser({ payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield entities_1.ProductMdl.find({ user_id: payload === null || payload === void 0 ? void 0 : payload.userId }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    deleteProduct({ payload }, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield entities_1.ProductMdl.findOneAndDelete({
                    _id: productId,
                    user_id: payload === null || payload === void 0 ? void 0 : payload.userId,
                });
                /*await OfferMdl.findOneAndUpdate(
                          {  user_id: Types.ObjectId(payload?.userId) },
                          { $pull: { offers: { id: offerId } } },
                          { new : true }
                      );*/
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    postProduct(productInput, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                productInput.user_id = mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId);
                const newProduct = yield entities_1.ProductMdl.create(productInput);
                //await notifyNewProduct(newProduct)
                return newProduct;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    /*@Subscription(() => Products, { topics: TopicEnum.NEW_PRODUCT })
      async newProduct( @Root() newProduct: Products ) {
          return newProduct;
      }*/
    putProduct(_id, productInput, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id } = productInput, rest = __rest(productInput, ["user_id"]);
                return yield entities_1.ProductMdl.findOneAndUpdate({ _id, user_id: payload === null || payload === void 0 ? void 0 : payload.userId }, rest, { new: true }).populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    putStatusProduct(_id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield entities_1.ProductMdl.findOneAndUpdate({ _id }, { status }, { new: true });
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => entities_1.Products),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProduct", null);
__decorate([
    (0, type_graphql_1.Query)(() => [entities_1.Products], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
__decorate([
    (0, type_graphql_1.Query)(() => [entities_1.Products], { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProductsUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Products, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Products),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductInput_1.ProductInput, Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "postProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Products, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ProductInput_1.ProductInput, Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "putProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Products),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "putStatusProduct", null);
ProductResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => entities_1.Products)
], ProductResolver);
exports.ProductResolver = ProductResolver;
