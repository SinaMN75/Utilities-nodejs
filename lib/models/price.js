"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.Price = mongoose_1.default.model("Price", new mongoose_1.default.Schema({
    buyPrice: {
        type: String,
        required: false,
    },
    sellPrice: {
        type: String,
        required: false,
    },
}));
