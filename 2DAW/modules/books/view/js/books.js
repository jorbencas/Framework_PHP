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
        alert("hola");
    });

    //Control de seguridad para evitar que al volver atrás de la pantalla results a create, no nos imprima los datos
   // var amig =amigable_js("?module=books&function=load_data_books/");
    $.post("../../books/load_data_books/", {'load_data':true},
            function (response) {
                //alert(response.user);
                if (response.user === "") {
                     $("#isbn").val('');
                     $("#Titulo").val('');
                     $("#Autores").val('');
                     $("#date_reception").val('');
                     $("#gustos").val('');
                     $("#edicion").val('Select level');
                     $('#country').val('Select country');
                     $('#province').val('Select province');
                     $('#city').val('Select city');
                     var inputElements = document.getElementsByClassName('messageCheckbox');
                     for (var i = 0; i < inputElements.length; i++) {
                         if (inputElements[i].checked) {
                             inputElements[i].checked = false;
                         }
                     }
                    //siempre que creemos un plugin debemos llamarlo, sino no funcionará
    $(this).fill_or_clean();
                } else {
                    $("#isbn").val( response.user.isbn);
                    $("#Titulo").val( response.user.Titulo);
                    $("#Autores").val( response.user.Autores);
                    $("#date_reception").val( response.user.date_reception);
                    $("#edicion").val( response.user.edicion);
                    $('#country').val(response.user.country);
                    $('#province').val(response.user.province);
                    $('#city').val(response.user.city);
                    var gustos = response.user.gustos;
                    var inputElements = document.getElementsByClassName('messageCheckbox');
                    for (var i = 0; i < gustos.length; i++) {
                        for (var j = 0; j < inputElements.length; j++) {
                            if(gustos[i] ===inputElements[j] )
                                inputElements[j].checked = true;
                        }
                    }
                }//end else
            }, "json");

    //Dropzone function //////////////////////////////////
    $("#dropzone").dropzone({
        url: "../../books/upload_books/",//index.php?module=users&function=upload_users&upload=true",
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
                 url: "../../books/delete_books/",
                   data: {"filename":name,"delete":true},
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
                              //alert("Imagen eliminada: " + name);
                          }else {
                              return false;
                            }
                        }else { //json.res == false, elimino la imagen también
                          var element;
                          if ((element = file.previewElement) != null) {
                              element.parentNode.removeChild(file.previewElement);
                          } else {
                            return false;
                            }
                        }
                      }
                    });
  }
});//End dropzone

     //Dependent combos //////////////////////////////////
     load_countries_v1();

       $("#province").empty();
       $("#province").append('<option value="" selected="selected">Select province</option>');
       $("#province").prop('disabled', true);
       $("#city").empty();
       $("#city").append('<option value="" selected="selected">Select city</option>');
       $("#city").prop('disabled', true);

       $("#country").change(function() {
   		var country = $(this).val();
   		var province = $("#province");
   		var city = $("#city");

   		if(country !== 'ES'){
   	         province.prop('disabled', true);
   	         city.prop('disabled', true);
   	         $("#province").empty();
   		     $("#city").empty();
   		}else{
   	         province.prop('disabled', false);
   	         city.prop('disabled', false);
   	         load_provinces_v1();
   		}//fi else
   	});

   	$("#province").change(function() {
   		var prov = $(this).val();
   		if(prov > 0){
   			load_cities_v1(prov);
   		}else{
   			$("#city").prop('disabled', false);
   		}
   	});


    //Utilizamos las expresiones regulares para las funciones de  fadeout
    var num_reg = /^[0-9]{8,13}$/;
    var date_reg = /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
    var string_reg = /^[A-Za-z]{2,30}$/;

    // //realizamos funciones para que sea más práctico nuestro formulario
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


});//end of ready

function validate_user() {
    var result = true;

    var isbn = document.getElementById('isbn').value;
    var Titulo = document.getElementById('Titulo').value;
    var Autores = document.getElementById('Autores').value;
    var date_reception = document.getElementById('date_reception').value;
    var vol = $('input[name="vol"]:checked').val(); 
    var edicion = document.getElementById('edicion').value;
    var country = document.getElementById('country').value;
    var province = document.getElementById('province').value;
    var city = document.getElementById('city').value;
    var gustos = [];
    var inputElements = document.getElementsByClassName('messageCheckbox');
    var j = 0;
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            gustos[j] = inputElements[i].value;
            j++;
        }
    }

    
    console.log("Country: "+ country + "Provincie: "+ province + "City: "+city);

//     //Utilizamos las expresiones regulares para la validación de errores JS
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
    } else if ($("#Titulo").val() == "" || $("#Titulo").val() == "Introduce Titulo") {
        $("#Titulo").focus().after("<span class='error'>Introduce Titulo</span>");
        result = false;
        return false;
    } else if (!string_reg.test($("#Titulo").val())) {
        $("#Titulo").focus().after("<span class='error'>Titulo must be 2 to 30 letters</span>");
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
    }else if ($("#date_reception").val() == "" || $("#date_reception").val() == "Introduce date_reception") {
        $("#date_reception").focus().after("<span class='error'>Introduce date of birth</span>");
        result = false;
        return false;
    } else if (!date_reg.test($("#date_reception").val())) {
        $("#date_reception").focus().after("<span class='error'>error format date (mm/dd/yyyy)</span>");
        result = false;
        return false;
    }

    if ($("#edicion").val() === "" || $("#edicion").val() === "Select level" || $("#edicion").val() === null) {
        $("#edicion").focus().after("<span class='error'>Select one edition</span>");
        return false;
    }
   /* if (! ($("#vol").val() === 1 ||  $("#vol").val() === 2 || $("#vol").val() === 3 || $("#vol").val() === 4)) {
        $("#vol").focus().after("<span class='error'>Select one volumen</span>");
        return false;
    }*/

    if ($("#country").val() === "" || $("#country").val() === "Select country" || $("#country").val() === null) {
        $("#country").focus().after("<span class='error'>Select one country</span>");
        return false;
    }

    if ($("#province").val() === "" || $("#province").val() === "Select province") {
        $("#province").focus().after("<span class='error'>Select one province</span>");
        return false;
    }

    if ($("#city").val() === "" || $("#city").val() === "Select city") {
        $("#city").focus().after("<span class='error'>Select one city</span>");
        return false;
    }


    if (result) {

      if (province === null) {
           province = 'default_province';
       }else if (province.length === 0) {
           province = 'default_province';
       }else if (province === 'Select province') {
           return 'default_province';
       }

       if (city === null) {
           city = 'default_city';
       }else if (city.length === 0) {
           city = 'default_city';
       }else if (city === 'Select city') {
           return 'default_city';
       }

        var data = {"isbn": isbn, "Titulo": Titulo, "date_reception": date_reception, "Autores": Autores, "gustos": gustos, "vol": vol, "edicion": edicion, "country": country, "province": province, "city": city};
        var data_users_JSON = JSON.stringify(data);
        $.post('../../books/alta_books/', {alta_users_json: data_users_JSON},
        
        function (response) {
            console.log(response);
          console.log(typeof(response));
            if (response.success) {
              console.log("1"+response)
                window.location.href = response.redirect;
            }
        }
        , "json").fail(function(xhr, textStatus, errorThrown) {
            

           
            if (xhr.responseJSON === undefined && xhr.responseJSON === null )
                xhr.responseJSON = JSON.parse(xhr.responseText);
            
                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if (xhr.responseJSON.error.isbn !== undefined && xhr.responseJSON.error.isbn !== null){
                    $("#isbn").focus().after("<span  class='error1'>" + xhr.responseJSON.error.isbn + "</span>");
                    }
                }
            
                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if (xhr.responseJSON.error.Titulo !== undefined && xhr.responseJSON.error.Titulo !== null){
                    $("#Titulo").focus().after("<span  class='error1'>" + xhr.responseJSON.error.Titulo + "</span>");
                    }
                }
            
                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if (xhr.responseJSON.error.date_reception !== undefined && xhr.responseJSON.error.date_reception !== null){
                    $("#date_reception").focus().after("<span  class='error1'>" + xhr.responseJSON.error.date_reception + "</span>");
                    }
                }

                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if (xhr.responseJSON.error.Autores !== undefined && xhr.responseJSON.error.Autores !== null){
                    $("#Autores").focus().after("<span  class='error1'>" + xhr.responseJSON.error.Autores + "</span>");
                    }
                }
            
                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if (xhr.responseJSON.error.vol !== undefined && xhr.responseJSON.error.vol !== null){
                    $("#vol").focus().after("<span  class='error1'>" + xhr.responseJSON.error.vol + "</span>");
                    }
                }
            
                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if (xhr.responseJSON.error.gustos !== undefined && xhr.responseJSON.error.gustos !== null){
                    $("#gustos").focus().after("<span  class='error1'>" + xhr.responseJSON.error.gustos + "</span>");
                    }
                }

                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if (xhr.responseJSON.error.edicion !== undefined && xhr.responseJSON.error.edicion !== null){
                    $("#edicion").focus().after("<span  class='error1'>" + xhr.responseJSON.error.edicion + "</span>");
                    }
                }

                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if(xhr.responseJSON.error.country !== undefined && xhr.responseJSON.error.country !== null){
                    $("#error_country").focus().after("<span  class='error1'>" + xhr.responseJSON.error.country + "</span>");
                    }
                }

                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if(xhr.responseJSON.error.province !== undefined && xhr.responseJSON.error.province !== null){
                     $("#error_province").focus().after("<span  class='error1'>" + xhr.responseJSON.error.province + "</span>");
                    }
                }
            
                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if(xhr.responseJSON.error.city !== undefined && xhr.responseJSON.error.city !== null){
                    $("#error_city").focus().after("<span  class='error1'>" + xhr.responseJSON.error.city + "</span>");
                    }
                }

                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null ){
                    if (xhr.responseJSON.error.avatar !== undefined && xhr.responseJSON.error.avatar !== null){
                    $("#dropzone").focus().after("<span  class='error1'>" + xhr.responseJSON.error.avatar + "</span>");
                    }
                }

                if (xhr.responseJSON.success1) {
                    if (xhr.responseJSON.img_avatar !== "/2DAW/media/default-avatar.png") {
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
    }//end if
}//end validate books


function load_countries_v2(cad) {
    $.getJSON( cad, function(data) {
    $("#country").empty();
    $("#country").append('<option value="" selected="selected">Select country</option>');

    $.each(data, function (i, valor) {
        $("#country").append("<option value='" + valor.sISOCode + "'>" + valor.sName + "</option>");
    });
    })
    .fail(function() {
        alert( "error load_countries" );
    });
}

function load_countries_v1() {
    $.post("/../../books/load_country_books/", {'load_country':true},
        function( response ) {
            //console.log(response);
            if(response === 'error'){
                load_countries_v2("../../resources/ListOfCountryNamesByName.json");
            }else{
                console.log("Entra Ací");
                load_countries_v2("../../books/load_country_books/", {'load_country':true}); //oorsprong.org
            }
    })
    .fail(function(response) {
        load_countries_v2("../../resources/ListOfCountryNamesByName.json");
    });
 }


function load_provinces_v2() {
    $.get("../../resources/provinciasypoblaciones.xml", function (xml) {
      $("#province").empty();
      $("#province").append('<option value="" selected="selected">Select province</option>');
    
        $(xml).find("provincia").each(function () {
            var id = $(this).attr('id');
            var name = $(this).find('nombre').text();
            $("#province").append("<option value='" + id + "'>" + name + "</option>");
        });
    })
    .fail(function() {
        alert( "error load_provinces" );
    });
}
    
function load_provinces_v1() { //provinciasypoblaciones.xml - xpath
      
        $.post("/../../books/load_provinces_books/", {'load_provinces':true},
        function( response ) {
          $("#province").empty();
          $("#province").append('<option value="" selected="selected">Select province</option>');
    
            //alert(response);
        var json = JSON.parse(response);
        var provinces=json.provinces;
    
            if(provinces === 'error'){
                load_provinces_v2();
            }else{
                for (var i = 0; i < provinces.length; i++) {
                $("#province").append("<option value='" + provinces[i].id + "'>" + provinces[i].nombre + "</option>");
            }
            }
    })
    .fail(function(response) {
        load_provinces_v2();
    });
}
    
function load_cities_v2(prov) {
    $.get("../../resources/provinciasypoblaciones.xml", function (xml) {
    $("#city").empty();
      $("#city").append('<option value="" selected="selected">Select city</option>');
    
    $(xml).find('provincia[id=' + prov + ']').each(function(){
        $(this).find('localidad').each(function(){
           $("#city").append("<option value='" + $(this).text() + "'>" + $(this).text() + "</option>");
        });
        });
    })
    .fail(function() {
        alert( "error load_cities" );
    });
    }
    
    function load_cities_v1(prov) { //provinciasypoblaciones.xml - xpath
    var datos = { idPoblac : prov  };
    
    $.post("/../../books/load_cities_books/", datos, function(response) {
      alert(response);
        var json = JSON.parse(response);
    var cities=json.cities;
    
    $("#city").empty();
      $("#city").append('<option value="" selected="selected">Select city</option>');
    
        if(cities === 'error'){
            load_cities_v2(prov);
        }else{
            for (var i = 0; i < cities.length; i++) {
            $("#city").append("<option value='" + cities[i].poblacion + "'>" + cities[i].poblacion + "</option>");
        }
        }
    })
    .fail(function() {
        load_cities_v2(prov);
    });
}



function amigable_js(url){
    var host= location.hostname;
    //var SITE_PATH = 'http://' + host + '/2ndoDAW/NiponTour_FrameWork/'
     var SITE_PATH = '../../'
    
    var link = "";
    
    url = url.split("&");
    url.forEach(function(element) {
        var aux=element.replace("?","");
        var aux1= aux.split("=");
          //console.log(aux1[1]);
                link+=aux1[1]+"/";
       });
    
    return SITE_PATH + link;
    }