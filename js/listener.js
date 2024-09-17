let caja=document.getElementById("test");
let nombre=document.getElementById("nombre");

// Esta es la manera moderna de añadir eventos
// nombre del evento y función que enlazamos
caja.addEventListener("click",mostrar);
nombre.addEventListener("keydown",tecla);

caja.addEventListener("click",function(){
    console.log("Esto se ejecuta también");
});

caja.addEventListener("click",(evt)=>{
    console.log("Y con flecha");
});
function mostrar(evt){
    console.log(evt);
}
function tecla(evt){
    console.log(evt.key);
}