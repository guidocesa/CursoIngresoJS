function mostrar()
{
	var seViaja = false;
	var mensajeAMostrar;
	var estacionIngresada;
	var destinoIngresado;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado == "Bariloche")
			{
				seViaja = true;
			}
			break;

		case "Verano":
			if(destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas")
			{
				seViaja = true;
			}
			break;

		case "Primavera":
			if(destinoIngresado != "Bariloche")
			{
				seViaja = true;
			}
			break;

		case "Otoño":
			seViaja = true;
			break;
	}
	if(seViaja)
	{
		mensajeAMostrar = "Se viaja en esa epoca.";
	}
	else
	{
		mensajeAMostrar = "NO se viaja en esa epoca.";
	}
	alert(mensajeAMostrar);


}//FIN DE LA FUNCIÓN