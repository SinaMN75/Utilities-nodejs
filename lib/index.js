"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.price = exports.notFound = exports.compareValues = exports.encrypt = exports.connectMongoDB = void 0;
var nosql_1 = require("./database/nosql");
var encrypt_1 = require("./general/encrypt");
var express_1 = require("./general/express");
var price_1 = require("./models/price");
function connectMongoDB(uri) { nosql_1.connectMongoDB(uri); }
exports.connectMongoDB = connectMongoDB;
function encrypt(value, action, error) { encrypt_1.encrypt(value, action, error); }
exports.encrypt = encrypt;
function compareValues(password, hash, action) { encrypt_1.compareValues(password, hash, action); }
exports.compareValues = compareValues;
function notFound(response) { express_1.notFound(response); }
exports.notFound = notFound;
exports.price = price_1.Price;
