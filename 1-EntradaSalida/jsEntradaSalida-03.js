/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	//En la variable nombre ingresado guardo el nombre escrito en la caja de texto.
	//El ID lo busco en el HTML de la pagina
	//El .value le pidde el valor a dicho ID (que es un objeto)
	nombreIngresado=txtIdNombre.value;

	alert("Su nombre es : " + nombreIngresado);

}


