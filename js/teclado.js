let caja = document.getElementById("nombre");

// Se activa al pulsar la tecla
caja.onkeydown = function (evt) {
    console.log(evt);
    // No permite la pulsación de la letra 'A'
    if (evt.key == "a") {
        return false; // Cancela el evento, o sea que se carga la pulsación de la tecla
    }
}

// Al levantar la tecla
caja.onkeyup = function (evt) {
    console.log(evt);
}


// Cuando el elemento tiene el foco
caja.onfocus=function(evt){
    console.log("Cogemos el foco");
    this.style.backgroundColor="Yellow";
}

// Cuando el elemento pierde el foco
caja.onblur=function(evt){
    console.log("Perdemos el foco");
    this.style.backgroundColor="White";
}

// Cuando cambia el valor y salimos del elemento
caja.onchange=function(evt){
    console.log(evt);
}

// Cuando cambia el valor sin salir del elemento
caja.oninput=function(evt){
    console.log(evt);
}
