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

// Calificacion De Notas Ejercicio Nº 7

let nota = prompt("Ingrese Una Nota de 0 a 100");

if (nota >= 90) {
  document.write("Su Nota es Excelente");
} else if (nota >= 70) {
    document.write("Su Nota es Buena");
} else if ( nota >= 50){
    document.write("Su Nota Regular");
} else {
    document.write("Nota Insuficiente");
}
document.write("<br>");

// Eleccion Menu Ejercicio Nº 8

let opcionMenu = prompt("Selecciona Una Opcion del menu");

switch (opcionMenu) {
    case "1":
        document.write("Seleccionaste Pizza");
        break;
    case "2":
        document.write("Seleccionaste Hamburguesa");
        break;
    case "3":
        document.write("Seleccionaste Tacos");
        break;
    default:
        document.write("Opcion No Valida");
        break;
}
document.write("<br>");

// Tipo de Triangulo Ejercicio Nº 9
 
let ladoUno = prompt("Ingrese el Lado 1");
let ladoDos = prompt("Ingrese el Lado 2");
let ladoTres = prompt("Ingrese el Lado 3");

if ( ladoUno === ladoDos && ladoDos === ladoTres){
    document.write("Todos las Lados Son Iguales es un Triangulo equilatero");
} else if ( ladoUno === ladoDos || ladoDos === ladoTres || ladoUno === ladoTres ){
    document.write("Solo Dos Lados Son Iguales es un  Trianguulo Isosceles");
} else {
    document.write("Todos las Lados Son Diferentes es un Triangulo Escaleno");
}
document.write("<br>");

//Adivinar Un Numero Ejercicio Nº 10

let random = Math.random();
random = random * 10 + 1;
random = Math.trunc(random);

let numeroAleatorio = prompt("Ingrese Un Numero Del 1 Al 10");
if (numeroAleatorio == random){
document.write("Has Acertado");
}else {
  document.write('El numero es:  ' + random, '  ' ,'Intenta de Nuevo');
}
document.write("<br>");

//Calcula Precio Final Ejercicio Nº 11

let precioBase = prompt("valor de su compra:");

if (precioBase > 500) {
  let descuento = 0.15;
  let volorDescuento = precioBase * descuento;
  let precioFinal = precioBase - volorDescuento;

  document.write("su compra  es de:", precioFinal);
} else if (precioBase > 300) {
  let descuento = 0.1;
  let volorDescuento = precioBase * descuento;
  let precioFinal = precioBase - volorDescuento;

  document.write("su compra  es de:", precioFinal);
}else if (precioBase >300 ){
  let descuento = 0.05;
  let volorDescuento = precioBase * descuento;
  let precioFinal = precioBase - volorDescuento;

  document.write("su compra  es de:", precioFinal);
}
else {
  document.write("su compra no tiene descuento");
}
document.write("<br>");

//Verificar Año Bisiesto Ejercicio Nº 12

let verificarBisiesto = prompt("Ingresa un año para verifiar si es o  no Bisiesto")

if (verificarBisiesto % 400 == 0){
    document.write("Año Bisiesto");
} else if (verificarBisiesto % 100 == 0){
    document.write("Año No Bisiesto");
} else if (verificarBisiesto % 4 == 0){
    document.write("Año Bisiesto");
} else {
    document.write("Año No Bisiesto");
}
document.write("<br>");

// Autenticacion de usuario Ejerccio Nº 13

let usuario = prompt(" Ingrese su Nombre de Usuario");
let contrasena = prompt("Ingrese Su Contraseña");

if (usuario === "admin" && contrasena === "1234"){
    document.write("Acceso Autorizado");
} else {
    document.write("Acceso Denegado");
}
document.write("<br>");

// Determinar Horario del Dia Ejercicio Nº 14

let hora = prompt("Ingrese Una Hora del 0 al 23");

if (hora >= 6 &&  hora < 12) {
  document.write("Buenos Dias");
} else if (hora >= 12 &&  hora < 18) {
    document.write("Buenas Tardes");
} else if (hora >= 18 &&  hora < 24){
    document.write("Buenas Noches");
} else if (hora >= 0 &&  hora <= 6){
    document.write("Buenas Noches");
} else {
    document.write("Hora Ingresada No Valida");
}
document.write("<br>");

// Clasificacion De Masa Muscular Ejercicio Nº 15

let peso = parseFloat(prompt("Ingrese Su Peso"));
let altura = parseFloat(prompt("Ingrese Su Altura"));

let imc = peso / (altura **2);

if (imc < 18,5){
    document.write("Bajo Peso");
} else if ( imc >= 18,5 && imc <= 24,9){
    document.write("Peso Normal");
} else if (imc >= 25 && imc < 29,9){
    document.write("Sobre Peso");
}

