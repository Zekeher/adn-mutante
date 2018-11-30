"use strict";
var express = require("express");
var appController = require("../controllers/appControllers");
var api = express.Router();
/**
 * Funcion para obtener toda las lista de los ADN que estan registrados en nuesto JSON
 */
api.get("/mutant", async (req, res) => {
  try {
    const result = await appController.getAllList();
    res.status(200).send({ dna: result });
  } catch (error) {
    res.status(500).send({ err: "Problemas con el servidor" });
  }
});
/**
 * Funcion para agregar un nuevo ADN en nuestro registro que se encuentra en el JSON
 */
api.post("/add", async (req, res) => {
  try {
    const result = await appController.createAdn(req.body);
    res.status(200).send({ dna: result });
  } catch (error) {
    res.status(500).send({ err: "Problemas con el servidor" });
  }
});
/**
 * Funcion para verificar que el ADN que enviamos es Mutante o NO
 * Casos de Resultado:
 * [Status:200] - Es Mutante
 * [Status:403] - No es Mutante
 */
api.post("/mutant", async (req, res) => {
  try {
    let adn = req.body.dna;
    const result = await appController.isMutant(adn);
    if (result.length > 2) {
      res.status(200).send(true);
    } else {
      res.status(403).send(false);
    }
  } catch (error) {
    res.status(500).send({ err: "Problemas con el servidor" });
  }
});

module.exports = api;
