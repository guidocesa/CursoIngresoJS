function mostrar()
{
	var seViaja = false;
	//Inicio seViaja en false y solo se cambia al seleccionar un destino al que SI se viaja.
	var mensajeAMostrar;
	var estacionIngresada;
	var destinoIngresado;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					seViaja = true;
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					seViaja = true;
					break;
			}
			break;

		case "Primavera":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					seViaja = true;
					break;
			}
			break;

		case "Otoño":
			seViaja = true;
			break;
	}
	switch(seViaja)
	{
		case true:
			mensajeAMostrar = "Se viaja en esa epoca.";
			break;
		
		case false:
			mensajeAMostrar = "NO se viaja en esa epoca.";
			break;
	}
	alert(mensajeAMostrar);


}//FIN DE LA FUNCIÓN

/* function mostrar()
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
			switch(destinoIngresado == "Bariloche")
			{
				seViaja = true;
			}
			break;

		case "Verano":
			switch(destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas")
			{
				seViaja = true;
			}
			break;

		case "Primavera":
			switch(destinoIngresado != "Bariloche")
			{
				seViaja = true;
			}
			break;

		case "Otoño":
			seViaja = true;
			break;
	}
	switch(seViaja)
	{
		mensajeAMostrar = "Se viaja en esa epoca.";
	}
	else
	{
		mensajeAMostrar = "NO se viaja en esa epoca.";
	}
	alert(mensajeAMostrar);


}//FIN DE LA FUNCIÓN */