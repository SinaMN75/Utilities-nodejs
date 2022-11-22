"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var utils_1 = require("../general/utils");
function connectMongoDB(uri) {
    mongoose_1.default.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(function () { return (0, utils_1.logOk)("".concat(uri, " is running")); })
        .catch(function (e) { return (0, utils_1.logError)("connection to mongodb failed ".concat(e.message)); });
}
exports.connectMongoDB = connectMongoDB;
