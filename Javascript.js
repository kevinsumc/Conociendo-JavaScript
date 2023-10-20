//Conociendo JavaScript
//Ejemplo de comentario de una solo línea:
//Los comentarios de una sola línea se definen añadiendo dos barras oblicuas(//) al principio de la línea.
//Ejemplo de comentario de varias líneas:
/* Los comentarios de varias líneas son muy útiles
cuando se necesita incluir bastante información
en los comentarios*/

//VARIABLES
//Las variables en JavaScript se utilizan mediante la palabra reservada ‘var’.
var num_1 = 4;
var num_2 = 2;
var res = num_1 + num_2;

/*Podemos utilizar una variable no declarada en cualquier sentencia de código. 
Esta es una de las habilidades más sorprendentes de JavaScript 
y que muchos otros lenguajes de programación no tienen.
*/
num_1 = 4;
num_2 = 2;
res = num_1 + num_2;
/*De cualquier otra forma, es recomendable declarar todas las
variables que se vayan a usar. 
*/

//TIPOS DE DATOS
/*NUMÉRICOS
Se usan para contener valores numéricos enteros (llamados integer)
o decimales (llamados float).
*/
var entero = 99; // variable tipo entero
var decimal = 9384.23; // variable tipo decimal

/*CADENAS DE TEXTO
Se usan para contener caracteres, palabras y/o frases de texto.
*/
var sms = "Welcome to our city";
var nomProducto = `Escoba`;
var letter = `e`;

/*ARRAYS
También llamados vectores o matrices. Sin embargo, la denominación
‘array’ es la más utilizada y es un término comúnmente aceptado en
el entorno de desarrollo.
*/
var diasSemana =["Lunes", "Martes", "Miércoles", "Jueves",
 "Viernes","Sábado", "Domingo"];
 /*Ya que tenemos definido nuestro primer array, podemos sacar
algunos de sus valores de su interior de esta manera:
 */
var diaSeleccionado = diasSemana [0];// diaSeleccionado = “Lunes”
var otroDia = diasSemana [5]; // otroDia = “Sábado”

//BOOLEANOS
/*Estas variables suelen servir para condiciones o para la programación lógica.
Una variable este tipo solo puede almacenar dos valores: 
true (verdadero) o false (falso).
*/
var register = false;
var mayorEdad = true;

//OPERADORES
/*Los operadores manipulan los valores de las variables, realizan cálculos matemáticos y comparan
los valores de diferentes variables.
*/
//INCREMENTO Y DECREMENTO
var num = 5;
++num;
alert(num); // num = 6
var num = 5;
--num;
alert(num); // num = 4

//MATEMATICOS
/*Los operadores declarados son: suma (+), resta (-), multiplicación (*) y
división (/). Estos operadores son todos matemáticos.
*/
var num1 = 10;
var num2 = 5;
res = num1 / num2; // res = 2
res = 3 + num1; // res = 13
res = num2 - 4; // res = 1
res = num1 * num2; // res = 50

//RELACIONALES
/*Los relacionales: mayor que (>), menor que (<), mayor o igual (>=),
menor o igual (<=), igual que (==) y distinto de (!=).
El resultado de ellos siempre es un valor de booleano.
*/
var num1 = 3;
var num2 = 5;
res = num1 > num2; // res = false
res = num1 < num2; // res = true
num1 = 5;
num2 = 5;

res = num1 >= num2; // res = true
res = num1 <= num2; // res = true
res = num1 == num2; // res = true
res = num1 != num2; // res = false