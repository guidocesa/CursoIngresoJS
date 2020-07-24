function mostrar()
{
	var edadIngresada;
	var grupoPerteneciente;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13)
	{
		grupoPerteneciente = "niño";
	}
	else
	{
		if (edadIngresada < 18)
		{
			grupoPerteneciente = "adolescente";
		}
		else
		{
			grupoPerteneciente = "adulto";
		}
	}
	alert("Usted es un " + grupoPerteneciente + ".");

}//FIN DE LA FUNCIÓN