"use strict";
let fs = require("fs");
let mutantControllers = require("../tools/mutant");
class AppControllers {
  // Read All adn
  async getAllList() {
    let data = fs.readFileSync("./json/db.json");
    data = JSON.parse(data);
    return data;
  }
  // Create Adn
  async createAdn(data) {
    let readJson = fs.readFileSync("./json/db.json");
    readJson = JSON.parse(readJson);
    let i = readJson.length;
    readJson[i] = data;
    fs.writeFile("./json/db.json", JSON.stringify(readJson), err => {
      return err;
    });
    return readJson[i];
  }
  /** 
   * CheckMutant
   * Esta funcion llama a otro Controllador llamado Mutante que lo ubicamos en nuestra carpeta Tools
   * porque lo vamos a usar como una herramienta. 
   */ 
  async isMutant(adn) {
    return mutantControllers.getMutants(adn);
  }
}
module.exports = new AppControllers();
