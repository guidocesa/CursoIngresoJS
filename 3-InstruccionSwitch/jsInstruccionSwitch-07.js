function mostrar()
{
	var destinoIngresado;
	var locacionDelDestino;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			locacionDelDestino = "oeste";
			break;
		
		case "Cataratas":
			locacionDelDestino = "norte";
			break;

		case "Mar del plata":
			locacionDelDestino = "este";
			break;

		case "Ushuaia":
			locacionDelDestino = "sur";
			break;
	}
	alert("Ese destino queda en el " + locacionDelDestino + " argentino.");



}//FIN DE LA FUNCIÓN