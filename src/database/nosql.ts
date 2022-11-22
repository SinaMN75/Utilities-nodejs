import mongoose from "mongoose";
import {logError, logOk} from "../general/utils";

export function connectMongoDB(uri: string) {
	mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
	        .then(() => logOk(`${uri} is running`))
	        .catch((e) => logError(`connection to mongodb failed ${e.message}`));
}