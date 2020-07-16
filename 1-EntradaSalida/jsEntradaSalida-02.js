/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Se declara la variable
	var nombreIngresado;
	
	//El prompt siempre va asignado a una variable
	nombreIngresado = prompt("Por favor ingrese su nombre" , "Juan Perez");
	
	//Para concatenar diferentes mensajes uso un +
	alert("El nombre ingresado es : " + nombreIngresado); 
}

