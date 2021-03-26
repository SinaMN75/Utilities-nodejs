"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcryptjs_1 = require("bcryptjs");
var Encrypt = (function () {
    function Encrypt() {
    }
    Encrypt.prototype.encrypt = function (value, action, error) {
        bcryptjs_1.genSalt(10, function (err, salt) {
            bcryptjs_1.hash(value, salt, function (e, hash) {
                if (e)
                    error(e);
                else
                    action(hash);
            });
        });
    };
    Encrypt.prototype.compareValues = function (password, hash, action) {
        bcryptjs_1.compare(password, hash, function (err, success) {
            if (err)
                throw err;
            action(success);
        });
    };
    return Encrypt;
}());
exports.default = Encrypt;
