function mostrar()
{
	//tomo el mes
	var mesIngresado = document.getElementById("txtIdMes").value;

	switch(mesIngresado)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
		
		default:
			alert("Este mes tiene 30 o mas dias");
	
	}
}//FIN DE LA FUNCIÓN