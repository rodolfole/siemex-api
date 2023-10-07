"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importStar(require("express"));
const http_1 = require("http");
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("../resolvers");
const ChatResolver_1 = require("../resolvers/ChatResolver");
const RoomResolver_1 = require("../resolvers/RoomResolver");
const ScheduleResolver_1 = require("../resolvers/ScheduleResolver");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT) || 4000;
        this.httpServer = new http_1.Server(this.app);
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    apollo() {
        return __awaiter(this, void 0, void 0, function* () {
            // const options: RedisOptions = {
            //   host: process.env.REDIS_HOST,
            //   port: Number(process.env.REDIS_PORT),
            //   password: process.env.REDIS_PWD,
            //   retryStrategy: (times) => Math.max(times * 100, 3000),
            // };
            // const pubSub = new RedisPubSub({
            //   publisher: new Redis(options),
            //   subscriber: new Redis(options),
            // });
            const apolloServer = new apollo_server_express_1.ApolloServer({
                schema: yield (0, type_graphql_1.buildSchema)({
                    resolvers: [
                        resolvers_1.ContactResolver,
                        resolvers_1.DirectoriResolver,
                        resolvers_1.OfferResolver,
                        resolvers_1.ProductResolver,
                        resolvers_1.ProjectResolver,
                        resolvers_1.QuoteResolver,
                        ScheduleResolver_1.ScheduleResolver,
                        resolvers_1.ServiceResolver,
                        resolvers_1.SubsidiaryResolver,
                        resolvers_1.UserResolver,
                        ChatResolver_1.ChatResolver,
                        RoomResolver_1.RoomResolver,
                    ],
                    // pubSub,
                }),
                context: ({ req, res }) => ({ req, res }),
                // subscriptions: {
                //   path: "/subscriptions",
                //   onConnect: () => {
                //     console.log("Client connected for subscriptions");
                //   },
                //   onDisconnect: () => {
                //     console.log("Client disconnected from subscriptions");
                //   },
                // },
            });
            apolloServer.applyMiddleware({ app: this.app, cors: false, path: "/api" });
            // apolloServer.installSubscriptionHandlers(this.httpServer);
            return apolloServer;
        });
    }
    middlewares() {
        this.app.use((0, express_1.json)());
        this.app.use((0, cors_1.default)({
            // origin: "http://localhost:3000",
            origin: [
                "https://siemex.xyz",
                "https://www.siemex.xyz",
                "https://beta.siemex.xyz",
                "https://www.beta.siemex.xyz",
            ],
            credentials: true,
        }));
        /*this.app.post( '/refresh_token2', async (req, res) => {
                const token = req.cookies.jid;
                let payload: any = null;
    
                if ( !token ) {
                    return res.send({ ok: false, accessToken: "" });
                }
    
                try {
                    payload = verify( token, process.env.REFRESH_TOKEN_SECRET! );
                } catch (err) {
                    console.log(err);
                    return res.send({ ok: false, accessToken: '' });
                }
    
                // token is valid and
                // we can send back an access token
                const user = await UserMdl.findOne({ _id: payload.userId });
    
                if ( !user ) {
                    return res.send({ ok: false, accessToken: "" });
                }
    
                sendRefreshToken( res, createRefreshToken(user) );
    
                return res.send({ ok: true, accessToken: createAccessToken(user._id, '15m') });
            });*/
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.middlewares();
            yield this.apollo();
            this.httpServer.listen(this.port, () => {
                console.log(`Server On Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
            });
        });
    }
}
exports.default = App;
