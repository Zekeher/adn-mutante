"use strict";
var express = require("express");
var appController = require("../controllers/appControllers");
var api = express.Router();

api.get("/mutant", async (req, res) => {
  try {
    const result = await appController.getAllList();
    res.status(200).send({ dna: result });
  } catch (error) {
    res.status(500).send({ err: "Problemas con el servidor" });
  }
});

api.post("/add", async (req, res) => {
  try {
    const result = await appController.createAdn(req.body);
    res.status(200).send({ dna: result });
  } catch (error) {
    res.status(500).send({ err: "Problemas con el servidor" });
  }
});

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
