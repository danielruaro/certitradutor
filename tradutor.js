var dezenas2 = [
  "",
  "onze",
  "doze",
  "treze",
  "quatorze",
  "quinze",
  "dezesseis",
  "dezessete",
  "dezoito",
  "dezenove"
];

var decimais = [
  "",
  "dez",
  "vinte",
  "trinta",
  "quarenta",
  "cinquenta",
  "sessenta",
  "setenta",
  "oitenta",
  "noventa"
];

var unidades = [
  false,
  "um",
  "dois",
  "tres",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove"
];

var centenas = [
  "",
  "cento",
  "duzentos",
  "trezentos",
  "quatrocentos",
  "quinhentos",
  "seiscentos",
  "setecentos",
  "oitocentos",
  "novecentos"
];

// [-99999, 99999]

function isDezenasEspecial(numero) {
  if (numero > 10 && numero < 20) {
    var num = numero.substr(1, 1);
    return dezenas2[num];
  } else {
    return false;
  }
}
function retornaUnidade(numero) {
  if (numero > 0) {
    return unidades[numero];
  } else {
    return false;
  }
}

function maiorQue20(numero) {
  numero = numero.toString();
  if (numero >= 20) {
    var decimalSecond = numero.substring(0, 1);
    var unidadeSecond = numero.substring(1, 2);

    return unidadeSecond != 0
      ? decimais[decimalSecond] + " e " + unidades[unidadeSecond]
      : decimais[decimalSecond];
  } else if (numero > 10 && numero < 20) {
    return isDezenasEspecial(numero);
  } else if (numero == 10) {
    return "dez";
  } else {
    return retornaUnidade(numero.substring(1, 2));
  }
}

function isCentena(numero) {
  numero = numero.toString();
  if (numero > 100) {
    var cento = numero.substring(0, 1);
    return centenas[cento];
  } else if (numero == 100) {
    return "cem";
  } else {
    return false;
  }
}

function validateNumber(number) {
  if (number > 99999 || number < -99999 || isNaN(number)) {
    return false;
  }
  return true;
}

function tradutor(numero) {
  if (!validateNumber(numero)) return "Entrada inválida";

  var result, sobra, resultFunc, isNegative;

  if (numero < 0) {
    isNegative = true;
    numero = Math.abs(numero);
  }

  numero = numero.toString();
  if (numero == 0) {
    return "0";
  } else if (numero >= 1000) {
    var decimal, unid, rest;

    if (numero >= 10000) {
      if (numero.substring(0, 2) > 10 && numero.substring(0, 2) < 20) {
        var num = isDezenasEspecial(numero.substring(0, 2));

        result = num + " mil";
      } else {
        decimal = numero.substring(0, 1);

        unid = numero.substr(1, 1);
        result =
          (decimal ? decimais[decimal] : "") +
          (decimal && unid != 0 ? " e " : "") +
          (unid != 0 ? unidades[unid] : "") +
          " mil";
      }

      rest = numero.substring(2, 5);
    } else {
      rest = numero.substring(1, 5);
      unid = numero.substr(0, 1);

      result =
        (decimal ? decimais[decimal] : "") +
        (decimal && unid != 0 ? " e " : "") +
        (unid != 0 ? unidades[unid] : "") +
        " mil";
    }

    sobra = isCentena(rest);
    result = sobra ? result + " e " + sobra : result;

    var sobra2 = rest.substring(1, 3);

    resultFunc = maiorQue20(sobra2);

    result = resultFunc ? result + " e " + resultFunc : result;
    return isNegative ? "menos " + result : result;
  } else if (numero >= 100) {
    sobra = isCentena(numero);

    result = sobra;

    var sobra2 = numero.substring(1, 3);

    var resultFunc = maiorQue20(sobra2);

    result = resultFunc ? result + " e " + resultFunc : result;
    return isNegative ? "menos " + result : result;
  } else if (numero < 100 && numero >= 10) {
    resultFunc = maiorQue20(numero);
    return isNegative ? "menos " + resultFunc : resultFunc;
  } else {
    resultFunc = retornaUnidade(numero);
    return isNegative ? "menos " + resultFunc : resultFunc;
  }
}

module.exports = tradutor;
