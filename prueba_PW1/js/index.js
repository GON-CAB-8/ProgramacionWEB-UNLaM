$(document).ready(function(){

    $("#universidad").change(function(){
        let universidad = $(this).val();
        switch (universidad){
                case "UNLAM":
                    $("#texto-universidad").text(universidad);
                break;
                case "UAI":
                    $("#texto-universidad").text(universidad);
                break;
                case "UNSAM":
                    $("#texto-universidad").text(universidad);
                break;
                default:
                    $("#texto-universidad").text("Universidad");
                break;
            }
    });

    $("#colores").change(function(){
        let color = $(this).val();
        $("#ventana").removeClass();
        switch (color){
            case "rojo":
                $("#ventana").addClass("rojo");
            break;
            case "verde":
                $("#ventana").addClass("verde");
            break;
            case "azul":
                $("#ventana").addClass("azul");
            break;
            default:
            break;
        }
    });

    $("input[name='color-texto']").change(function(){
        let colorTexto = $(this).val();
        $("#texto-universidad").removeClass();
        switch(colorTexto){
            case "1":
                $("#texto-universidad").addClass("blanco");
            break;

            case "2":
                $("#texto-universidad").addClass("gris");
            break;

            case "3":
                $("#texto-universidad").addClass("amarillo");
            break;

            default:
            break;
        }
    })
})