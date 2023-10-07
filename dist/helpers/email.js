"use strict";
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
exports.getContactTemplate = exports.getConfirmTemplate = exports.getTemplate = exports.sendEmail = void 0;
const nodemailer_1 = require("nodemailer");
let transporter = (0, nodemailer_1.createTransport)({
    name: "mail.siemex.xyz",
    host: "mail.siemex.xyz",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PWD,
    },
});
const sendEmail = (emailFrom, emailTo, subject, html) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(emailFrom, emailTo, subject, html);
        //return true;
        let info = yield transporter.sendMail({
            from: emailFrom === "" ? process.env.EMAIL_USER : emailFrom,
            to: emailTo,
            subject,
            html,
        });
        console.log("Message sent: %s", info);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        console.log("Preview URL: %s", (0, nodemailer_1.getTestMessageUrl)(info));
    }
    catch (error) {
        console.log("Algo no va bien con el email", error);
    }
});
exports.sendEmail = sendEmail;
const getTemplate = (name, url) => {
    return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="https://i.imgur.com/eboNR82.png" alt="">
            <h2>Hola ${name}</h2>
            <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
            <a
                href="${url}"
                target="_blank"
            >Confirmar Cuenta</a>
        </div>
    `;
};
exports.getTemplate = getTemplate;
const getConfirmTemplate = (name, type, url) => {
    return `
        <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            bgcolor="#e5e5e5"
            style="
            text-align: center;
            min-width: 640px;
            width: 100%;
            margin: 0px;
            padding: 0px;
            transform: scale(0.929688, 0.929688);
            transform-origin: left top;
            "
            min-scale="0.9296875"
        >
            <tbody>
            <tr>
                <td
                bgcolor="#ffa500"
                style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    height: 4px;
                    font-size: 4px;
                    line-height: 4px;
                "
                ></td>
            </tr>
            <tr>
                <td
                style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    border-radius: 3px;
                    overflow: hidden;
                    padding: 20px;
                "
                >
                <table
                    style="
                    width: 100%;
                    max-width: 600px;
                    padding: 20px 0;
                    margin: 0 auto;
                    background: white;
                    border: 1px solid #ededed;
                    "
                >
                    <tbody>
                    <tr>
                        <td
                        style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                            font-size: 13px;
                            line-height: 1.6;
                            color: #5c5c5c;
                            padding: 0 20px;
                            margin: 10px 0 15px 0;
                            border-bottom: 1px solid #efeef1;
                        "
                        >
                        <a
                            href="https://siemex.xyz"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-auth="NotApplicable"
                            data-linkindex="0"
                            >
                            <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                                <img
                                    data-imagetype="External"
                                    src="https://www.siemex.xyz/assets/img/logo_thunder.png"
                                    alt="SIEMEX"
                                    width="80"
                                    height="66"
                                    style="
                                        border-bottom: 1px solid #ffa500;
                                        margin: 0 auto;
                                        padding-bottom: 20px;
                                    "
                                />
                            </div>
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top: 30px">
                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            style="
                            width: 100%;
                            border-collapse: separate;
                            border-spacing: 0;
                            margin: 0 auto;
                            "
                        >
                            <tbody>
                            <tr>
                                <td
                                align="left"
                                style="
                                    font-family: 'Helvetica Neue', Helvetica, Arial,
                                    sans-serif;
                                    overflow: hidden;
                                "
                                >
                                <table
                                    border="0"
                                    style="
                                    width: 100%;
                                    border-collapse: separate;
                                    border-spacing: 0;
                                    "
                                >
                                    <tbody>
                                    <tr>
                                        <td
                                        align="center"
                                        style="
                                            font-family: 'Helvetica Neue', Helvetica,
                                            Arial, sans-serif;
                                            color: #333333;
                                            font-size: 15px;
                                            font-weight: 400;
                                            line-height: 1.4;
                                            padding: 0 30px;
                                        "
                                        >
                                        <h1
                                            align="center"
                                            style="
                                            font-family: 'Helvetica Neue', Helvetica,
                                                Arial, sans-serif;
                                            color: #ffa500;
                                            font-size: 18px;
                                            font-weight: 400;
                                            line-height: 1.4;
                                            margin: 0;
                                            padding: 0;
                                            "
                                        >
                                            ${type === "CONFIRM_EMAIL"
        ? `Hola ${name} <br/>¡Gracias por registrarte en SIEMEX!`
        : type === "FORGET_PASSWORD"
            ? `	
                                            ¡Recibimos la solicitud para cambiar la contraseña de tu cuenta SIEMEX!`
            : type === "UPDATE_PLAN"
                ? `${name} ha solicitado actualizar su plan FREE a PRO`
                : type === "UPDATED_PASSWORD"
                    ? "Se realizo con exito el cambio de tu contraseña"
                    : ""}
                                            
                                        </h1>
                                        <p>
                                        ${type === "CONFIRM_EMAIL"
        ? `¡Gracias por crear una cuenta en SIEMEX! Por favor, es necesario hacer clic en el siguiente botón para verificar la dirección de correo.`
        : type === "FORGET_PASSWORD"
            ? `Haz clic en el siguiente botón para cambiar tu contraseña.`
            : ""}
                                            
                                        </p>
                                        
                                        <p style="margin-top: 30px; display: ${type !== "UPDATE_PLAN"
        ? "block"
        : "none"}">
                                            <a
                                            href="${type === "UPDATED_PASSWORD"
        ? ""
        : url}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-auth="NotApplicable"
                                            style="
                                                color: white;
                                                background-color: #ffa500;
                                                text-decoration: none;
                                                padding: 13px 55px;
                                                border-radius: 3px;
                                                font-weight: 600;
                                                font-size: 14px;
                                                line-height: 1.3;
                                                display: ${type === "UPDATED_PASSWORD"
        ? "none"
        : "block"};
                                            "
                                            data-linkindex="1"
                                            >${type === "CONFIRM_EMAIL"
        ? "Verificar cuenta"
        : type === "FORGET_PASSWORD"
            ? "Cambiar contraseña"
            : ""}</a
                                            >
                                        </p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td
                style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-size: 13px;
                    line-height: 1.6;
                    color: #5c5c5c;
                    padding: 25px 20px;
                "
                >
                <div style="max-width: 600px; margin: 0 auto">
                    <img
                    data-imagetype="External"
                    src="https://www.siemex.xyz/assets/img/SIEMEX_2926x479.png"
                    alt="SIEMEX"
                    height="33"
                    width="150"
                    style="display: block; margin: 0 auto 1em"
                    />
                    <div style="color: #706a7c; font-size: 14px">
                    <span
                        >Estás recibiendo este correo electrónico debido a tu cuenta
                        de SIEMEX . </span
                    ><br />
                    </div>
                </div>
                </td>
            </tr>
            <tr>
                <td
                style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-size: 13px;
                    line-height: 1.6;
                    color: #5c5c5c;
                    padding: 25px 0;
                "
                ></td>
            </tr>
            </tbody>
        </table>
    `;
};
exports.getConfirmTemplate = getConfirmTemplate;
const getContactTemplate = (contactUser, email, name, message) => {
    return `
        <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            bgcolor="#e5e5e5"
            style="
            text-align: center;
            min-width: 640px;
            width: 100%;
            margin: 0px;
            padding: 0px;
            transform: scale(0.929688, 0.929688);
            transform-origin: left top;
            "
            min-scale="0.9296875"
        >
            <tbody>
            <tr>
                <td
                bgcolor="#ffa500"
                style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    height: 4px;
                    font-size: 4px;
                    line-height: 4px;
                "
                ></td>
            </tr>
            <tr>
                <td
                style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    border-radius: 3px;
                    overflow: hidden;
                    padding: 20px;
                "
                >
                <table
                    style="
                    width: 100%;
                    max-width: 600px;
                    padding: 20px 0;
                    margin: 0 auto;
                    background: white;
                    border: 1px solid #ededed;
                    "
                >
                    <tbody>
                    <tr>
                        <td
                        style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                            font-size: 13px;
                            line-height: 1.6;
                            color: #5c5c5c;
                            padding: 0 20px;
                            margin: 10px 0 15px 0;
                            border-bottom: 1px solid #efeef1;
                        "
                        >
                        <a
                            href="https://siemex.xyz"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-auth="NotApplicable"
                            data-linkindex="0"
                            >
                            <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                                <img
                                    data-imagetype="External"
                                    src="https://www.siemex.xyz/assets/img/logo_thunder.png"
                                    alt="SIEMEX"
                                    width="80"
                                    height="66"
                                    style="
                                        border-bottom: 1px solid #ffa500;
                                        margin: 0 auto;
                                        padding-bottom: 20px;
                                    "
                                />
                            </div>
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td
                        align="left"
                        bgcolor="#fff"
                        style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                            border-radius: 3px;
                            overflow: hidden;
                            padding: 18px 25px;
                            border: 1px solid #ededed;
                        "
                        >
                        <table
                            border="0"
                            style="
                            width: 100%;
                            border-collapse: separate;
                            border-spacing: 0;
                            "
                        >
                            <tbody>
                            <tr>
                                <td
                                align="center"
                                bgcolor="#ffa500"
                                style="
                                    font-family: 'Helvetica Neue', Helvetica, Arial,
                                    sans-serif;
                                    border-radius: 3px;
                                    font-size: 14px;
                                    line-height: 1.3;
                                    overflow: hidden;
                                    color: #ffffff;
                                    padding: 10px;
                                "
                                >
                                <table
                                    border="0"
                                    style="border-collapse: collapse; margin: 0 auto"
                                >
                                    <tbody>
                                    <tr>
                                        <td
                                        align="center"
                                        valign="middle"
                                        style="
                                            font-family: 'Helvetica Neue', Helvetica,
                                            Arial, sans-serif;
                                            color: #ffffff;
                                        "
                                        >
                                        <span>
                                            Formulario de contacto de
                                            SIEMEX</span
                                        >
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </td>
                            </tr>

                            <tr>
                                <td
                                style="
                                    font-family: 'Helvetica Neue', Helvetica, Arial,
                                    sans-serif;
                                    height: 18px;
                                    font-size: 18px;
                                    line-height: 18px;
                                "
                                >
                                &nbsp;
                                </td>
                            </tr>

                            <tr>
                                <td
                                align="center"
                                style="
                                    font-family: 'Helvetica Neue', Helvetica, Arial,
                                    sans-serif;
                                    line-height: 1.4;
                                    overflow: hidden;
                                    padding: 0 15px;
                                "
                                >
                                <table
                                    border="0"
                                    style="border-collapse: collapse; width: 100%"
                                >
                                    <tbody>
                                    <tr style="width: 100%">
                                        <td
                                        align="center"
                                        style="
                                            font-family: 'Helvetica Neue', Helvetica,
                                            Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            color: #5a5a5a;
                                            font-weight: 300;
                                            margin: 0;
                                            padding: 14px 0;
                                            text-align: left;
                                        "
                                        >
                                        <p>
                                            Estimado(a):
                                            <strong>${contactUser}</strong>
                                        </p>
                                        <p>
                                            Un nuevo usuario ha solicitado ponerse en
                                            contacto contigo. Los datos del
                                            solicitante son:
                                        </p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </td>
                            </tr>

                            <tr>
                                <td
                                style="
                                    font-family: 'Helvetica Neue', Helvetica, Arial,
                                    sans-serif;
                                    border-radius: 3px;
                                    overflow: hidden;
                                    padding: 0 15px;
                                    border: 1px solid #ededed;
                                "
                                >
                                <table border="0" style="width: 100%">
                                    <tbody>
                                    <tr>
                                        <td
                                        style="
                                            font-family: 'Helvetica Neue', Helvetica,
                                            Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            color: #8c8c8c;
                                            font-weight: 300;
                                            margin: 0;
                                            padding: 14px 0;
                                        "
                                        >
                                        Nombre
                                        </td>
                                        <td
                                        style="
                                            font-family: 'Helvetica Neue', Helvetica,
                                            Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            color: #333333;
                                            font-weight: 400;
                                            width: 75%;
                                            margin: 0;
                                            padding: 14px 0 14px 5px;
                                        "
                                        >
                                        ${name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                        style="
                                            font-family: 'Helvetica Neue', Helvetica,
                                            Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            color: #8c8c8c;
                                            font-weight: 300;
                                            margin: 0;
                                            padding: 14px 0;
                                        "
                                        >
                                        Email
                                        </td>
                                        <td
                                        style="
                                            font-family: 'Helvetica Neue', Helvetica,
                                            Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            color: #333333;
                                            font-weight: 400;
                                            width: 75%;
                                            margin: 0;
                                            padding: 14px 0 14px 5px;
                                        "
                                        >
                                        <a
                                            href="mailto:${email}"
                                            target="_blank"
                                            >${email}</a
                                        >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                        style="
                                            font-family: 'Helvetica Neue', Helvetica,
                                            Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            color: #8c8c8c;
                                            font-weight: 300;
                                            border-top-width: 1px;
                                            border-top-color: #ededed;
                                            border-top-style: solid;
                                            margin: 0;
                                            padding: 14px 0;
                                        "
                                        >
                                        Mensaje
                                        </td>
                                        <td
                                        style="
                                            font-family: 'Helvetica Neue', Helvetica,
                                            Arial, sans-serif;
                                            font-size: 15px;
                                            line-height: 1.4;
                                            color: #333333;
                                            font-weight: 400;
                                            width: 75%;
                                            border-top-width: 1px;
                                            border-top-color: #ededed;
                                            border-top-style: solid;
                                            margin: 0;
                                            padding: 14px 0 14px 5px;
                                        "
                                        >
                                        ${message}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td
                style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-size: 13px;
                    line-height: 1.6;
                    color: #5c5c5c;
                    padding: 25px 20px;
                "
                >
                <div style="max-width: 600px; margin: 0 auto">
                    <img
                    data-imagetype="External"
                    src="https://www.siemex.xyz/assets/img/SIEMEX_2926x479.png"
                    alt="SIEMEX"
                    height="33"
                    width="150"
                    style="display: block; margin: 0 auto 1em"
                    />
                    <div style="color: #706a7c; font-size: 14px">
                    <span
                        >Estás recibiendo este correo electrónico debido a tu cuenta
                        de SIEMEX . </span
                    ><br />
                    </div>
                </div>
                </td>
            </tr>
            <tr>
                <td
                style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-size: 13px;
                    line-height: 1.6;
                    color: #5c5c5c;
                    padding: 25px 0;
                "
                ></td>
            </tr>
            </tbody>
        </table>
    `;
};
exports.getContactTemplate = getContactTemplate;
