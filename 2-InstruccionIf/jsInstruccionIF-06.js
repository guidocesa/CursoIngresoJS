function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13)
	{
		alert("Usted es un niño.");
	}

	if (edadIngresada >= 13 && edadIngresada <= 17)
	{
		alert("Usted es un adolescente.");
	}

	if (edadIngresada >= 18)
	{
		alert("Usted es un adulto.");
	}

}//FIN DE LA FUNCIÓN