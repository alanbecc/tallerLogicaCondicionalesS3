//Comparar Edad Ejercicio Nº 1

let edad = prompt("Ingrese La edad ");

if (edad >= 18) {
  document.write("Eres Mayor de Edad");
} else if (edad < 18) {
  document.write("Eres Menor de Edad");
}
document.write("<br>");

//Positivo Negativo Ejercicio Nº 2

let numeroUsuario = prompt("Ingrese Un Numero Para Saber si es Negativo o Positivo");

if (numeroUsuario >= 0) {
  document.write("Numero Positivo");
} else if (numeroUsuario <= 0) {
  document.write("Numero Negativo");
}
document.write("<br>");

//Par e Impar Ejercicio Nº 3

let numeroParImpar = prompt("Ingrese Un Numero Para Saber si es Par o Impar");

if (numeroParImpar % 2 == 0) {
    document.write("Numero es Par");
} else {
    document.write("Numero Impar");
}
document.write("<br>");




