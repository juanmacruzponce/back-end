import { MongoClient, Db } from "mongodb";

const connectionStr = process.env.MONGO_URI || ''