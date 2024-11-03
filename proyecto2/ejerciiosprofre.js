//tipoes de funciones en Javascritp
//Funciones Tradicionales : usan la palabra clave fuction
//Funciones Anonimas : son funciones sin nombre asignado a una varible
//Funciones Flecha : tienen una sintaxis mas concisa , 

/* let nombre = "Julian";

function MuestraMiNombre(){

    document.body.innerHTML = "<h1>"+nombre+"</h1>"
}


MuestraMiNombre()
 */
let nombre2 = "Esteban"
let estatura = 180

function MuestraMiNombre2(){

   
    let datos = document.getElementById("datos")
    
    
  datos.innerHTML = `<h1>soy la caja de datos </h1> 
        <h2>nomre : ${nombre2} </h2>
        <h2>nomre : ${estatura} </h2>
    ` 
      
}

/* MuestraMiNombre2(nombre2,estatura) */
/* 
//Verificar si un numero es primo
function par(num) {
    if (num % 2 == 0){
        document.write("El "+ num + "es un numero par");
    } else {
        document.write("El "+ num + "NO un numero par");
    }
}

par(5); */


//  

/* //conversor de unidades, centimetros a metros
function conversor(){
    let cm = parseInt(prompt("Ingrese una cantidad de cm"));
    
    let m = cm / 100;
    
    alert(cm + " centimetros equialen a " + m + " metros")
}

conversor() */