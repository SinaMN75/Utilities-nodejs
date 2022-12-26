"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupExpress = exports.response = exports.sendResponse = exports.notFound = void 0;
var express_1 = __importDefault(require("express"));
var index_1 = require("../index");
function notFound(response) {
    response.status(404).json({ message: "Not Found" });
}
exports.notFound = notFound;
function sendResponse(response) {
    response.status(404).json({ message: "Not Found" });
    var router = express_1.default.Router();
}
exports.sendResponse = sendResponse;
function response(result, options) {
    var _a, _b, _c;
    return {
        message: (_a = options === null || options === void 0 ? void 0 : options.message) !== null && _a !== void 0 ? _a : "",
        status: (_b = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _b !== void 0 ? _b : 200,
        count: (_c = options === null || options === void 0 ? void 0 : options.count) !== null && _c !== void 0 ? _c : -1,
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
    app.use((0, index_1.expressFileUpload)());
    index_1.dotEnv.config();
}
exports.setupExpress = setupExpress;
