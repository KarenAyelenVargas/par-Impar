let btnEnviar = document.getElementById("btnEnv");
let valor: number = 0;

btnEnviar.addEventListener("click", () => {
  let valor: number = Number(dato.value);
  if (valor === 0) {
    console.log("El valor ingresado es cero");
  } else {
    if (valor % 2 === 0) {
      console.log("El valor ingresado es par", valor);
    } else {
      console.log("El valor ingresado es impar", valor);
    }
  }
});
