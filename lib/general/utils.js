"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderName = void 0;
function folderName() {
    return __dirname.split('/').pop();
}
exports.folderName = folderName;
