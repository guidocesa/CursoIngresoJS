function mostrar()
{
	var destinoIngresado;
	var temperaturaDelDestino;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{		
		case "Cataratas":
		case "Mar del plata":
			temperaturaDelDestino = "caluroso";
			break;

		case "Ushuaia":
		case "Bariloche":
			temperaturaDelDestino = "frio";
			break;
	}
	alert("Ese destino suele tener un clima " + temperaturaDelDestino + ".");



}//FIN DE LA FUNCIÓN