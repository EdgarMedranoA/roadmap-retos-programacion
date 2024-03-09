/*
  EJERCICIO:
  Crea ejemplos de funciones básicas que representen las diferentes
    posibilidades del lenguaje:
    Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
    Comprueba si puedes crear funciones dentro de funciones.
    Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
    Pon a prueba el concepto de variable LOCAL y GLOBAL.
    Debes hacer print por consola del resultado de todos los ejemplos.
    (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 
   DIFICULTAD EXTRA (opcional):
   Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
   La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
   Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
   Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
   Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
    La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 
  Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
  Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

  //sin parametros ni retorno
 function saludar () {
    console.log("Hola mundo!");
 }
 saludar();

 //con uno o varios parametros

 function sumar (x, y) {
    console.log("la suma es: ", x + y);
 }
 sumar(5, 3)

 function concatenar (cadena1, cadena2){
    console.log("La concatenacion es ", cadena1 + cadena2);
 }
 concatenar("Hola ", "Mundo");

 //con retorno
 function calcularArea(base, altura) {
    return base * altura;
 }
 let area = calcularArea(2, 8);
 console.log("El area de la figura es: ", area);

 //funcion anidada
function calcularOperacion(a, b, operacion) {

    function sumar() {
        return a + b;
    }

    function restar() {
        return a - b;
    }

    function multiplicar() {
        return a * b;
    }

    function dividir() {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: División por cero";
        }
    }

    switch (operacion) {
        case 'suma':
            return sumar();
        case 'resta':
            return restar();
        case 'multiplicacion':
            return multiplicar();
        case 'division':
            return dividir();
        default:
            return "Operación no válida";
    }
}

//uso de la función
console.log("Suma:", calcularOperacion(5, 3, 'suma'));
console.log("Resta:", calcularOperacion(5, 3, 'resta'));
console.log("Multiplicación:", calcularOperacion(5, 3, 'multiplicacion'));
console.log("División:", calcularOperacion(5, 0, 'division'));
console.log("Operación inválida:", calcularOperacion(5, 3, 'potenciacion'));

/* DIFICULTAD EXTRA (opcional):
   Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
   La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
   Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
   Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
   Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
    La función retorna el número de veces que se ha impreso el número en lugar de los textos. */

function imprimirCadenas(cadena, cadena0) {
    let contador = 0;
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 ===0) {
            console.log(cadena + cadena0)
        }else if (i % 3 === 0) {
            console.log(cadena);
        }else if (i % 5 === 0) {
            console.log(cadena0);
        }else {
            console.log(i);
        }
        contador++
    }
    return contador;
}
const vecesImpresos = imprimirCadenas("hola", "mundo");
console.log("Numero de veces que se imprimio el numero: ", vecesImpresos)
