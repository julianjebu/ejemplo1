// Seleccionamos el cuadro y los botones del DOM
const cuadro = document.getElementById('cuadro'); // Usamos 'const' porque no vamos a reasignar esta variable

const botonRojo = document.getElementById('rojo');
const botonVerde = document.getElementById('verde');
const botonAzul = document.getElementById('azul');
const aleatorio = document.getElementById("aleatorio")
const colorInput = document.getElementById("colorInput")


// Evento para cambiar el color a rojo
botonRojo.addEventListener('click', function() {
cuadro.style.backgroundColor = 'red'; // Cambiamos el color del cuadro a rojo
ColorInput("red")
});
// Evento para cambiar el color a verde
botonVerde.addEventListener('click', function() {
cuadro.style.backgroundColor = 'green'; // Cambiamos el color del cuadro a verde
ColorInput("green")
});
// Evento para cambiar el color a azul
botonAzul.addEventListener('click', function(e) {
cuadro.style.backgroundColor = 'blue'; // Cambiamos el color del cuadro a azul
ColorInput("blue")
});

aleatorio.addEventListener('click',(e)=>{
    const random = '#'+Math.floor(Math.random()*16777215).toString(16)
    cuadro.style.backgroundColor = random
    ColorInput(random)

})


const ColorInput = (color)=>{ // funcion sencilla pero pracital la bellaca mela 

   
    colorInput.style.backgroundColor = cuadro.style.backgroundColor
    colorInput.value = color

}