// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTotal = (base * height) / 2;
  return areaTotal;
}

// Desafio 3
function splitSentence(param) {
  let splitAux = param.split(' ');
  return splitAux;
}

// Desafio 4
function concatName(array) {
  let auxArray = [];
  let aux = array.reverse();
  auxArray.push(aux[0], aux[array.length - 1]);
  auxArray = auxArray.join(', ');
  return auxArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = wins * 3 + ties;
  return total;
}

// Desafio 6
function highestCount(arrayNum) {
  let maiorNumero = arrayNum[0];
  let contador = 0;

  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] > maiorNumero) {
      maiorNumero = arrayNum[i];
    }
  }
  for (let index in arrayNum) {
    if (arrayNum[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }

  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayFizz) {
  let aux = [];
  for (let i = 0; i < arrayFizz.length; i += 1) {
    if (arrayFizz[i] % 3 === 0 && arrayFizz[i] % 5 === 0) {
      aux.push('fizzBuzz');
    } else if (arrayFizz[i] % 3 === 0) {
      aux.push('fizz');
    } else if (arrayFizz[i] % 5 === 0) {
      aux.push('buzz');
    } else if (arrayFizz[i] % 5 !== 0 || arrayFizz[i] % 3 !== 0) {
      aux.push('bug!');
    }
  }
  return aux;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
