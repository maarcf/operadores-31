// OPERADORES 

console.log("EJERCICIO 27");

let numero1 = 26;
let numero2 = 6;
let resultado = numero1 + numero2;
let textoResultado = `Sumo ${numero1} + ${numero2} y el resultado es ${resultado}`;
console.log(textoResultado);

resultado = numero1 - numero2;
textoResultado = `Resto ${numero1} - ${numero2} y el resultado es ${resultado}`;
console.log(textoResultado);

resultado = numero1 * numero2;
textoResultado = `Multiplico ${numero1} * ${numero2} y el resultado es ${resultado}`;
console.log(textoResultado);

resultado = numero1 / numero2;
textoResultado = `Divido ${numero1} / ${numero2} y el resultado es ${resultado}`;
console.log(textoResultado);

resultado = numero1 % numero2;
textoResultado = `El resto de las variables ${numero1} y ${numero2} da como resultado es ${resultado}`;
console.log(textoResultado);



console.log("EJERCICIO 28");

let numero = 9;
console.log(numero*1);
console.log(numero*2);
console.log(numero*3);
console.log(numero*4);
console.log(numero*5);
console.log(numero*6);
console.log(numero*7);
console.log(numero*8);
console.log(numero*9);
console.log(numero*10);



console.log("EJERCICIO 29");

let longitudDelLado = 10;
let perimetro = longitudDelLado + longitudDelLado + longitudDelLado + longitudDelLado;
console.log(perimetro);



console.log("EJERCICIO 30");
longitudDelLado = 5;
let area = longitudDelLado ** 2;
console.log(area);



console.log("EJERCICIO 31");
let ladoUno = 10;
let ladoDos = 20;
let ladoTres = 5;
perimetro = ladoUno + ladoDos + ladoTres;
console.log(perimetro);



console.log("EJERCICIO 32");
let altura = 10;
let base = 4;
perimetro = (altura * 2) + (base * 2);
area = base * altura;
textoResultado = `El perímetro es ${perimetro} y el área es ${area}`;
console.log(textoResultado);



console.log("EJERCICIO 33");

let cantidadDePersonas = 100;
cantidadDePersonas += 5;
textoResultado = `Cantidad de personas: ${cantidadDePersonas}`;
console.log(textoResultado);
cantidadDePersonas -= 3;
textoResultado = `Cantidad de personas: ${cantidadDePersonas}`;
console.log(textoResultado);
cantidadDePersonas *= 2;
textoResultado = `Cantidad de personas: ${cantidadDePersonas}`;
console.log(textoResultado);



console.log("EJERCICIO 34");
let ingresos = 1000;
let ganancias = 600;
let impuestos = 500;
console.log("Objetivo de ingresos:", ingresos >= 800);
console.log("Objetivo de impuestos:", impuestos < 400);
console.log("Bono de ganancias:", ganancias == 600);



console.log("EJERCICIO 35");
let numeroDeCliente = 143245;
let numeroDeClienteIngresado = '143245';
resultado = numeroDeCliente == numeroDeClienteIngresado;
console.log("El número ingresado por el cliente es correcto: " + resultado);
resultado = numeroDeCliente === numeroDeClienteIngresado;
console.log("El cliente ingresó un número de cliente es válido: " + resultado);



console.log("EJERCICIO 36");
numero1 = 10;
numero2 = 20;
console.log("La variable numero1 y numero2 tienen el mismo valor:", numero1 === numero2);
console.log("La variable numero1 y numero2 son distintintas:", numero1 !== numero2);



console.log("EJERCICIO 37");
let promedioParaAprobar = 6;
let promedioDelAlumno = 4;
console.log("El alumno tiene un promedio mayor o igual que el requerido:", promedioDelAlumno >= promedioParaAprobar);
console.log(`Al alumno le faltaron ${promedioParaAprobar - promedioDelAlumno} puntos para aprobar`);