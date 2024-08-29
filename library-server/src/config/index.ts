import dotenv from "dotenv"

dotenv.config()

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || ""
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || ""

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@librarydb.tgrkj.mongodb.net/?retryWrites=true&w=majority&appName=librarydb`
const PORT: number = process.env.PORT ? Number(process.env.PORT) : 8000
const ROUNDS: number = process.env.ROUNDS ? Number(process.env.ROUNDS) : Math.floor(Math.random() * 11);

export const config = {
    mongo:{
        url: MONGO_URL
    },
    server:{
        port: PORT,
        rounds: ROUNDS
    }
}
