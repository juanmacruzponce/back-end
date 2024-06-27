import { MongoClient } from "mongodb";
const connectionStr = process.env.MONGO_URI || 'mongodb+srv://tpsanatorio0:Bepu9W5lJOqpeL8G@cluster0.b0jwejj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const cli = new MongoClient(connectionStr);
await cli.connect();
export let db = cli.db('heroclash4geeks');
//# sourceMappingURL=connect.js.map