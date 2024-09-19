function maiorNumero(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return null; 
  }
  return lista.reduce((a, b) => (a > b ? a : b), -Infinity); 
}

function verificarParOuImpar(numero) {
  if (typeof numero !== 'number') {
    return null; 
  }
  return numero % 2 === 0 ? 'Par' : 'Ímpar'; 
}

function contarCaracter(texto, caracter) {
  if (typeof texto !== 'string' || typeof caracter !== 'string' || caracter.length !== 1) {
    return null; 
  }
  return texto.split('').filter(c => c.toLowerCase() === caracter.toLowerCase()).length; 
}

function atualizarPropriedade(objeto, chave, valor) {
  if (typeof objeto !== 'object' || objeto === null || !objeto.hasOwnProperty(chave)) {
    return null; 
  }
  return { ...objeto, [chave]: valor }; 
}

module.exports = {
  maiorNumero,
  verificarParOuImpar,
  contarCaracter,
  atualizarPropriedade,
};
