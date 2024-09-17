let caja=document.getElementById("test");

caja.onclick=function(evt){
    console.log("Has pinchado");
    console.log(evt)
}
caja.onmousedown=function(evt){
    console.log("Musedown");
    console.log(evt)
}
caja.onmouseup=function(evt){
    console.log("MouseUp")
    console.log(evt)
}

caja.onmousemove=function(evt){
    console.log(evt.offsetX,evt.offsetY);
}