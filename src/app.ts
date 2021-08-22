import express from "express";
import path from "path";
import hbs from "hbs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const puerto = process.env.PORT;


//definir el view engine (handle bars)
app.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

//servir contenido estático:
app.use(express.static(path.join(__dirname, "public")));

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
