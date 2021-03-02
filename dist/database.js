"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectSequelize = exports.connectMongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const sequelize_1 = require("sequelize");
function connectMongoose(mongodbURI) {
    mongoose_1.default.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`mongodb connected`))
        .catch(() => console.log("error connecting to mongodb"));
}
exports.connectMongoose = connectMongoose;
// export function sequelize(database: string,
//                           username: string,
//                           password: string,
//                           dialect: string,
//                           host: string): Sequelize {
// 	return new Sequelize("nodeSample", "root", "123456789", {
// 		dialect: "mysql", host: "localhost"
// 	});
// }
function connectSequelize() {
    new sequelize_1.Sequelize("nodeSample", "root", "123456789", {
        dialect: "mysql", host: "localhost"
    }).sync()
        .then(() => console.log("Sequelize connected"))
        .catch(() => console.log("Sequelize not connected"));
    // sequelize("nodeSample", "root", "123456789", "mysql", "localhost")
    // 	.sync()
    // 	.then(() => console.log("Sequelize connected"))
    // 	.catch(() => console.log("Sequelize not connected"));
}
exports.connectSequelize = connectSequelize;
//# sourceMappingURL=database.js.map