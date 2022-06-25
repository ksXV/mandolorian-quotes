"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendQuote = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const sendQuote = (_req, res) => {
    try {
        const rawData = fs_1.default.readFileSync((0, path_1.resolve)(__dirname, "../../quotes.json"), "utf8");
        const data = JSON.parse(rawData);
        const randNumb = Math.floor(Math.random() * (data.length - 1));
        return res.status(200).json(data[randNumb]);
    }
    catch (err) {
        return res.status(404).json("Something went wrong :(");
    }
};
exports.sendQuote = sendQuote;
