const opciones = document.getElementById("opciones");

opciones.addEventListener("change",()=>{
    document.getElementById("texto2").style.display="none";
    document.getElementById("texto1").style.display="none";
    if(opciones.value == 1) {
        document.getElementById("texto1").style.display="block";
    } else if(opciones.value == 2){
        document.getElementById("texto2").style.display="block";
    }
});