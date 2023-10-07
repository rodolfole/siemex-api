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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const Db_1 = __importDefault(require("./classes/Db"));
const App_1 = __importDefault(require("./classes/App"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = App_1.default.instance;
    const db = Db_1.default.instance;
    yield db.start();
    yield app.start();
    /*const app = express();
    app.use(express.json());
    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true
        })
    );*/
    /*const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ ContactResolver, DirectoriResolver, ProductResolver, QuoteResolver, UserResolver ]
        }),
        context: ({ req, res }) => ({ req, res })
    });

    apolloServer.applyMiddleware({ app, cors: false, path: '/api' });

    app.listen( process.env.PORT, () => {
        console.log(`Server On Port: ${ process.env.PORT } in ${ process.env.NODE_ENV } mode`);
    });*/
}))();
