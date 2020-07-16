/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;

	importe = parseInt (document.getElementById('txtIdImporte').value);

	//Se checkea que se ingrese un numero y si no es asi se avisa
	if ( !isNaN(importe))
	{
		resultado = importe * 0.75;
		document.getElementById('txtIdResultado').value = resultado;
	}
	else
	{
		alert("Por favor verifique que los datos sean correctos.");
	}
	
}
