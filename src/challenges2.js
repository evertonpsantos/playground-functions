/* eslint-disable complexity */
// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let repeatCounter = 0;
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < phoneNumber.length; i += 1) {
    if (phoneNumber[i] < 0 || phoneNumber[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index = 0; index < phoneNumber.length; index += 1) {
      if (phoneNumber[index] === phoneNumber[i]) {
        repeatCounter += 1;
      }
    }
    if (repeatCounter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    repeatCounter = 0;
  }

  let joinAux = phoneNumber.join('');
  let areaCode = joinAux.slice(0, 2);
  let firstPart = joinAux.slice(2, 7);
  let secondPart = joinAux.slice(7);
  let auxArray = '(' + areaCode + ')' + ' ' + firstPart + '-' + secondPart;
  return auxArray;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(frase) {
  let numberOnString = frase.match(/\d+/g);
  let sum = 0;
  for (let i = 0; i < numberOnString.length; i += 1) {
    let aux = parseInt(numberOnString[i]);
    sum += aux;
  }
  if (sum === 1) {
    return sum + ' copo de água';
  }
  return sum + ' copos de água';

}

// console.log(hydrate('2 cervejas, 10 sucos e 23 whiskies'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
