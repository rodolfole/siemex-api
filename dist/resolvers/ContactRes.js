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
exports.ContactResolver = void 0;
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../entities");
const inputs_1 = require("../inputs");
const email_1 = require("../helpers/email");
let ContactResolver = class ContactResolver {
    getContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            return entities_1.ContactMdl.find();
        });
    }
    /*@Mutation( () => Boolean )
      async postEmail(
          @Arg("input") contactInput: ContactInput
      ) : Promise<Boolean> {
  
          try {
              const { emailFrom, emailTo, message, name } = contactInput;
      
              const contentHTML = `
                  <h1>User Information</h1>
                  <ul>
                      <li>Nombre: ${ name }</li>
                      <li>Email: ${ emailFrom }</li>
                  </ul>
                  <p>Mensaje: ${ message }</p>
              `;
      
              const transporter = createTransport({
                  host : 'mail.siemex.xyz',
                  port : 465,
                  secure : true,
                  auth : {
                      user : 'dev@siemex.xyz',
                      pass : 'Nt#flf9NI}pp5y*-yW'
                  }
              });
              
      
              await transporter.verify(() => {
                  console.log('ready')
              })
  
              const mail = await transporter.sendMail({
                  from : `Contact Email <${ emailFrom }>`,
                  to : 'rodspektre@gmail.com',
                  subject : message,
                  html : contentHTML
              });
  
              //(await ContactMdl.create(contactInput)).save();
  
              console.log(contentHTML)
              //const contact = (await ContactMdl.create(contactInput)).save();
              console.log('MIAL: ', mail)
              return true;
          } catch (err) {
              console.log(err);
              return false;
          }
      }*/
    postEmail(contactInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const { emailFrom, emailTo, message, name } = contactInput;
            const template = (0, email_1.getContactTemplate)(emailTo, emailFrom, name, message);
            yield (0, email_1.sendEmail)(emailFrom, emailTo, message, template);
            return true;
        });
    }
    createEmail(contactInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const { emailFrom, emailTo, message, name } = contactInput;
            const template = (0, email_1.getConfirmTemplate)(name, "UPDATE_PLAN");
            yield (0, email_1.sendEmail)(emailFrom, "dev@siemex.xyz", "SIEMEX Pro", template);
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [entities_1.Contacts])
    // @UseMiddleware( isAuth )
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "getContacts", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.ContactInput]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "postEmail", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.ContactInput]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "createEmail", null);
ContactResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => entities_1.Contacts)
], ContactResolver);
exports.ContactResolver = ContactResolver;
