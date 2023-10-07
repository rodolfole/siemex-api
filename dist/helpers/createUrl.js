"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUrl = exports.createConfirmUrl = void 0;
const enums_1 = require("../enums");
const createConfirmUrl = (path, token) => `${process.env.CLIENT_PROD_URL}/${path}/${token}`;
exports.createConfirmUrl = createConfirmUrl;
const createUrl = (role, sector, business_name) => `/${role === enums_1.RoleEnum.PROVIDER ? "tienda" : "profesionista"}/${sector.toLowerCase()}/${business_name
    .trim()
    .toLowerCase()
    .replace(" ", "-")}`;
exports.createUrl = createUrl;
