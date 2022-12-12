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
function response(result, options) {
    return {
        message: options.message,
        status: options.statusCode,
        count: options.count,
        result: result,
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
    index_1.dotEnv.config();
}
exports.setupExpress = setupExpress;
