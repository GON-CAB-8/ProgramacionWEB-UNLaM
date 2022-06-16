const form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validar();
});

function validar(){
    let error = false;
    let mensajesError = "";
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let provincia = document.getElementById("provincia").value;
    let opciones = document.getElementsByName("sexo");
    let seleccionado = false;
    let condiciones = document.getElementById("condiciones");

    if(nombre.length == 0){
        error = true;
        mensajesError += "<p>Nombre obligatorio waton</p>"
    }

    if(apellido.length == 0){
        error = true;
        mensajesError += "<p>Apellido obligatorio waton</p>"
    }

    if(provincia == 0){
        error = true;
        mensajesError += "<p>Seleccione una provincia waton</p>"
    }

    for(i in opciones){
        if(opciones[i].checked){
            seleccionado = true;
        }
    }

    if(!seleccionado){
        error = true;
        mensajesError += "<p>Seleccione un sexo 🍆😈</p>"
    }

    if(!condiciones.checked){
        error=true;
        mensajesError += "<p>Acepta lo termino</p>"
    }

    if(error){
        document.getElementById("mensaje").innerHTML = mensajesError;
    } else {
        form.submit();
    }
}