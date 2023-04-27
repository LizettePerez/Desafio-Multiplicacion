
// const obtenerNumero = () => {
//   let numero;
//   while (true) {
//     // Se muestra un prompt al usuario para que ingrese su elección
//     numero = parseInt(prompt("Ingrese un número del 1 al 20: "));

//     // Si el usuario ingresa una opcion válida (1 al 20), se sale del bucle
//     if (numero >= 1 && numero <= 20) {
//       break;
//     } else {
//       // Si el usuario ingresa una opción invalida
//       alert("Número fuera del rango");
//     }
//   }
//   return numero;
// }

// const mostrarTabla = (numero) => {
//   console.log(`Tabla de multiplicar de ${numero}`);

//   for (let i = 1; i <= numero; i++) {
//     console.log(`${i} x ${numero} = ${i * numero}`);
//   }

//   let factorial = 1;
//   for (let j = 1; j <= numero; j++) {
//     console.log(`Factorial de ${j} es ${factorial *= j}`);
//   }
// }

// const numero = obtenerNumero();
// mostrarTabla(numero);





const tituloMultiplicar = document.querySelector(".tituloMultiplicar");
const tituloFactorial = document.querySelector(".tituloFactorial");
const tablaMultiplicar = document.querySelector(".tablaMultiplicar");
const tablaFactorial = document.querySelector(".tablaFactorial");


// Creación titulo tabla de multiplicar
const tituloTablaMult = (numero) => {
  tituloMultiplicar.innerHTML = `Tabla de multiplicar de ${numero}`;
}


// Creación titulo tabla de factorial
const tituloTablaFact = (numero) => {
  tituloFactorial.innerHTML = `Tabla de factorial hasta ${numero}`;
}


// Funcion para mostrar tabla
const mostrarTabla = (numero) => {
  // Ingresar el titulo
  tituloTablaMult(numero);
  
  // Mostrar tabla de multiplicar
  for (let i = 1; i <= numero; i++) {
    tablaMultiplicar.innerHTML += `${i} x ${numero} = ${i * numero} <br>`;
  }

  // Ingresar el titulo
  tituloTablaFact(numero);

  // Mostrar tabla de factoria
  let factorial = 1;
  for (let j = 1; j <= numero; j++) {
    tablaFactorial.innerHTML += `Factorial de ${j} es ${factorial *= j} <br>`;
  }
}

// Funcion para validar el numero ingresado por el usuario
const validarNumero = () => {
  // Al hacer click en el boton limpiar las tablas
  tablaMultiplicar.textContent = "";
  tablaFactorial.textContent = "";


  const numeroInput = document.getElementById("numero");
  const numero = parseInt(numeroInput.value);

  // Si el numero esta dentro del rango permitido, se llama a la funcion para mostrar la tabla
  if (numero >= 1 && numero <= 20) {
    mostrarTabla(numero);
  // Si el numero no esta dentro del rango permitido, se muestra un alerta y se recarga la pagina
  } else {
    alert("Número fuera del rango, ingresar un número del 1 al 20.");
    location.reload();
  }
}



