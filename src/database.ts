import mongoose from "mongoose";
import {Dialect, Sequelize} from "sequelize";

export function connectMongoose(mongodbURI: string) {
	mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true})
	        .then(() => console.log(`mongodb connected`))
	        .catch(() => console.log("error connecting to mongodb"));
}

export function sequelize(database: string,
                          username: string,
                          password: string,
                          dialect: Dialect,
                          host: string): Sequelize {
	return new Sequelize(database, username, password, {dialect: dialect, host: host});
}

export function connectSequelize(database: string,
                                 username: string,
                                 password: string,
                                 dialect: Dialect,
                                 host: string) {
	sequelize(database, username, password, dialect, host)
		.sync()
		.then(() => console.log("Sequelize connected"))
		.catch(() => console.log("Sequelize not connected"));
}