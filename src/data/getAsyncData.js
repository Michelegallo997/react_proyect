import products from "./data";

export function getAsyncData() {
  console.log("Cargando productos...");
  return new Promise((resolve, reject) => {
    const errorFatal = false;

    setTimeout(() => {
      if (errorFatal) {
        reject("Algo salió mal");
      } else {
        resolve(products);
      }
    }, 500);
  });
}
