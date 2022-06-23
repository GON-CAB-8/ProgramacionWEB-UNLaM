let opcionesColor=["azul","violeta","rojo"];

let opcionesPaises = ["Argentina","Jamaica","Peru"];

let opcionesUniversidades = ["UNLaM","UADE","UBA"];

$(document).ready(function(){
    $("#inicial").change(function(){
        llenarCombo($(this).val());
    })
});


function llenarCombo(valor){
    $("#secundario").empty();
    switch(valor){
        case "1":
            opcionesColor.forEach( (element,index) => {
                $("#secundario").append("<option value="+index+">"+element+"</option>")
            })
        break;

        case "2":
            opcionesPaises.forEach( (element,index) => {
                $("#secundario").append("<option value="+index+">"+element+"</option>")
            })
        break;

        case "3":
            opcionesUniversidades.forEach( (element,index) => {
                $("#secundario").append("<option value="+index+">"+element+"</option>")
            })
        break;

        default:
        break;
    }
}