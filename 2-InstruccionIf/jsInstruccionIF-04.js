function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 12 && edadIngresada < 18)
	{
			alert("Usted es adolescente.");
	}

}//FIN DE LA FUNCIÓN