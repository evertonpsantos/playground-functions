// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < phoneNumber.length; i += 1) {
    if (phoneNumber[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (phoneNumber[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let areaCode = phoneNumber.slice(0, 2);
  let firstPart = phoneNumber.slice(2, 7);
  let secondPart = phoneNumber.slice(7);
  let auxArray = [areaCode, firstPart, secondPart];
  let auxArray2 = auxArray.join('');
  console.log(auxArray2);
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
