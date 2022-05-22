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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
