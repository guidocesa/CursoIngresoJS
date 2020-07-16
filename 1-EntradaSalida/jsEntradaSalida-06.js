/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt (txtIdNumeroUno.value);
	numeroDos = parseInt (txtIdNumeroDos.value);

	//NaN es el valor que parse asigna cuando no lee un numero
	if ( !isNaN(numeroUno) && !isNaN(numeroDos) )
	{
		resultado = numeroUno + numeroDos;
		alert("La suma es " + resultado + ".");
	}
	else
	{
		alert("Faltan ingresar datos.");
	}
}

