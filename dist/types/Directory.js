"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookOfferT = exports.BusinessT = void 0;
const type_graphql_1 = require("type-graphql");
var BusinessT;
(function (BusinessT) {
    BusinessT["NA"] = "NA";
    BusinessT["PROFESIONISTA"] = "PROFESIONISTA";
    BusinessT["VENDEDOR"] = "VENDEDOR";
})(BusinessT = exports.BusinessT || (exports.BusinessT = {}));
var LookOfferT;
(function (LookOfferT) {
    LookOfferT["BUSCO"] = "BUSCO";
    LookOfferT["NA"] = "NA";
    LookOfferT["OFREZCO"] = "OFREZCO";
})(LookOfferT = exports.LookOfferT || (exports.LookOfferT = {}));
(0, type_graphql_1.registerEnumType)(BusinessT, {
    name: 'BusinessT',
    description: 'BusinessT ENUM'
});
(0, type_graphql_1.registerEnumType)(LookOfferT, {
    name: 'LookOfferT',
    description: 'LookOfferT ENUM'
});
