//Comparar Edad Ejercicio Nº 1

let edad1 = prompt("Ingrese La edad ");

if (edad1 >= 18) {
  document.write("Eres Mayor de Edad");
} else if (edad1 < 18) {
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

//Calculo De Descuento Ejercicio Nº 4

let valorCompra = prompt("Ingrese Total de La compra");
let descuento = 0.1;
let valorDescuento = valorCompra * descuento;
let precioFinal = valorCompra - valorDescuento;

if (valorCompra > 100) {
  document.write("Compra Final: ", precioFinal);
} else {
    document.write("Compra Final No Tiene Descuento ");
}
document.write("<br>");

// Compara Dos Nuemros Ejercicio Nº 5

let primerNumero = prompt("ingrese Primer Numero")
let segundoNumero = prompt("ingrese Segundo Numero")

if (primerNumero === segundoNumero){
document.write("Numeros Iguales");
} else if (primerNumero > segundoNumero){
    document.write("Numero 1  es mayor que el 2"); 
} else {
    document.write("Numero 2 s Mayor que 1");
}
document.write("<br>");

// Calificcion Por Edad Ejercicio Nº 6

let edad = prompt("Ingrese Una edad");

if (edad < 12) {
  document.write("Eres Un Niño");
} else if (edad >= 12 && edad <= 17) {
    document.write("Eres Un Adolescente");
} else if ( edad >= 18 && edad <= 64){
    document.write("Eres Un Adulto");
} else {
    document.write("Eres Un Adulto Mayor");
}
document.write("<br>");



