
let tabla = "";
let lista="";
// Creo una cadena con la tabla de multiplicar
for (let i = 1; i <= 10; i++) {
    tabla += i + " x 5 = " + (i * 5) + "<br/>"
    lista+="<li>"+i+"</li>";
}

// Cambio el  párrafo para que tenga esa cadena
document.getElementById("resultado").innerHTML = tabla;
document.getElementById("lista").innerHTML = lista;

// Eventos. Primero capturo el elemento
let boton=document.getElementById("pinchar");
let otro=document.getElementById("otro");
let otromas=document.getElementById("otromas");

// Asigno a sus eventos la función que quiero usar

// Una función que ya existe
boton.onclick=saludar;

function saludar(){
    alert("Hola");
}

// Una función definida en el  momento
otro.onclick=function(){
    alert("Hola que tal");
}

// Una función flecha
otromas.onclick=(evt)=>{
    alert("con función flecha")
}