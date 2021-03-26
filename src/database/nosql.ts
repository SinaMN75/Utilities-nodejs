import mongoose from "mongoose";
import {databaseConfig} from "./database_config";

export function connectMongoDB() {
	mongoose.connect(databaseConfig.mongoDBURI, {useUnifiedTopology: true, useNewUrlParser: true})
	        .then(() => console.log(`connection to mongodb.`))
	        .catch((e) => console.log(`connection to mongodb failed ${e.message}`));
}