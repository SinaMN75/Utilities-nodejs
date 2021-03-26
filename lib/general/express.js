"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
function notFound(response) {
    response.status(404).json({ message: "Not Found" });
}
exports.notFound = notFound;
