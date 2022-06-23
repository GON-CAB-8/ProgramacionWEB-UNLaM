$(document).ready(function(){
    $("h1").addClass("rojo");
    $(".clase").addClass("azul");
    $("#texto").hide();
    $("#nombre").keyup(function(){
        console.log($(this).val()); // o $(this)
    });
    $("input[name='lenguaje']").change(function(){
        console.log($("input[name='lenguaje']:checked").val())
    });
})
