let cambio = true
let seguirJugando ;

const quieresJugar = (cambio)=>{
    let respesta = true;
    console.log("entro en funcion");

    while(respesta){

        seguirJugando =  prompt("quieres seguir jugando escribe si o no").toLowerCase()
        console.log(seguirJugando);
        if(seguirJugando === "si"){
            
            console.log("entro");
            respesta = false
            return true
            
            
        }else if(seguirJugando==="no"){

           
            console.log("entro");
            respesta = false
            alert("suerte pa")
            return false
            
        }else{

            alert("visaje elija entre si o no");
            respesta = true
            
        }

    }
   

             
}



while(cambio){

let variableJugador = prompt("piedra,papel,tijera").toLowerCase()
let variableMaquina = Math.floor(Math.random()*3+1)

console.log(variableMaquina);

if(variableMaquina === 1 ){

    variableMaquina = "piedra"
}else if(variableMaquina === 2){

    variableMaquina = "papel"
}else{

    variableMaquina = "tijera"

}

console.log(variableMaquina);



    switch (variableJugador) {
        case "piedra":
            if(variableMaquina=== "piedra"){
    
                console.log("empataste mi viejo");
    
            }else if(variableMaquina === "papel"){
    
                console.log("que visaje gano la maquina");
    
            }else{
    
                console.log("visajoso gano");

               cambio =  quieresJugar(cambio)
                
                
            }
            
            break;
    
        case "papel":
    
            if(variableMaquina=== "papel"){
    
                console.log("empataste mi viejo");
    
            }else if(variableMaquina === "tijera"){
    
                console.log("que visaje gano la maquina");
    
            }else{
    
                console.log("visajoso gano");

               cambio =  quieresJugar(cambio)
               
               
            }
    
                break;
            
        case "tijera":
    
            if(variableMaquina=== "tijera"){
    
                console.log("empataste mi viejo");
    
            }else if(variableMaquina === "piedra"){
    
                console.log("que visaje gano la maquina");
    
            }else{
    
                console.log("visajoso gano");
              cambio =  quieresJugar(cambio)
               
              
                
            }
            
            break;
    
        default:

            break;
    }
    

   

}


