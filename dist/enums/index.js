"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicEnum = exports.TimeLapseTypeEnum = exports.SectorEnum = exports.RoleEnum = exports.QuoteEnum = exports.ProviderEnum = exports.PlanEnum = exports.ModalityEnum = exports.KindOfPersonEnum = exports.GenderEnum = exports.Category = void 0;
const type_graphql_1 = require("type-graphql");
var Category;
(function (Category) {
    Category[Category["BOY"] = 0] = "BOY";
    Category[Category["GIRL"] = 1] = "GIRL";
    Category[Category["MEN"] = 2] = "MEN";
    Category[Category["WOMEN"] = 3] = "WOMEN";
})(Category = exports.Category || (exports.Category = {}));
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["MAN"] = "MAN";
    GenderEnum["NA"] = "NA";
    GenderEnum["OTHER"] = "OTHER";
    GenderEnum["WOMAN"] = "WOMAN";
})(GenderEnum = exports.GenderEnum || (exports.GenderEnum = {}));
var KindOfPersonEnum;
(function (KindOfPersonEnum) {
    KindOfPersonEnum["MORAL"] = "MORAL";
    KindOfPersonEnum["NA"] = "NA";
    KindOfPersonEnum["PHYSICAL"] = "PHYSICAL";
})(KindOfPersonEnum = exports.KindOfPersonEnum || (exports.KindOfPersonEnum = {}));
var ModalityEnum;
(function (ModalityEnum) {
    ModalityEnum["FACETOFACE"] = "FACETOFACE";
    ModalityEnum["NA"] = "NA";
    ModalityEnum["REMOTE"] = "REMOTE";
})(ModalityEnum = exports.ModalityEnum || (exports.ModalityEnum = {}));
var PlanEnum;
(function (PlanEnum) {
    PlanEnum["FREE"] = "FREE";
    PlanEnum["NA"] = "NA";
    PlanEnum["PREMIUM"] = "PREMIUM";
})(PlanEnum = exports.PlanEnum || (exports.PlanEnum = {}));
var ProviderEnum;
(function (ProviderEnum) {
    ProviderEnum["NA"] = "NA";
    ProviderEnum["RETAILER"] = "RETAILER";
    ProviderEnum["WHOLESALER"] = "WHOLESALER";
})(ProviderEnum = exports.ProviderEnum || (exports.ProviderEnum = {}));
var QuoteEnum;
(function (QuoteEnum) {
    QuoteEnum["COUNTED"] = "COUNTED";
    QuoteEnum["FINANCED"] = "FINANCED";
})(QuoteEnum = exports.QuoteEnum || (exports.QuoteEnum = {}));
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["ADMINISTRATOR"] = "ADMINISTRATOR";
    RoleEnum["BUYER"] = "BUYER";
    RoleEnum["NA"] = "NA";
    RoleEnum["PROFESSIONAL"] = "PROFESSIONAL";
    RoleEnum["PROVIDER"] = "PROVIDER";
})(RoleEnum = exports.RoleEnum || (exports.RoleEnum = {}));
var SectorEnum;
(function (SectorEnum) {
    SectorEnum["ENERGY"] = "ENERGY";
    SectorEnum["NA"] = "NA";
    SectorEnum["OTHER"] = "OTHER";
})(SectorEnum = exports.SectorEnum || (exports.SectorEnum = {}));
var TimeLapseTypeEnum;
(function (TimeLapseTypeEnum) {
    TimeLapseTypeEnum["DAY"] = "DAY";
    TimeLapseTypeEnum["MONTH"] = "MONTH";
    TimeLapseTypeEnum["NA"] = "";
})(TimeLapseTypeEnum = exports.TimeLapseTypeEnum || (exports.TimeLapseTypeEnum = {}));
var TopicEnum;
(function (TopicEnum) {
    TopicEnum["NEW_PRODUCT"] = "NEW_PRODUCT";
    TopicEnum["NEW_COMMENT"] = "NEW_COMMENT";
})(TopicEnum = exports.TopicEnum || (exports.TopicEnum = {}));
(0, type_graphql_1.registerEnumType)(Category, {
    name: "Category",
    description: "Categories ENUM",
});
(0, type_graphql_1.registerEnumType)(GenderEnum, {
    name: "GenderEnum",
    description: "Gender ENUM",
});
(0, type_graphql_1.registerEnumType)(KindOfPersonEnum, {
    name: "KindOfPersonEnum",
    description: "KindOfPersons ENUM",
});
(0, type_graphql_1.registerEnumType)(PlanEnum, {
    name: "PlanEnum",
    description: "Plans ENUM",
});
(0, type_graphql_1.registerEnumType)(ModalityEnum, {
    name: "ModalityEnum",
    description: "Modality ENUM",
});
(0, type_graphql_1.registerEnumType)(ProviderEnum, {
    name: "ProviderEnum",
    description: "Providers ENUM",
});
(0, type_graphql_1.registerEnumType)(QuoteEnum, {
    name: "QuoteEnum",
    description: "Quotes ENUM",
});
(0, type_graphql_1.registerEnumType)(RoleEnum, {
    name: "RoleEnum",
    description: "Roles ENUM",
});
(0, type_graphql_1.registerEnumType)(SectorEnum, {
    name: "SectorEnum",
    description: "Sectors ENUM",
});
(0, type_graphql_1.registerEnumType)(TimeLapseTypeEnum, {
    name: "TimeLapseTypeEnum",
    description: "TimeLapseTypeEnum ENUM",
});
(0, type_graphql_1.registerEnumType)(TopicEnum, {
    name: "TopicEnum",
    description: "Topics ENUM",
});
