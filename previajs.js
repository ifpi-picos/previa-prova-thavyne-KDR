export const maiorNumero = (array) => {
  if (
      array.length > 0
      && typeof (array) !== 'string'
      && typeof (array) !== 'number'
  ) {
      return array.sort((a, b) => a - b)[array.length - 1];
  }

  return null
};

export const verificarParOuImpar = (number) => {
  if (typeof (number) === "number" && number >= 0) {
      if (number % 2 === 0) {
          return 'Par'
      }
      else {
          return 'Ímpar'
      }
  }

  return null
};

export const contarCaracter = (palavra, letra) => {
  if (typeof (palavra) === "string") {
      let contador = 0
      palavra = palavra.toLowerCase()

      for (let i = 0; i <= palavra.length; i++) {
          if (palavra[i] === letra) {
              contador++
          }
      }

      return contador
  }

  return null
};

export const atualizarPropriedade = (objeto, chave, valor) => {
  
  if (chave in objeto) {
      objeto[chave] = valor

      return objeto
  }

  return null
}