"use strict";
// Expresion regular
const regex = /([ATGC])\1{1,7}/;

function filterAdn(input) {
  var result = [];
  data = input.value.toUpperCase();
  for(var i = 0; i < data.length; i++) {
      switch(data[i]){
        case 'A': result.push('A');break;
        case 'T': result.push('T');break;
        case 'G': result.push('G');break;
        case 'C': result.push('C');break;
        default: break;
      }
  }
  data = result.splice('').join('');
  return input.value = data;
}
