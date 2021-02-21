export const procesoPesado = (counter) => {
  for (let index = 0; index < counter; index++) {
    console.log("hola");
  }
  return `Proceso ejecutado ${counter} veces`;
};
