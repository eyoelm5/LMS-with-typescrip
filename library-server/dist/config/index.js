"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@librarydb.tgrkj.mongodb.net/?retryWrites=true&w=majority&appName=librarydb`;
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const ROUNDS = process.env.ROUNDS ? Number(process.env.ROUNDS) : Math.floor(Math.random() * 11);
exports.config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: PORT,
        rounds: ROUNDS
    }
};
