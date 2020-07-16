/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldoAumentado;

	sueldo = parseInt (document.getElementById('txtIdSueldo').value);

	//Se checkea que se ingrese un numero y si no es asi se avisa
	if ( !isNaN(sueldo))
	{
		sueldoAumentado = sueldo * 1.1;
		document.getElementById('txtIdResultado').value = sueldoAumentado;
	}
	else
	{
		alert("Por favor verifique que los datos sean correctos.");
	}
	
}
