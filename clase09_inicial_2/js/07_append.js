const boton = document.getElementById("agregar");

boton.addEventListener("click",()=>{
    let texto = document.getElementById("item").value;

    let item = document.createElement("li");

    let contenido = document.createTextNode(texto);

    document.getElementById("lenguajes").appendChild(item);

    item.appendChild(contenido);
});