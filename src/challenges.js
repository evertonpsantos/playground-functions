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

// Desafio 9
function encode(stringParam) {
  let splitWord = stringParam.split("");
  let aux = [];
  for (let i = 0; i < splitWord.length; i += 1) {
    if (splitWord[i] === 'a') {
    aux.push('1');
    } else if (splitWord[i] === 'e') {
      aux.push('2');
    } else if (splitWord[i] === 'i') {
      aux.push('3');
    } else if (splitWord[i] === 'o') {
      aux.push('4');
    } else if (splitWord[i] === 'u') {
      aux.push('5');
    } else {
      aux.push(splitWord[i]);
    }
  }
  return aux.join("");
}

function decode(stringParam2) {
  let splitWord = stringParam2.split("");
  let aux = [];
  for (let i = 0; i < splitWord.length; i += 1) {
    if (splitWord[i] === '1') {
    aux.push('a');
    } else if (splitWord[i] === '2') {
      aux.push('e');
    } else if (splitWord[i] === '3') {
      aux.push('i');
    } else if (splitWord[i] === '4') {
      aux.push('o');
    } else if (splitWord[i] === '5') {
      aux.push('u');
    } else {
      aux.push(splitWord[i]);
    }
  }
  return aux.join("");
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
