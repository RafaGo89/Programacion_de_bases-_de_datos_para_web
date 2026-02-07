const esFechaValida = (mes, dia, year) => {
  // NOTA: no comtempla años bisciestos
  const meses31Dias = [1, 3, 5, 7, 8, 10, 12];
  const meses30Dias = [4, 6, 9, 11];

  // Considerar años solo de 4 cifras
  if (year < 1000 || year > 9999) {
    return false;
  }

  if (meses31Dias.includes(mes) && dia >= 1 && dia <= 31) {
    return true;
  } 
  else if (meses30Dias.includes(mes) && dia >= 1 && dia <= 30) {
    return true;
  }
  else if (mes === 2 && dia >= 1 && dia <= 28) {
    return true;
  }

  return false;
};

const obtenerNombreMes = (indiceMes) => {
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const mes =
    typeof meses[indiceMes - 1] === "string" ? meses[indiceMes - 1] : null;

  return mes;
};

const mostrarFechaCompleta = (fecha) => {
  let dia = "";
  let mes = "";
  let year = "";
  let nombreMes = "";

  // Si el largo de la fecha no coincide con el del formato
  if (fecha.length !== 10) {
    return null;
  }

  if (fecha[2] !== "/" || fecha[5] !== "/") {
    return null;
  }

  dia = Number(fecha[0] + fecha[1]);
  mes = Number(fecha[3] + fecha[4]);
  year = Number(fecha.slice(6));

  if (isNaN(dia) || isNaN(mes) || isNaN(year)) {
    return null;
  }

  if (!esFechaValida(mes, dia, year)) {
    return null;
  }

  nombreMes = obtenerNombreMes(mes);

  return `${dia} de ${nombreMes} de ${year}`;
};

console.log(mostrarFechaCompleta("11/02/2024"));
console.log(mostrarFechaCompleta("13/09/2003"));
console.log(mostrarFechaCompleta("1/02/2024"));
console.log(mostrarFechaCompleta("01/02/02"));
console.log(mostrarFechaCompleta("01-02-2024"));
