// La instrucción más usada para obtener un elemento determinado del DOM
let caja=document.getElementById("nombre");
caja.style.background="red";
console.log(caja.placeholder);

// Queryselector nos busca el primer elemento que coincide con el selector css
// Busco por etiqueta (tag) textarea
let texto=document.querySelector("textarea");
console.log(texto.innerHTML);

// Busco por id
let caja2=document.querySelector("#apellido");
console.log(caja2);

// Buscando por clase
let caja3=document.querySelector(".prueba");
console.log(caja3);
caja3.value="Pepe";

// Todos los elementos que cumplen el selector css
// Devuelve un array que podemos recorrer
let textos=document.querySelectorAll("textarea");
console.log(textos);

// Obtengo todos elementos que tienen una etiqueta (tag) determinado
let cajas=document.getElementsByTagName("input");
console.log(cajas);

// Obtengo todos los elementos que son de una determinada clase
let porClase=document.getElementsByClassName("prueba");
console.log(porClase);


