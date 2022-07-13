$(document).ready(function(){
    $("input[name='fondo']").change(function(){
        // console.log($(this).val())
        $(".vista-previa").removeClass("fondo1 fondo2 fondo3");
        switch($(this).val()){
            case "1":
                $(".vista-previa").addClass("fondo1");
            break;
            case "2":
                $(".vista-previa").addClass("fondo2");
            break;
            case "3":
                $(".vista-previa").addClass("fondo3");
            break;
        }

        $("#tipografia").change(function(){
            //limpio las clases
            //si selecciono por ID puedo borrar todas las clases de una, si selecciono por clase tengo que especificar que clase borrar
            console.log($(this).val());
            $("#texto").removeClass();
            switch($(this).val()){
                case "roboto":
                    $("#texto").addClass("fuente-roboto")
                break;
                case "yanone":
                    $("#texto").addClass("fuente-yanone")
                break;
                default:
                break;
            }
        })
    });

    //.text() pisa el contenido
    //.append() agrega al final
    //.empty() vaciar el contenido
    $("#nombre").keyup(function(){
        $("#texto").text($(this).val());
    })
});