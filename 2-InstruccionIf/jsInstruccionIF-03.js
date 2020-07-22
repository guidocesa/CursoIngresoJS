function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 17)
	{
		alert("Usted es mayor de edad.");
	}
	else
	{
		alert("Usted es menor de edad.");
	}
}//FIN DE LA FUNCIÓN