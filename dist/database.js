"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectSequelize = exports.sequelize = exports.connectMongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const sequelize_1 = require("sequelize");
function connectMongoose(mongodbURI) {
    mongoose_1.default.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`mongodb connected`))
        .catch(() => console.log("error connecting to mongodb"));
}
exports.connectMongoose = connectMongoose;
function sequelize(database, username, password, dialect, host) {
    return new sequelize_1.Sequelize(database, username, password, { dialect: dialect, host: host });
}
exports.sequelize = sequelize;
function connectSequelize(database, username, password, dialect, host) {
    sequelize(database, username, password, dialect, host)
        .sync()
        .then(() => console.log("Sequelize connected"))
        .catch(() => console.log("Sequelize not connected"));
}
exports.connectSequelize = connectSequelize;
//# sourceMappingURL=database.js.map