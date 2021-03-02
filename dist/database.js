"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectSequelize = exports.connectMongoose = void 0;
const mongoose = __importStar(require("mongoose"));
const sequelize_1 = require("sequelize");
function connectMongoose(mongodbURI) {
    mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
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