/* if(condicion){

    //codigo a ejecutar si la condicion es verdadera

} */

/* nomber =  10;

if(nomber>100){

    console.log("hola me ejecute maayor a 100");
}else if(number >10){

    console.log("hole me ejecute mayor a 10");

}else{


    console.log("no es mayor de 10 ni de 100");
}

//codicional ternario 

let numero = 10;


 condicion ? true : false 

numero === 1 ? console.log("hola me ejecute"): console.log("no estoy entre las opciones"); */

let frutas = "mAngo"

switch(frutas.toLocaleLowerCase()){
    case "manzana":
        // Codigo que se ejecuta si la condicuion es igual a al valor 1
        console.log("manzana");
        break;
    case "mango":

        console.log("mango");

        break;

    case "papaya":
        console.log("papaya");
        break;    

    default://opcional

        console.log("no contamos con esa fruta gracias por su visita");
        break;

}


let jugadausuraio = prompt("piedra ,papel o tijero")
let judadaMaquina = Math.floor(Math.random()*3)+1;

if(judadaMaquina === 1){//validar tipo de dato 
    
    judadaMaquina ="piedra";
}else if (judadaMaquina === 2){

    judadaMaquina = "papel"
}else {

    judadaMaquina = "tijera"

}

switch(jugadausuraio){

    case "piedra":

        if(judadaMaquina === "piedra"){

            console.log("empate la maquiena eligio piedra");
        }else if(judadaMaquina === "papel"){

            console.log("perdiste la mquiena eligio papel");
        }else{

            console.log("Ganamos la maquiena elijio tijeora");
        }

    break;
    
    case "papel":

        
    if(judadaMaquina === "papel"){

        console.log("empate la maquiena eligio piedra");
    }else if(judadaMaquina === "papel"){

        console.log("perdiste la mquiena eligio papel");
    }else{

        console.log("Ganamos la maquiena elijio tijeora");
    }

    break;
    
    case "tijera":

            
        if(judadaMaquina === "tijera"){

            console.log("empate la maquiena eligio piedra");
        }else if(judadaMaquina === "papel"){

            console.log("perdiste la mquiena eligio papel");
        }else{

            console.log("Ganamos la maquiena elijio tijeora");
        }


        break;

}


