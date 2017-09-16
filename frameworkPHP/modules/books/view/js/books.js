//Crear un plugin

jQuery.fn.fill_or_clean = function () {
    this.each(function () {
        if ($("#ISBN").attr("value") == "") {
            $("#ISBN").attr("value", "Introduce ISBN");
            $("#ISBN").focus(function () {
                if ($("#ISBN").attr("value") == "Introduce ISBN") {
                    $("#ISBN").attr("value", "");
                }
            });
        }
        $("#ISBN").blur(function () {
            if ($("#ISBN").attr("value") == "") {
                $("#ISBN").attr("value", "Introduce ISBN");
            }
        });

       if ($("#Titulo").attr("value") == "") {
            $("#Titulo").attr("value", "Introduce Titulo");
            $("#Titulo").focus(function () {
                if ($("#Titulo").attr("value") == "Introduce Titulo") {
                    $("#Titulo").attr("value", "");
                }
            });
        }
        $("#Titulo").blur(function () {
            if ($("#Titulo").attr("value") == "") {
                $("#Titulo").attr("value", "Introduce Titulo");
            }
        });
        if ($("#autor").attr("value") == "") {
            $("#autor").attr("value", "Introduce autor");
            $("#autor").focus(function () {
                if ($("#autor").attr("value") == "Introduce autor") {
                    $("#autor").attr("value", "");
                }
            });
        }
        $("#autor").blur(function () {
            if ($("#autor").attr("value") == "") {
                $("#autor").attr("value", "Introduce autor");
            }
        });
    });//each
    return this;
};//function

$(document).ready(function () {
  console.log('Hola Mundo');
    $(this).fill_or_clean(); //siempre que creemos un plugin debemos llamarlo, sino no funcionará
    var  num_reg = /"[0-9]{13}";
    var string_reg = /^[A-Z]{1}+[a-z]{23}$/;

    $("#SubmitBooks").click(function () {
        $(".error").remove();
        if ($("#ISBN").val() == "" || $("#ISBN").val() == "Introduce ISBN") {
            $("#ISBN").focus().after("<span class='error'>Introduce ISBN</span>");
            return false;
        } else if (!num_reg.test($("#ISBN").val())) {
            $("#ISBN").focus().after("<span class='error'>ISBN must be 13 numbers</span>");
            return false;
        }

        else if ($("#Titulo").val() == "" || $("#Titulo").val() == "Introduce Titulo") {
            $("#Titulo").focus().after("<span class='error'>Introduce Titulo</span>");
            return false;
        } else if (!string_reg.test($("#Titulo").val())) {
            $("#Titulo").focus().after("<span class='error'>Titulo must be 2 to 30 letters</span>");
            return false;
        }

        else if ($("#autor").val() == "" || $("#autor").val() == "Introduce autor") {
            $("#autor").focus().after("<span class='error'>Introduce autor</span>");
            return false;
        } else if (!string_reg.test($("#autor").val())) {
            $("#autor").focus().after("<span class='error'>Tautor must be 2 to 30 letters</span>");
            return false;
        }

        $("#form_books").submit();
        $("#form_books").attr("action", "index.php?module=books");

    });

    //realizamos funciones para que sea más práctico nuestro formulario
    $("#Titulo, #autor").keyup(function () {
        if ($(this).val() != "" && string_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#ISBN").keyup(function () {
        if ($(this).val() != "" && num_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });
});
