//Crear un plugin
jQuery.fn.fill_or_clean = function () {
    this.each(function () {
        //if ($("#isbn").val() == "") {
        if ($("#isbn").val() == "") {
            $("#isbn").val("Introduce isbn");
            $("#isbn").focus(function () {
                if ($("#isbn").val() == "Introduce isbn") {
                    $("#isbn").val('');
                }
            });
        }
        $("#isbn").blur(function () { //Onblur se activa cuando el usuario retira el foco
            if ($("#isbn").val() == "") {
                $("#isbn").val("Introduce isbn");
            }
        });

        if ($("#Titulo").val() == "") {
            $("#Titulo").val("Introduce Titulo");
            $("#Titulo").focus(function () {
                if ($("#Titulo").val() == "Introduce Titulo") {
                    $("#Titulo").val('');
                }
            });
        }
        $("#Titulo").blur(function () {
            if ($("#Titulo").val() == "") {
                $("#Titulo").val("Introduce Titulo");
            }
        });
        if ($("#Autores").val()== "") {
            $("#Autores").val("Introduce Autores");
            $("#Autores").focus(function () {
                if ($("#Autores").val() == "Introduce Autores") {
                    $("#Autores").val('');
                }
            });
        }
        $("#Autores").blur(function () {
            if ($("#Autores").val() == "") {
                $("#Autores").val("Introduce Autores");
            }
        });
        if ($("#vol").val() == "") {
            $("#vol").val( "Introduce vol");
            $("#vol").focus(function () {
                if ($("#vol").val() == "Introduce vol") {
                    $("#vol").val('');
                }
            });
        }
        $("#vol").blur(function () {
            if ($("#vol").val() == "") {
                $("#vol").val( "Introduce vol");
            }
        });
        if ($("#gustos").val() == "") {
            $("#gustos").val( "Introduce gustos");
            $("#gustos").focus(function () {
                if ($("#gustos").val() == "Introduce gustos") {
                    $("#gustos").val( "");
                }
            });
        }
        $("#gustos").blur(function () {
            if ($("#gustos").val() == "") {
                $("#gustos").val( "Introduce gustos");
            }
        });
        if ($("#edicion").val() == "") {
            $("#edicion").val( "Introduce edicion");
            $("#edicion").focus(function () {
                if ($("#edicion").val() == "Introduce edicion") {
                    $("#edicion").val( "");
                }
            });
        }
        $("#edicion").blur(function () {
            if ($("#edicion").val() == "") {
                $("#edicion").val( "Introduce edicion");
            }
        });
    });//each
    return this;
};//function

//Solution to : "Uncaught Error: Dropzone already attached."
Dropzone.autoDiscover = false;
$(document).ready(function () {
console.log("Hola Mundo");
    //Datepicker///////////////////////////
    $("#date_reception").datepicker({
        maxDate: 'today',
        dateFormat: 'mm/dd/yy',
        defaultDate: 'today',
        changeMonth: true,
        changeYear: true
    });

    //Valida users /////////////////////////
    $('#SubmitBooks').click(function () {
        validate_user();
    });

    //Control de seguridad para evitar que al volver atrás de la pantalla results a create, no nos imprima los datos
    $.get("modules/books/controller/controller_books.class.php?load_data=true",
            function (response) {
                //alert(response.user);
                if (response.user === "") {
                    // $("#isbn").val('');
                    // $("#Titulo").val('');
                    // $("#Autores").val('');
                    // $("#date_reception").val('');
                    //$("#vol").val('');
                    // $("#gustos").val('');
                    // $("#edicion").val('Select level');
                    // var inputElements = document.getElementsByClassName('messageCheckbox');
                    // for (var i = 0; i < inputElements.length; i++) {
                    //     if (inputElements[i].checked) {
                    //         inputElements[i].checked = false;
                    //     }
                    // }
                    //siempre que creemos un plugin debemos llamarlo, sino no funcionará
    $(this).fill_or_clean();
                } else {
                    $("#isbn").val( response.user.isbn);
                    $("#Titulo").val( response.user.Titulo);
                    $("#Autores").val( response.user.Autores);
                    $("#date_reception").val( response.user.date_reception);
                    $("#vol").val( response.user.vol);
                    $("#edicion").val( response.user.edicion);
                    var gustos = response.user.gustos;
                    var inputElements = document.getElementsByClassName('messageCheckbox');
                    for (var i = 0; i < gustos.length; i++) {
                        for (var j = 0; j < inputElements.length; j++) {
                            if(gustos[i] ===inputElements[j] )
                                inputElements[j].checked = true;
                        }
                    }
                }
            }, "json");

    //Dropzone function //////////////////////////////////
    $("#dropzone").dropzone({
        url: "modules/books/controller/controller_books.class.php?upload=true",
        addRemoveLinks: true,
        maxFileSize: 1000,
        dictResponseError: "Ha ocurrido un error en el server",
        acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd',
        init: function () {
            this.on("success", function (file, response) {
                //alert(response);
                $("#progress").show();
                $("#bar").width('100%');
                $("#percent").html('100%');
                $('.msg').text('').removeClass('msg_error');
                $('.msg').text('Success Upload image!!').addClass('msg_ok').animate({'right': '300px'}, 300);
            });
        },
        complete: function (file) {
            //if(file.status == "success"){
            //alert("El archivo se ha subido correctamente: " + file.name);
            //}
        },
        error: function (file) {
            //alert("Error subiendo el archivo " + file.name);
        },
        removedfile: function (file, serverFileName) {
            var name = file.name;
            $.ajax({
                type: "POST",
                url: "modules/books/controller/controller_books.class.php?delete=true",
                data: "filename=" + name,
                success: function (data) {
                    $("#progress").hide();
                    $('.msg').text('').removeClass('msg_ok');
                    $('.msg').text('').removeClass('msg_error');
                    $("#e_avatar").html("");

                    var json = JSON.parse(data);
                    if (json.res === true) {
                        var element;
                        if ((element = file.previewElement) != null) {
                            element.parentNode.removeChild(file.previewElement);
                            alert("Imagen eliminada: " + name);
                        } else {
                            false;
                        }
                    } else { //json.res == false, elimino la imagen también
                        var element;
                        if ((element = file.previewElement) != null) {
                            element.parentNode.removeChild(file.previewElement);
                        } else {
                            false;
                        }
                    }
                }
            });
        }
    });

    //Utilizamos las expresiones regulares para las funciones de  fadeout
    var num_reg = /^[0-9]{8,13}$/;
    var date_reg = /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
    var string_reg = /^[A-Za-z]{2,30}$/;

    //realizamos funciones para que sea más práctico nuestro formulario
    $("#Titulo, #Autores").keyup(function () {
        if ($(this).val() != "" && string_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#isbn").keyup(function () {
        if ($(this).val() != "" && $(this).val()) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#date_reception").keyup(function () {
        if ($(this).val() != "" && date_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });
});

function validate_user() {
    var result = true;

    var isbn = document.getElementById('isbn').value;
    var Titulo = document.getElementById('Titulo').value;
    var Autores = document.getElementById('Autores').value;
    var date_reception = document.getElementById('date_reception').value;
    var vol = document.getElementById('vol').value;
    var edicion = document.getElementById('edicion').value;
    var gustos = [];
    var inputElements = document.getElementsByClassName('messageCheckbox');
    var j = 0;
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            gustos[j] = inputElements[i].value;
            j++;
        }
    }
    console.log(vol);

    //Utilizamos las expresiones regulares para la validación de errores JS
    var num_reg = /^[0-9]{8,13}$/;
    var date_reg = /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
    var string_reg = /^[A-Za-z]{2,30}$/;

    $(".error").remove();

    if ($("#isbn").val() == "" || $("#isbn").val() == "Introduce isbn") {
        $("#isbn").focus().after("<span class='error'>Introduce isbn</span>");
        result = false;
        return false;
    } else if (!num_reg.test($("#isbn").val())) {
        $("#isbn").focus().after("<span class='error'>isbn must be 6 to 13 numbers</span>");
        result = false;
        return false;
    }

    else if ($("#Titulo").val() == "" || $("#Titulo").val() == "Introduce Titulo") {
        $("#Titulo").focus().after("<span class='error'>Introduce Titulo</span>");
        result = false;
        return false;
    } else if (!string_reg.test($("#Titulo").val())) {
        $("#Titulo").focus().after("<span class='error'>Titulo must be 2 to 30 letters</span>");
        result = false;
        return false;
    }

    else if ($("#date_reception").val() == "" || $("#date_reception").val() == "Introduce date_reception") {
        $("#date_reception").focus().after("<span class='error'>Introduce date of birth</span>");
        result = false;
        return false;
    } else if (!date_reg.test($("#date_reception").val())) {
        $("#date_reception").focus().after("<span class='error'>error format date (mm/dd/yyyy)</span>");
        result = false;
        return false;
    }

    if ($("#Autores").val() == "" || $("#Autores").val() == "Introduce Autores") {
        $("#Autores").focus().after("<span class='error'>Introduce Autores</span>");
        result = false;
        return false;
    } else if (!string_reg.test($("#Autores").val())) {
        $("#Autores").focus().after("<span class='error'>Autores don't have  symbols.</span>");
        result = false;
        return false;
    }

    //Si ha ido todo bien, se envian los datos al servidor
    //console.log(result);
    if (result) {
        var data = {"isbn": isbn, "Titulo": Titulo, "date_reception": date_reception, "Autores": Autores, "gustos": gustos, "vol": vol, "edicion": edicion};
        var data_users_JSON = JSON.stringify(data);
        //console.log(data_users_JSON);
        $.post('modules/books/controller/controller_books.class.php',
                {alta_users_json: data_users_JSON},
        function (response) {
          console.log(typeof(response));
            if (response.success) {
              console.log("1"+response);
                window.location.href = response.redirect;
            }
        }, "json").fail(function(xhr, status, error) {
            // console.log(xhr.responseText);
            // console.log(xhr.responseJSON);

            if (xhr.responseJSON.error.isbn)
                $("#isbn").focus().after("<span  class='error1'>" + xhr.responseJSON.error.isbn + "</span>");

            if (xhr.responseJSON.error.Titulo)
                $("#Titulo").focus().after("<span  class='error1'>" + xhr.responseJSON.error.Titulo + "</span>");

            if (xhr.responseJSON.error.date_reception)
                $("#date_reception").focus().after("<span  class='error1'>" + xhr.responseJSON.error.date_reception + "</span>");

            if (xhr.responseJSON.error.Autores)
                $("#Autores").focus().after("<span  class='error1'>" + xhr.responseJSON.error.Autores + "</span>");

            if (xhr.responseJSON.error.vol)
                $("#vol").focus().after("<span  class='error1'>" + xhr.responseJSON.error.vol + "</span>");

            if (xhr.responseJSON.error.gustos)
                $("#gustos").focus().after("<span  class='error1'>" + xhr.responseJSON.error.gustos + "</span>");

            if (xhr.responseJSON.error.edicion)
                $("#edicion").focus().after("<span  class='error1'>" + xhr.responseJSON.error.edicion + "</span>");

                if (xhr.responseJSON.error.avatar)
                $("#dropzone").focus().after("<span  class='error1'>" + xhr.responseJSON.error.avatar + "</span>");

            if (xhr.responseJSON.success1) {
                if (xhr.responseJSON.img_avatar !== "2_DAW/3_fileupload_dropzone/media/default-avatar.png") {
                    //$("#progress").show();
                    //$("#bar").width('100%');
                    //$("#percent").html('100%');
                    //$('.msg').text('').removeClass('msg_error');
                    //$('.msg').text('Success Upload image!!').addClass('msg_ok').animate({ 'right' : '300px' }, 300);
                }
            } else {
                $("#progress").hide();
                $('.msg').text('').removeClass('msg_ok');
                $('.msg').text('Error Upload image!!').addClass('msg_error').animate({'right': '300px'}, 300);
            }
         });
    }
}
