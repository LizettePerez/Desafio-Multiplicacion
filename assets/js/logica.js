let numero;
while (true) {
  // Se muestra un prompt al usuario para que ingrese su elección
  numero = parseInt(prompt("Ingrese un número del 1 al 20: "));

  // Si el usuario ingresa una opcion válida (1 al 20), se sale del bucle
  if (numero >= 1 && numero <= 20) {
    break;
  } else {
    alert("Número fuera del rango");
  }
}