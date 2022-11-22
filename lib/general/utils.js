"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.logOk = exports.logError = exports.folderName = void 0;
var chalk_1 = __importDefault(require("chalk"));
function folderName(dirName) {
    return dirName.split('/').pop();
}
exports.folderName = folderName;
function logError(message) {
    console.log(chalk_1.default.red.bold(message));
}
exports.logError = logError;
function logOk(message) {
    console.log(chalk_1.default.green.bold(message));
}
exports.logOk = logOk;
function log(message) {
    console.log(message);
}
exports.log = log;
