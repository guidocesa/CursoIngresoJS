/*
Nombre: Guido Cesa

*/
function mostrarAumento()
{
	var importe;
	var importeConDescuento;
	var porcentajeDeDescuento;
	var cantidadADescontar;
	
	//Ingresar descuento que se desea dar
	var porcentajeDeDescuento = 25;
	//Se calcula la  proporcion por la que se  debe multiplicar
	var porcentajeDeDescuento =  (porcentajeDeDescuento / 100);
	

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);
	
    //Se calcula de  cuanto sera el descuento
    cantidadADescontar = importe * porcentajeDeDescuento;
    
    //Se calcula el importe descontado y se muestra
	importeConDescuento = importe - cantidadADescontar;
	document.getElementById('txtIdResultado').value = importeConDescuento;
	
}
