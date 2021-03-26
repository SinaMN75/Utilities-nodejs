import mongoose from "mongoose";

export default class NoSqlDatabase {
	connectMongoDB(uri: string) {
		mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
		        .then(() => console.log(`connection to mongodb.`))
		        .catch((e) => console.log(`connection to mongodb failed ${e.message}`));
	}
}