const express = require("express");
const { getEndereco } = require("./controladores/enderecos");
const rotas = express();

rotas.get("/enderecos/:cep", getEndereco);

module.exports = rotas;