"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExpressExtension = (function () {
    function ExpressExtension() {
    }
    ExpressExtension.prototype.notFound = function (response) {
        response.status(404).json({ message: "Not Found" });
    };
    return ExpressExtension;
}());
exports.default = ExpressExtension;
