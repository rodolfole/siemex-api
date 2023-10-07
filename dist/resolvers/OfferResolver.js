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
exports.OfferResolver = void 0;
const mongoose_1 = require("mongoose");
const type_graphql_1 = require("type-graphql");
const inputs_1 = require("../inputs");
const isAuth_1 = require("../middlewares/isAuth");
const entities_1 = require("../entities");
// @InputType()
// export class OrderByParams {
//     @Field({ nullable: true })
//     field!: string;
//     @Field({ nullable: true })
//     direction!: number;
// }
let OfferResolver = class OfferResolver {
    getOffers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const { field = 'created_at', direction = 1 } = orderBy || {};
                // return await OfferMdl.find().collation({ locale: 'en' }).sort({ [`offer.${field}`]: direction }).populate('user_id');
                return yield entities_1.OfferMdl.find().populate("user_id");
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    getOffersUser({ payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield entities_1.OfferMdl.find({
                    user_id: mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId),
                });
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    createOffer(offerInput, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                offerInput.user_id = mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId);
                //offerInput.offer.id = uuid();
                return yield entities_1.OfferMdl.create(offerInput);
                /*if ( !offer ) {
                          await OfferMdl.create(offerInput)
                      } else {
                          offer.offers = [...offer.offers, offerInput.offers]
                          await offer.save()
                      }*/
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    deleteOffer({ payload }, offerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield entities_1.OfferMdl.findOneAndDelete({
                    _id: offerId,
                    user_id: mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId),
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
    updateOffer(offerInput, { payload }, offerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield entities_1.OfferMdl.findOneAndUpdate({ _id: offerId, user_id: mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId) }, offerInput, { new: true });
                //offerInput.offers.id = offerId
                /*return await OfferMdl.findOneAndUpdate(
                          {  user_id: Types.ObjectId(payload?.userId), "offers.id": offerId },
                          { $set: { "offers.$": offerInput.offers } },
                          { new : true }
                      );*/
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [entities_1.Offers], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OfferResolver.prototype, "getOffers", null);
__decorate([
    (0, type_graphql_1.Query)(() => [entities_1.Offers], { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OfferResolver.prototype, "getOffersUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Offers, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.OfferInput, Object]),
    __metadata("design:returntype", Promise)
], OfferResolver.prototype, "createOffer", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Offers, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("offerId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OfferResolver.prototype, "deleteOffer", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => entities_1.Offers),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("offer")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __param(2, (0, type_graphql_1.Arg)("offerId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.OfferInput, Object, String]),
    __metadata("design:returntype", Promise)
], OfferResolver.prototype, "updateOffer", null);
OfferResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => entities_1.Offers)
], OfferResolver);
exports.OfferResolver = OfferResolver;
