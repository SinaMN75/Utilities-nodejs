"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToSequelize = exports.sequelizeDatabase = exports.connectMongoDB = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var utils_1 = require("../general/utils");
var index_1 = require("../index");
var connectMongoDB = function (uri) {
    mongoose_1.default.connect(uri, function () { return (0, utils_1.logOk)("".concat(uri, " is running")); });
};
exports.connectMongoDB = connectMongoDB;
var sequelizeDatabase = function (database, username, password, dialect) {
    return new index_1.sequelize.Sequelize(database, username, password, {
        dialect: dialect,
    });
};
exports.sequelizeDatabase = sequelizeDatabase;
function connectToSequelize(database, username, password, dialect) {
    (0, exports.sequelizeDatabase)(database, username, password, dialect).authenticate()
        .then(function () { return console.log("connected to ".concat(database, " DB")); })
        .catch(function () { return console.log("connection to ".concat(database, " DB failed")); });
}
exports.connectToSequelize = connectToSequelize;
