import * as mongoose from "mongoose";
import {Sequelize} from "sequelize";

export function hello() {
	console.log("helloooo");
}

// export function connectMongoose(mongodbURI: string) {
// 	mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true})
// 	        .then(() => console.log(`mongodb connected`))
// 	        .catch(() => console.log("error connecting to mongodb"));
// }

// export function sequelize(database: string,
//                           username: string,
//                           password: string,
//                           dialect: string,
//                           host: string): Sequelize {
// 	return new Sequelize("nodeSample", "root", "123456789", {
// 		dialect: "mysql", host: "localhost"
// 	});
// }

// export function connectSequelize() {
// 	new Sequelize("nodeSample", "root", "123456789", {
// 		dialect: "mysql", host: "localhost"
// 	}).sync()
// 	  .then(() => console.log("Sequelize connected"))
// 	  .catch(() => console.log("Sequelize not connected"));
//
// 	// sequelize("nodeSample", "root", "123456789", "mysql", "localhost")
// 	// 	.sync()
// 	// 	.then(() => console.log("Sequelize connected"))
// 	// 	.catch(() => console.log("Sequelize not connected"));
// }