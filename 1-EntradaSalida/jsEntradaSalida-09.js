/*
Nombre: Guido Cesa

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldoAumentado;
	var porcentajeDeAumento;
	var cantidadAAumentar;
	
	//Ingresar el porcentaje que se desea dar
	porcentajeDeAumento = 10;
	//Se calcula la  proporcion por la que se  debe multiplicar
	porcentajeDeAumento = (porcentajeDeAumento / 100);
	

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo);
	
    //Se calcula de  cuanto sera el aumento	
    cantidadAAumentar = sueldo * porcentajeDeAumento;
    
    //Se calcula el sueldo aumentado y se muestra
	sueldoAumentado = sueldo + cantidadAAumentar;
	document.getElementById('txtIdResultado').value = sueldoAumentado;
	
}
