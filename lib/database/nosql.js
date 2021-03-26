"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
function connectMongoDB(uri) {
    mongoose_1.default.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(function () { return console.log("connection to mongodb."); })
        .catch(function (e) { return console.log("connection to mongodb failed " + e.message); });
}
exports.connectMongoDB = connectMongoDB;
