"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareValues = exports.encrypt = void 0;
var bcryptjs_1 = require("bcryptjs");
function encrypt(value, action, error) {
    bcryptjs_1.genSalt(10, function (err, salt) {
        bcryptjs_1.hash(value, salt, function (e, hash) {
            if (e)
                error(e);
            else
                action(hash);
        });
    });
}
exports.encrypt = encrypt;
function compareValues(password, hash, action) {
    bcryptjs_1.compare(password, hash, function (err, success) {
        if (err)
            throw err;
        action(success);
    });
}
exports.compareValues = compareValues;
