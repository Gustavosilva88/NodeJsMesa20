let Espectadores = require('../NodeJsMesa20/modulos/espectadores')


let lista = {
  mediaIdade: function (array) {
    let media = 0;
    let qtdOpina = 0;
    let idadeSoma = 0;

    for (i = 0; i < array.length; i++) {
      var Aux = array[i];
      if (Aux.opniao === 3) {
        qtdOpina++;
        idadeSoma += Aux.idade;
      }
    }
    media = idadeSoma / qtdOpina;
    return "A média das idades das pessoas que responderam ótimo:" + media
  },

  qtdRegular: function (array) {
    let qtd = 0;
    for (i = 0; i < array.length; i++) {
      var Aux = array[i];
      if (Aux.opniao === 1) {
        qtd++
      }
    }
    return " A quantidade de pessoas que responderam regular: " + qtd;
  },

  bomPercent: function (array) {
    let qtd = 0;
    for (i = 0; i < array.length; i++) {
      var Aux = array[i];
      if (Aux.opniao === 2) {
        qtd++
      }
    }
    return "A porcentagem de pessoas que responderam bom entre todos os espectadores analisados é :" + (qtd * 100) / array.length
  }
}

console.log(lista.mediaIdade(Espectadores));
console.log(lista.qtdRegular(Espectadores));
console.log(lista.bomPercent(Espectadores));

