"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenu = void 0;
const enums_1 = require("../enums");
const business = {
    icon: "store",
    text: "Negocio",
    url: "/dashboard/profesionista",
};
const contacts = {
    icon: "address-book",
    text: "Contactos",
    url: "/admin/contactos",
};
const home = {
    icon: "home",
    text: "Inicio",
    url: "/dashboard/perfil",
};
const offers = {
    icon: "donate",
    text: "Ofertas",
    url: "/dashboard/ofertas",
};
const products = {
    icon: "boxes",
    text: "Productos",
    url: "/dashboard/tienda/productos",
};
const projects = {
    icon: "project-diagram",
    text: "Trabajos",
    url: "/dashboard/trabajos",
};
const quotes = {
    icon: "money-check",
    text: "Cotizaciones",
    url: "/admin/cotizaciones",
};
const security = {
    icon: "user-shield",
    text: "Seguridad",
    url: "/dashboard/seguridad",
};
const service = {
    icon: "briefcase",
    text: "Servicios",
    url: "/dashboard/servicios",
};
const subsidiary = {
    icon: "map-marked-alt",
    text: "Sucursales",
    url: "/dashboard/sucursales",
};
const store = {
    icon: "store",
    text: "Tienda",
    url: "/dashboard/tienda",
};
const getMenu = (role) => role === enums_1.RoleEnum.BUYER
    ? [home, security, offers]
    : role === enums_1.RoleEnum.PROFESSIONAL
        ? [home, security, business, offers, projects, service, subsidiary]
        : role === enums_1.RoleEnum.PROVIDER
            ? [home, security, products, subsidiary, store]
            : [home, security, contacts, quotes];
exports.getMenu = getMenu;
