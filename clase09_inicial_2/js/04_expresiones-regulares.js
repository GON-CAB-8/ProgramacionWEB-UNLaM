let regexNumero = /^[0-9]+$/;
let regexLetra = /^[a-zA-Z]+$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

const form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validar();
});

function validar(){
    let error = false;
    let mensajesError = "";
    let numero = document.getElementById("numero").value;
    if(!regexNumero.test(numero)){
        error = true;
        mensajesError += "<p>El campo tiene que ser numerico</p>"
    }

    if(error){
        document.getElementById("mensaje").innerHTML = mensajesError;
    } else {
        form.submit();
    }
}