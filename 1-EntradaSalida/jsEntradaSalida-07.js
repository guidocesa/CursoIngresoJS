/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;

	//Aca vemos otra version (mas correcta y menos propensa a errores) de conseguir un valor por ID
	numeroUno = parseInt (document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt (document.getElementById('txtIdNumeroDos').value);	

	if ( !isNaN(numeroUno) && !isNaN(numeroDos) )
	{
		resultado = numeroUno + numeroDos;
		alert("La suma es " + resultado + ".");
	}
	else
	{
		alert("Faltan ingresar datos correctos.");
	}
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt (document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt (document.getElementById('txtIdNumeroDos').value);

	if ( !isNaN(numeroUno) && !isNaN(numeroDos) )
	{
		resultado = numeroUno - numeroDos;
		alert("La resta es " + resultado + ".");
	}
	else
	{
		alert("Faltan ingresar datos correctos.");
	}
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt (document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt (document.getElementById('txtIdNumeroDos').value);

	if ( !isNaN(numeroUno) && !isNaN(numeroDos) )
	{
		resultado = numeroUno * numeroDos;
		alert("El producto es " + resultado + ".");
	}
	else
	{
		alert("Faltan ingresar datos correctos.");
	}
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt (document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt (document.getElementById('txtIdNumeroDos').value);

	if ( !isNaN(numeroUno) && !isNaN(numeroDos) && numeroDos != 0 )
	{
		resultado = numeroUno / numeroDos;
		alert("La division es " + resultado + ".");
	}
	else
	{
		alert("Faltan ingresar datos correctos.");
	}
}

