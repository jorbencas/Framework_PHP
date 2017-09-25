//Crear un plugin

jQuery.fn.fill_or_clean = function() {
    this.each(function () {

        $("#name").attr("value", "Introduce name");
        $("#name").focus(function () {
            if ($("#name").attr("value") == "Introduce name") {
                $("#name").attr("value", "");
            }
        });
        $("#name").blur(function () { //Onblur se activa cuando el usuario retira el foco
            if ($("#name").attr("value") == "") {
                $("#name").attr("value", "Introduce name");
            }
        });

        $("#last_name").attr("value", "Introduce last name");
        $("#last_name").focus(function () {
            if ($("#last_name").attr("value") == "Introduce last name") {
                $("#last_name").attr("value", "");
            }
        });
        $("#last_name").blur(function () {
            if ($("#last_name").attr("value") == "") {
                $("#last_name").attr("value", "Introduce last name");
            }
        });

        $("#birth_date").attr("value", "Introduce date of birth");
        $("#birth_date").focus(function () {
            if ($("#birth_date").attr("value") == "Introduce date of birth") {
                $("#birth_date").attr("value", "");
            }
        });
        $("#birth_date").blur(function () {
            if ($("#birth_date").attr("value") == "") {
                $("#birth_date").attr("value", "Introduce date of birth");
            }
        });

        $("#title_date").attr("value", "Introduce date of title");
        $("#title_date").focus(function () {
            if ($("#title_date").attr("value") == "Introduce date of title") {
                $("#title_date").attr("value", "");
            }
        });
        $("#title_date").blur(function () {
            if ($("#title_date").attr("value") == "") {
                $("#title_date").attr("value", "Introduce date of title");
            }
        });

        $("#address").attr("value", "Introduce date of title");
        $("#address").focus(function () {
            if ($("#address").attr("value") == "Introduce date of title") {
                $("#address").attr("value", "");
            }
        });
        $("#address").blur(function () {
            if ($("#address").attr("value") == "") {
                $("#address").attr("value", "Introduce date of title");
            }
        });

        $("#user").attr("value", "Introduce date of title");
        $("#user").focus(function () {
            if ($("#user").attr("value") == "Introduce user") {
                $("#user").attr("value", "");
            }
        });
        $("#user").blur(function () {
            if ($("#user").attr("value") == "") {
                $("#user").attr("value", "Introduce user");
            }
        });

        $("#pass").attr("value", "Introduce pass");
        $("#pass").focus(function () {
            if ($("#pass").attr("value") == "Introduce pass") {
                $("#pass").attr("value", "");
            }
        });
        $("#pass").blur(function () {
            if ($("#pass").attr("value") == "") {
                $("#pass").attr("value", "Introduce pass");
            }
        });

        $("#conf_pass").attr("value", "Repeat pass");
        $("#conf_pass").focus(function () {
            if ($("#conf_pass").attr("value") == "Repeat pass") {
                $("#conf_pass").attr("value", "");
            }
        });
        $("#conf_pass").blur(function () {
            if ($("#conf_pass").attr("value") == "") {
                $("#conf_pass").attr("value", "Repeat pass");
            }
        });

        $("#email").attr("value", "Introduce email");
        $("#email").focus(function () {
            if ($("#email").attr("value") == "Introduce email") {
                $("#email").attr("value", "");
            }
        });
        $("#email").blur(function () {
            if ($("#email").attr("value") == "") {
                $("#email").attr("value", "Introduce email");
            }
        });

        $("#conf_email").attr("value", "Repeat email");
        $("#conf_email").focus(function () {
            if ($("#conf_email").attr("value") == "Repeat email") {
                $("#conf_email").attr("value", "");
            }
        });
        $("#conf_email").blur(function () {
            if ($("#conf_email").attr("value") == "") {
                $("#conf_email").attr("value", "Repeat email");
            }
        });

    });//each
    return this;

};//function

$(document).ready(function () {

    //$(this).fill_or_clean(); //siempre que creemos un plugin debemos llamarlo, sino no funcionará

    var email_reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var date_reg = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
    var address_reg = /^[a-z0-9- ]+$/i;
    var pass_reg = /^[0-9a-zA-Z]{6,32}$/;
    var string_reg = /^\D{2,30}$/;
    var usr_reg = /^[0-9a-zA-Z]{2,20}$/;

    $("#submit_user").click(function () {
        $(".error").remove();
        if ($("#name").val() == "" || $("#name").val() == "Introduce name") {
            $("#name").focus().after("<span class='error'>Introduce name</span>");
            return false;
        } else if (!string_reg.test($("#name").val())) {
            $("#name").focus().after("<span class='error'>Name must be 2 to 20 letters</span>");
            return false;
        }

        else if ($("#last_name").val() == "" || $("#last_name").val() == "Introduce last name") {
            $("#last_name").focus().after("<span class='error'>Introduce last name</span>");
            return false;
        } else if (!string_reg.test($("#last_name").val())) {
            $("#last_name").focus().after("<span class='error'>Last name must be 2 to 30 letters</span>");
            return false;
        }

        else if ($("#birth_date").val() == "" || $("#birth_date").val() == "Introduce date of birth") {
            $("#birth_date").focus().after("<span class='error'>Introduce date of birth</span>");
            return false;
        } else if (!date_reg.test($("#birth_date").val())) {
            $("#birth_date").focus().after("<span class='error'>error format date (mm/dd/yyyy)</span>");
            return false;
        }

        else if ($("#title_date").val() == "" || $("#title_date").val() == "Introduce date of title") {
            $("#title_date").focus().after("<span class='error'>Introduce date of title</span>");
            return false;
        } else if (!date_reg.test($("#title_date").val())) {
            $("#title_date").focus().after("<span class='error'>error format date (mm/dd/yyyy)</span>");
            return false;
        }

        if ($("#address").val() == "" || $("#address").val() == "Introduce address") {
            $("#address").focus().after("<span class='error'>Introduce address</span>");
            return false;
        } else if (!address_reg.test($("#address").val())) {
            $("#address").focus().after("<span class='error'>Address don't have points or symbols.</span>");
            return false;
        }

        if ($("#user").val() == "" || $("#user").val() == "Introduce user") {
            $("#user").focus().after("<span class='error'>Introduce user</span>");
            return false;
        } else if (!usr_reg.test($("#user").val())) {
            $("#user").focus().after("<span class='error'>Last name must be 2 to 30 characters.</span>");
            return false;
        }

        if ($("#pass").val() == "" || $("#pass").val() == "Introduce pass") {
            $("#pass").focus().after("<span class='error'>Introduce pass</span>");
            return false;
        } else if (!pass_reg.test($("#pass").val())) {
            $("#pass").focus().after("<span class='error'>Last name must be 6 to 32 characters.</span>");
            return false;
        }

        if ($("#conf_pass").val() == "" || $("#conf_pass").val() == "Repeat pass") {
            $("#conf_pass").focus().after("<span class='error'>Repeat pass</span>");
            return false;
        } else if ($("#pass").val() != $("#conf_pass").val()) {
            $("#conf_pass").focus().after("<span class='error'>Pass doesn't match.</span>");
            return false;
        }

        if ($("#email").val() == "" || $("#email").val() == "Introduce email") {
            $("#email").focus().after("<span class='error'>Introduce email</span>");
            return false;
        } else if (!email_reg.test($("#email").val())) {
            $("#email").focus().after("<span class='error'>Error format email (example@example.com).</span>");
            return false;
        }

        if ($("#conf_email").val() == "" || $("#conf_email").val() == "Repeat email") {
            $("#conf_email").focus().after("<span class='error'>Repeat email</span>");
            return false;
        } else if ($("#email").val() != $("#conf_email").val()) {
            $("#conf_email").focus().after("<span class='error'>Email doesn't match.</span>");
            return false;
        }
        
        $("#form_user").submit();
        $("#form_user").attr("action","index.php?page=controller_users");

    });

    //realizamos funciones para que sea más práctico nuestro formulario
    $("#name, #last_name").keyup(function () {
        if ($(this).val() != "" && string_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });
    
    $("#conf_email").keyup(function () {
        if ($(this).val() != "" && $(this).val() != $('#email').val()) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#user").keyup(function () {
        if ($(this).val() != "" && usr_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#conf_pass").keyup(function () {
        if ($(this).val() != "" && $(this).val() != $('#pass').val()) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#pass").keyup(function () {
        if ($(this).val() != "" && pass_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#title_date, #birth_date").keyup(function () {
        if ($(this).val() != "" && date_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#address").keyup(function () {
        if ($(this).val() != "" && address_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#email").keyup(function () {
        if ($(this).val() != "" && email_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });


});
