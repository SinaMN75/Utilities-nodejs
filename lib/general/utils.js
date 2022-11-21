"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderName = void 0;
function folderName(dirName) {
    return dirName.split('/').pop();
}
exports.folderName = folderName;
