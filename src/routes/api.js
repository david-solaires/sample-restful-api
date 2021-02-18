"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var get = express_1.default.Router();
get.get('/currentTime', function (req, res) {
    res.send(Date.now());
});
var api = express_1.default.Router();
api.use('/get/', get);
exports.default = api;
//# sourceMappingURL=api.js.map