/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var cantidadDeHilosDeAlambre;
    var metrosTotalesDeAlambre;

    cantidadDeHilosDeAlambre = 3;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    //La formula para el primetro total del rectangulo seria dos veces el ancho mas dos veces el largo
    perimetro = (2 * largo) + (2 * ancho);

    //Multiplico por la cantidad de hilos de alambres para obtener el total
    metrosTotalesDeAlambre = perimetro * cantidadDeHilosDeAlambre;

    alert("Se necesitaran " + metrosTotalesDeAlambre + " metros de alambre.");

}
function Circulo () 
{
    var radio;
    var perimetro;
    var cantidadDeHilosDeAlambre;
    var metrosTotalesDeAlambre;

    cantidadDeHilosDeAlambre = 3;

    radio = document.getElementById('txtIdRadio').value;
    radio = parseInt(radio);

    //La formula para el primetro total del rectangulo seria dos veces el radio * pi
    perimetro = (2 * radio) * Math.PI;

    //Multiplico por la cantidad de hilos de alambres para obtener el total
    metrosTotalesDeAlambre = perimetro * cantidadDeHilosDeAlambre;

    alert("Se necesitaran " + metrosTotalesDeAlambre + " metros de alambre.");
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var bolsasDeCementoPorMetroCuadrado;
    var bolsasDeCalPorMetroCuadrado;
    var totalCal;
    var totalCemento;

    bolsasDeCalPorMetroCuadrado = 3;
    bolsasDeCementoPorMetroCuadrado = 2;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    //La formula para el area total del rectangulo seria largo * ancho
    area = largo * ancho;

    //Multiplico la cantidad metros cuadrados por la cant. de bolsas que se necesita para c/u
    totalCal = bolsasDeCalPorMetroCuadrado * area;
    totalCemento = bolsasDeCementoPorMetroCuadrado * area;

    alert("Se necesitaran " + totalCemento + " bolsas de cemento y " + totalCal + " bolsas de cal.");
}