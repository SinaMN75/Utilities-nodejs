import mongoose from "mongoose";
import {logOk} from "../general/utils";

export function connectMongoDB(uri: string) {
	mongoose.connect(uri, () => logOk(`${uri} is running`));
}