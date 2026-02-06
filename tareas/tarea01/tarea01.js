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

  return meses[indiceMes - 1];
};

const mostrarFechaCompleta = (fecha) => {
  // Si el largo de la fecha no coincide con el del formato
  if (fecha.length !== 10) {
    return null;
  }

  if (fecha[2] !== "/" || fecha[5] !== "/") {
    return null;
  }

  const dia = fecha[0] + fecha[1];
  const mes = fecha[3] + fecha[4];
  const year = fecha.slice(6);

  if (isNaN(dia) || isNaN(mes) || isNaN(year)) {
    return null;
  }
};

console.log(mostrarFechaCompleta("12/12/2025"));
console.log(obtenerNombreMes(13));
