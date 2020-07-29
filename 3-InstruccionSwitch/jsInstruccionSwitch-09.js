function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var precioDeLaEstadia = 15000;
	var precioFinal;
	var diferencia = 0;
	var modificadorDePrecio = 0; 
	/*Modificador de precio tendra valores positivos o neg. segun corresponda
	un descuento o un recargo en la estacion seleccionada*/
		
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					modificadorDePrecio = 20;
					break;
				
				case "Cataratas":
				case "Cordoba":
					modificadorDePrecio = -10;
					break;
				
				case "Mar del plata":
					modificadorDePrecio = -20;
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					modificadorDePrecio = -20;
					break;
				
				case "Cataratas":
				case "Cordoba":
					modificadorDePrecio = 10;
					break;
				
				case "Mar del plata":
					modificadorDePrecio = 20;
					break;
			}
			break;

		case "Primavera":
		case "Otoño":
			switch(destinoIngresado)
			{
				case "Cordoba":
					modificadorDePrecio = 0; //Esta linea es redundante, pero la escribo en caso de cambios
					break;
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					modificadorDePrecio = 10;
					break;
			}
			break;

	}
	//Se arregla el valor del modificador para realizar el calculo
	modificadorDePrecio = modificadorDePrecio / 100;

	diferencia = modificadorDePrecio * precioDeLaEstadia;

	precioFinal = diferencia + precioDeLaEstadia;

	alert("El precio final es $" + precioFinal);

}//FIN DE LA FUNCIÓN