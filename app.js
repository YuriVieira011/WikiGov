const express = require("express");
const path = require("path");
const app = express();

// CONFIGURAÇÃO DO EJS
app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// MIDDLEWARES
// Permite receber dados enviados por formulário
app.use(express.urlencoded({ extended: true }));
// Permite receber requisições com JSON
app.use(express.json());

// ROTA PARA A PÁGINA DE HISTÓRIA
app.get("/historia", (req, res) => {
    res.render("historia");
});

// ROTA PARA A PÁGINA DE ARTIGOS
app.get("/artigos", (req, res) => {
    res.render("artigos");
});

// ROTA PARA A PÁGINA DE GRÁFICOS
app.get("/graficos", (req, res) => {
    res.render("graficos");
});


// ROTA PRINCIPAL - index.ejs de views
app.get("/", (req, res) => {
    res.render("index");
});


// SERVIDOR
app.listen(3000, () => {
    console.log(
        "Servidor rodando em http://localhost:3000"
    );
});
