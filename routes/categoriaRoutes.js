const express = require("express");
const router = express.Router();

let ouvidoria = [
  {
    id: 1,
    nome: "Gabriel Mendes",
    motivo: "Reclamação"
  },
  {
    id: 2,
    nome: "Mariana Lima",
    motivo: "Melhoria"
  },
  {
    id: 3,
    nome: "Filipe Brandolt",
    motivo: "Denúncia"
  }
];


router.get("/", (req, res) => {
  res.render("ouvidoria/index", {
    ouvidoria: ouvidoria
  });
});

router.get("/cadastro", (req, res) => {
  res.render("ouvidoria/form-cadastro",)
});

//Salvar
router.post("/", (req, res) => {
  const { nome, motivo } = req.body;
  const novaCategoria = {
    id: ouvidoria.length + 1,
    nome: nome,
    motivo: motivo
  };
  ouvidoria.push(novaCategoria);
  res.redirect("/ouvidoria");
});

//Excluir
router.get("/excluir/:id", (req, res) =>{
  let id = parseInt(req.params.id);
  ouvidoria = ouvidoria.filter(c => c.id !== id);
  res.redirect("/ouvidoria");
});

//Editar - form - GET
router.get("/editar/:id", (req, res) =>{
  let id = parseInt(req.params.id);
  let categoria = ouvidoria.find(c => c.id === id)

  if(!categoria){
    return res.redirect("/ouvidoria");
  }

  res.render("ouvidoria/editar", {categoria});
});

//Editar - efetiva - POST
router.post("/", (req, res) =>{

});

module.exports = router;