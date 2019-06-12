"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.json({ hello: 'world' });
});
exports.server = async () => {
    app.listen(8080);
    console.log(`Server started at http://localhost:${8000}`);
    console.log('Press Ctrl+c to quit');
};
