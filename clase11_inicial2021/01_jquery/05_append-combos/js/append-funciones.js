$(document).ready(function(){
    $("#agregar").click(function(){
        let universidad = $("#universidad").val();

        $("#lista").append("<li>" + universidad + "</li>");
        //`<li>${universidad}</li>`
    });

    $("#vaciar").click(function(){
        $("#lista").empty();
    });
})