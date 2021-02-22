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
app.use("/api/", api_1.default);
function listRoutes(layer) {
    var _a;
    var isRoute = (function (element) {
        return (element === null || element === void 0 ? void 0 : element.route) || ((element === null || element === void 0 ? void 0 : element.name) === 'router');
    });
    var getStacks = (function (element) {
        var _a, _b, _c, _d;
        var stack = (_c = (((_a = element === null || element === void 0 ? void 0 : element.route) === null || _a === void 0 ? void 0 : _a.stack) || ((_b = element === null || element === void 0 ? void 0 : element.handle) === null || _b === void 0 ? void 0 : _b.stack))) === null || _c === void 0 ? void 0 : _c.flat(Infinity);
        console.log(element);
        if (stack === undefined) {
            return (_d = element === null || element === void 0 ? void 0 : element.regexp) === null || _d === void 0 ? void 0 : _d.source;
        }
        else {
            return getStacks(stack);
        }
    });
    var routes = (_a = layer === null || layer === void 0 ? void 0 : layer.filter(isRoute)) === null || _a === void 0 ? void 0 : _a.map(getStacks);
    console.log(routes);
    return routes;
}
app.get("/", function (req, res) {
    res.send(listRoutes(app._router.stack));
});
app.listen(port, function () {
    console.log("Listening on port " + port + " at http://localhost:8080");
});
//# sourceMappingURL=app.js.map