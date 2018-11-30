"use strict";
// Expresion regular
const regex = /([ATGC])\1{3,4}/;

function getStringH(data) {
  return data.filter(data => regex.test(data));
}

function getStringV(data) {
  var dataV = [];
  var add = [];
  for (var i = 0; i < data.length; i++) {
    add = [];
    for (var j = 0; j < data[i].length; j++) {
      add.push(data[j][i]);
    }
    dataV.push(add);
  }
  dataV = dataV.map(array => {
    return array.join("");
  });
  return dataV.filter(data => regex.test(data));
}
function revertString(data){
    return data.split("").reverse().join("");
}

function getRevertDiagonal(data){
    data = data.map(x => { return revertString(x)});
    return getDiagonal(data);
}

function getDiagonal(data) {
  var add = [];
  var dataD = [];
  for (let i = 0; i < data.length; i++) {
    add = [];
    for (let y = i, x = 0; y >= 0; y--, x++) {
      add.push(data[y][x]);
    }
    dataD.push(add);
  }
  for (let i = 1; i < data[0].length; i++) {
    add = [];
    for (let y = data.length - 1, x = i; x < data[0].length; y--, x++) {
      add.push(data[y][x]);
    }
    dataD.push(add);
  }
  dataD = dataD.map((array) => {
    return array.join('');
  });
  return dataD.filter(data => regex.test(data));
}

function getMutants(data){
    let dataV = getStringV(data);
    let dataH = getStringH(data);
    let dataD = getDiagonal(data);
    let dataRevertD = getRevertDiagonal(data);
    dataV = dataV.concat(dataH).concat(dataD).concat(dataRevertD);
    console.log(dataV);
    return dataV;
}
module.exports = {
    getMutants
};
