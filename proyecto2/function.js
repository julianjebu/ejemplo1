// la funcion con la palabra reservada fuction


function nombre(paramen){

    console.log(paramen);
    //codigo a ejecutar
}


//la funcion se llama con su nombre seguida de parantesis con parametros si sse requieren

nombre(param="hola")

function suma (a,b){

    console.log(a+b);
    let resultado = a+b
    console.log(resultado);
    return a+b
}

suma(342,56)

function saludar (){

    console.log("hola mundo");
}


saludar()

// funcion anonima

let varible = function(){

    //codigo a ejecutar
}

varible();

const saludar2 = (nombre = "sin nombre")=>{

        console.log(`hola ${nombre}`);

} 

saludar2("julian")

let sumar3 =(a,b) => console.log(a+b);;

sumar3(3,2)