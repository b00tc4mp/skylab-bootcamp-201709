function yesterday(){

	var dt = new Date();
	var year= dt.getFullYear();
	var month =dt.getMonth();
	var yesterday = dt.getDate()-1;

console.log("la fecha completa de hoy es " + dt);
console.log("la fecha de ayer era: " + yesterday + ", " + month+ ", " + year)

}

yesterday()


/* esta funciona de abajo------------------*/
function yesterday(){

	var dt = new Date();
	var year= dt.getFullYear();
	var month =dt.getMonth();
	var yesterday = dt.getDate()-1;
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
	var mes= meses[month];
console.log("la fecha completa de hoy es " + dt);
console.log("la fecha de ayer era: " + yesterday + ", " + mes + ", " + year)

}

yesterday()


/*---------------------creando un metodo---------------*/
function getData(){
/* esto es un constructor de objectos simplemente*/
}



getData.prototype.yesterday = function(){

	var dt = new Date();
	var year= dt.getFullYear();
	var month =dt.getMonth();
	var yesterday = dt.getDate()-1;
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
	var mes= meses[month];
console.log("la fecha completa de hoy es " + dt);
console.log("la fecha de ayer era: " + yesterday + ", " + mes + ", " + year)

}

var ayer = new getData(); /* aqui construyo el objeto propiamente*/
ayer.yesterday();/* aqui aplico a mi objeto nuevecito el metodo que me he inventado 
para todos los objetos que clono del constructor*/