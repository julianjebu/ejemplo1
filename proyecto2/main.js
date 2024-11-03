let nombre = "Julian"

const MuestraMiNombre = ()=>{

    document.body.innerHTML = "<h1>mi nombre es : "+ nombre +"</h1>"

}

MuestraMiNombre()

// funcion anonima

let saludo = function(){

    return "hola </br>"
}

document.write(saludo())

//funcion flecha

const saludo2 = (nombre2)=>{

    return "hola "+ nombre2 +"</br>"
}


document.write(saludo2("Julian"))


//funcion predefinida

let num = "8";
let suma =  parseInt(num) + 5 ;
document.write(suma)

