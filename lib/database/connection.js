"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToSequelize = exports.sequelizeDatabase = exports.connectMongoDB = void 0;
var index_1 = require("../index");
var sequelize_1 = require("sequelize");
var connectMongoDB = function (uri) {
    index_1.mongoose.connect(uri, function () { return (0, index_1.logOk)("".concat(uri, " is running")); });
};
exports.connectMongoDB = connectMongoDB;
var sequelizeDatabase = function (database, username, password, dialect) {
    require('sequelize-hierarchy-fork')(sequelize_1.Sequelize);
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
