"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const hbs_1 = __importDefault(require("hbs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express_1.default();
const puerto = process.env.PORT;
app.set("view engine", "hbs");
hbs_1.default.registerPartials("./views/partials");
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.render("home", {
        nombre: "Gustavo Herrera",
        titulo: "Tu vieja en cuatro!",
    });
});
app.get("/generic", (req, res) => {
    res.render("generic", {
        nombre: "Gustavo",
        titulo: "Tu vieja en cuatro!",
    });
});
app.get("/elements", (req, res) => {
    res.render("elements", {
        nombre: "Gustavo",
        titulo: "Tu vieja en cuatro!",
    });
});
app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
});
console.log(__dirname);
//# sourceMappingURL=app.js.map