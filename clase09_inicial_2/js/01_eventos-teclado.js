const campoNombre = document.getElementById("nombre");

campoNombre.addEventListener("keyup",()=>{
    let nombre = campoNombre.value;
    document.getElementById("saludo").innerHTML = nombre;
});

// campoNombre.onkeyup(()=>{
//     let nombre = campoNombre.value;
//     document.getElementById("saludo").innerHTML = nombre;
// });