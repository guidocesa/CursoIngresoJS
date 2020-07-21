/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    resultado = (precioUno + precioDos + precioTres);

    alert("La suma de los precios es " + resultado + ".");

}
function Promedio () 
{
    var cantidadDeProductos = 3;
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var valorTotal;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    valorTotal = (precioUno + precioDos + precioTres);

    resultado = (valorTotal / cantidadDeProductos);

    alert("El promedio de los precios es " + resultado + ".");
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultadoParcial;
    var resultado;
    var porcentajeDelIVA = 21;
    var IVA;

    //Se corrige el valor decimal para calcular el IVA
    porcentajeDelIVA = (porcentajeDelIVA / 100);

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    resultadoParcial = (precioUno + precioDos + precioTres);

    IVA = (resultadoParcial * porcentajeDelIVA);

    resultado = (resultadoParcial + IVA);

    alert("La suma de los precios es " + resultado + ".");
}