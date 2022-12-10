"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupExpress = exports.response = exports.notFound = void 0;
var express_1 = __importDefault(require("express"));
var index_1 = require("../index");
function notFound(response) {
    response.status(404).json({ message: "Not Found" });
    var router = express_1.default.Router();
}
exports.notFound = notFound;
function response(result, statusCode, message) {
    if (statusCode === void 0) { statusCode = 200; }
    if (message === void 0) { message = ""; }
    return {
        message: message,
        status: statusCode,
        result: result
    };
}
exports.response = response;
function setupExpress(app) {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, index_1.cors)());
    app.use(express_1.default.static("public"));
    app.use((0, index_1.helmet)());
    app.use((0, index_1.morgan)("dev"));
}
exports.setupExpress = setupExpress;
