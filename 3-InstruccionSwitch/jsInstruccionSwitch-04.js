function mostrar()
{
	var mesIngresado = document.getElementById("txtIdMes").value;
	var cantidadDeDiasDelMes;

	switch(mesIngresado)
	{
		case "Febrero":
			cantidadDeDiasDelMes = 28;
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			cantidadDeDiasDelMes = 30;
			break;

		default:
			cantidadDeDiasDelMes = 31;
	}

	alert("Ese mes tiene " + cantidadDeDiasDelMes + " dias.");



}//FIN DE LA FUNCIÓN