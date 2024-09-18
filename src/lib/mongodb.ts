import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
    throw new Error("mongodb.ts: Please define the MONGODB_URI environment variable inside .env");
}

let cashedClient: mongoose.Mongoose | null = null;
let cashedDB: mongoose.Connection | null = null;

export const ConnectDatabase = async () => {
    if (cashedClient) {
        return { client: cashedClient, db: cashedDB };
    }

    const client = await mongoose.connect(MONGO_URI)

    cashedClient = client;
    cashedDB = client.connection;

    return { client: client, db: cashedDB }
}