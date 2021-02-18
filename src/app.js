"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express
var express_1 = __importDefault(require("express"));
var api_1 = __importDefault(require("./routes/api"));
var app = express_1.default();
var port = 8080;
app.get("/", function (req, res) {
    var listRoutes = app._router.stack;
    console.log(listRoutes);
    res.send(listRoutes);
});
app.use("/api/", api_1.default);
app.listen(port, function () {
    console.log("Listening on port " + port + " at http://localhost:8080");
});
//# sourceMappingURL=app.js.map