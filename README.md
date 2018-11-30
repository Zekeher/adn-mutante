# Challenger ADN
/////////
Author: Hermoso 'Zekeher' Ezequiel
///////////////////////////////////
# Start Api
Para los siguientes pasos es necesario tener instalado:
- NodeJS [https://nodejs.org/es/].
- GIT [https://git-scm.com/downloads].

# Pasos:
Ahora el siguiente paso es clonar nuestro repositorio de adn-mutante
- Vamos a crear una carpeta para que sea nuestro workspace de trabajo (podes ingresar el nombre que deseas).
- Abrir consola y ingresamos lo siguiente comando: "git clone https://github.com/Zekeher/adn-mutante.git" (tenes que estar ubicado en la nueva carpeta que nombramos en el paso anterior).
- Ubicarse en la carpeta client ( cd client ) y ingresar el siguiente comando "npm i o npm install".
- Ubicarse en la carpeta server ( cd server ) y ingresar el siguiente comando "npm i o npm install".
#
**En caso de estar ubicado en la carpeta client y queres ubicarte a la carpeta server tendras que ingresar el siguiente comando -> cd .. -> cd server**

- Dentro de la carpeta server luego de realizar el "npm install" vamos a ingresar el siguiente comando -> npm start.
#
**Actualmente esta configurado este comando para que nos levante el ambiente del Server + Cliente**

////// LISTO YA PODES DISFRUTAR DE LA APP
# URL Backend: 
- METHOD: GET [http://localhost:3977/api/mutant] // Trae toda la lista de ADN
- METHOD: POST [http://localhost:3977/api/mutant] // Verficica si es mutante o no
** Para esta caso necesitas un json con el siguiente formato
{
“dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}
**
- METHOD: POST [http://localhost:3977/api/add] // Para Agregar un nuevo ADN

#URL Front-end:
- Home Page: [http://localhost:4200/]
- Crear ADN Page: [http://localhost:4200/create]

//////////////////////////////////////////////
