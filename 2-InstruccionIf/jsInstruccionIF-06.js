function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13)
	{
		alert("Usted es un niño.");
	}
	else
	{
		if (edadIngresada < 18)
		{
			alert("Usted es un adolescente.");
		}
		else
		{
			alert("Usted es un adulto.");
		}
	}

}//FIN DE LA FUNCIÓN