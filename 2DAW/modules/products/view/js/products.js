 console.log('llore');//Crear un plugin




jQuery.fn.fill_or_clean = function () {
    this.each(function () {

        if ($("#cerveza").attr("cerveza") == "") {
            $("#cerveza").attr("value", "Introduce name");
            $("#cerveza").focus(function () {
                if ($("#cerveza").attr("value") == "Introduce name") {
                    $("#cerveza").attr("value", "");
                }
            });
        }


        $("#cerveza").blur(function () { //Onblur se activa cuando el usuario retira el foco
            if ($("#cerveza").attr("value") == "") {
                $("#cerveza").attr("value", "Introduce name");
            }
        });

        if ($("#date_reception").attr("value") == "") {
            $("#date_reception").attr("value", "Introduce a date ");
            $("#date_reception").focus(function () {
                if ($("#date_reception").attr("value") == "Introduce a date ") {
                    $("#date_reception").attr("value", "");
                }
            });
        }
        $("#title_date").blur(function () {
            if ($("#date_reception").attr("value") == "") {
                $("#date_reception").attr("value", "Introduce a date ");
            }
        });



/*








        if ($("#last_name").attr("value") == "") {
            $("#last_name").attr("value", "Introduce last name");
            $("#last_name").focus(function () {
                if ($("#last_name").attr("value") == "Introduce last name") {
                    $("#last_name").attr("value", "");
                }
            });
        }
        $("#last_name").blur(function () {
            if ($("#last_name").attr("value") == "") {
                $("#last_name").attr("value", "Introduce last name");
            }
        });
        if ($("#birth_date").attr("value") == "") {
            $("#birth_date").attr("value", "Introduce date of birth");
            $("#birth_date").focus(function () {
                if ($("#birth_date").attr("value") == "Introduce date of birth") {
                    $("#birth_date").attr("value", "");
                }
            });
        }
        $("#birth_date").blur(function () {
            if ($("#birth_date").attr("value") == "") {
                $("#birth_date").attr("value", "Introduce date of birth");
            }
        });
        if ($("#title_date").attr("value") == "") {
            $("#title_date").attr("value", "Introduce date of title");
            $("#title_date").focus(function () {
                if ($("#title_date").attr("value") == "Introduce date of title") {
                    $("#title_date").attr("value", "");
                }
            });
        }
        $("#title_date").blur(function () {
            if ($("#title_date").attr("value") == "") {
                $("#title_date").attr("value", "Introduce date of title");
            }
        });
        if ($("#address").attr("value") == "") {
            $("#address").attr("value", "Introduce address");
            $("#address").focus(function () {
                if ($("#address").attr("value") == "Introduce address") {
                    $("#address").attr("value", "");
                }
            });
        }
        $("#address").blur(function () {
            if ($("#address").attr("value") == "") {
                $("#address").attr("value", "Introduce address");
            }
        });
        if ($("#user").attr("value") == "") {
            $("#user").attr("value", "Introduce user");
            $("#user").focus(function () {
                if ($("#user").attr("value") == "Introduce user") {
                    $("#user").attr("value", "");
                }
            });
        }
        $("#user").blur(function () {
            if ($("#user").attr("value") == "") {
                $("#user").attr("value", "Introduce user");
            }
        });
        if ($("#pass").attr("value") == "") {
            $("#pass").attr("value", "Introduce pass");
            $("#pass").focus(function () {
                if ($("#pass").attr("value") == "Introduce pass") {
                    $("#pass").attr("value", "");
                }
            });
        }
        $("#pass").blur(function () {
            if ($("#pass").attr("value") == "") {
                $("#pass").attr("value", "Introduce pass");
            }
        });
        if ($("#conf_pass").attr("value") == "") {
            $("#conf_pass").attr("value", "Repeat pass");
            $("#conf_pass").focus(function () {
                if ($("#conf_pass").attr("value") == "Repeat pass") {
                    $("#conf_pass").attr("value", "");
                }
            });
        }
        $("#conf_pass").blur(function () {
            if ($("#conf_pass").attr("value") == "") {
                $("#conf_pass").attr("value", "Repeat pass");
            }
        });
        if ($("#email").attr("value") == "") {
            $("#email").attr("value", "Introduce email");
            $("#email").focus(function () {
                if ($("#email").attr("value") == "Introduce email") {
                    $("#email").attr("value", "");
                }
            });
        }
        $("#email").blur(function () {
            if ($("#email").attr("value") == "") {
                $("#email").attr("value", "Introduce email");
            }
        });
        if ($("#conf_email").attr("value") == "") {
            $("#conf_email").attr("value", "Repeat email");
            $("#conf_email").focus(function () {
                if ($("#conf_email").attr("value") == "Repeat email") {
                    $("#conf_email").attr("value", "");
                }
            });
            }
            $("#conf_email").blur(function () {
                if ($("#conf_email").attr("value") == "") {
                    $("#conf_email").attr("value", "Repeat email");
                }
            });
            */
    });//each
    return this;
};// end of fill or clean function


Dropzone.autoDiscover = false;
$(document).ready(function () {
 console.log("pepe");

  $('#SubmitProductos').click(function () {
        validate_user();
      alert("hola");
    });

        //Dropzone function //////////////////////////////////
        $("#dropzone").dropzone({
          url: "../../products/upload_products/",//index.php?module=users&function=upload_users&upload=true",
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
                    url: "../../products/delete_products/",//"index.php?module=users&function=delete_users&delete=true",
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

  })//End documentredy



    function validate_user(){
        var result = true;
        var cerveza = document.getElementById('cerveza').value;
        var pais = document.getElementById('pais').value;
        var date_reception = document.getElementById('date_reception').value;
         var estado = document.getElementById('estado').value;
         var country = document.getElementById('country').value;
         var province = document.getElementById('province').value;
         var city = document.getElementById('city').value;

                  console.log(cerveza);
       var gustos = [];
    var inputElements = document.getElementsByClassName('messageCheckbox');
           console.log(inputElements);
    var j = 0;
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            gustos[j] = inputElements[i].value;
            j++;
        }
    }




         /*
         var gustos = [];
     var inputElements = document.getElementsByClassName('messageCheckbox');
     var j = 0;
     for (var i = 0; i < inputElements.length; i++) {
         if (inputElements[i].checked) {
             gustos[j] = inputElements[i].value;
             j++;
         }
     }

*/



    //$(this).fill_or_clean(); //siempre que creemos un plugin debemos llamarlo, sino no funcionará

  //  var email_reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var date_reg = /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
    //var address_reg = /^[a-z0-9- -.]+$/i;
    //var pass_reg = /^[0-9a-zA-Z]{6,32}$/;
    var cerveza_reg = /^[A-Za-z]{4,30}$/;
    var pais_reg = /^[A-Za-z]{3,20}$/;


        $(".error").remove();
        if ($("#cerveza").val() == "" || $("#cerveza").val() == "Put a beer") {
            $("#cerveza").focus().after("<span  class='error'>Put a beer</span>");
            return false;
        } else if (!cerveza_reg.test($("#cerveza").val())) {
            $("#cerveza").focus().after("<span class='error'>Name must be 4 to 30 letters</span>");
            return false;
        }

                if ($("#pais").val() == "" || $("#pais").val() == "Introduce user") {
                    $("#pais").focus().after("<span class='error'>Introduce user</span>");
                    return false;
                } else if (!pais_reg.test($("#pais").val())) {
                    $("#pais").focus().after("<span class='error'> The country  must be 3 to 20 characters.</span>");
                    return false;
                }

                if ($("#date_reception").val() == "" || $("#date_reception").val() == "Introduce a date ") {
                   $("#date_reception").focus().after("<span class='error'>Introduce date of title</span>");
                   return false;
               } else if (!date_reg.test($("#date_reception").val())) {
                   $("#date_reception").focus().after("<span class='error'>error format date (mm/dd/yyyy)</span>");
                   return false;
               }


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
                 //console.log("Before if result");
                   if (result){
                     //console.log("Inside if result");

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

/*

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

         if ($("#title_date").val() == "" || $("#title_date").val() == "Introduce date of title") {
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
            $("#address").focus().after("<span class='error'>Address don't have  symbols.</span>");
            return false;
        }

        if ($("#user").val() == "" || $("#user").val() == "Introduce user") {
            $("#user").focus().after("<span class='error'>Introduce user</span>");
            return false;
        } else if (!usr_reg.test($("#user").val())) {
            $("#user").focus().after("<span class='error'>Last name must be 2 to 20 characters.</span>");
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
        */

        //$("#from_product").submit();
        //$("#from_product").attr("action", "index.php?module=products");

    //});
    //realizamos funciones para que sea más práctico nuestro formulario

  }//end if results



    $("#cerveza").keyup(function () {
        if ($(this).val() != "" && cerveza_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });



    $("#pais").keyup(function () {
        if ($(this).val() != "" && $(this).val() == $('#pais').val()) {
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



    /*
    $("#conf_email").keyup(function () {
        if ($(this).val() != "" && $(this).val() == $('#email').val()) {
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
        if ($(this).val() != "" && $(this).val() == $('#pass').val()) {
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
    });*/
    if (result) {
        var data = {"cerveza": cerveza, "pais":pais, "date_reception":date_reception, "gustos":gustos, "estado":estado,"country": country, "province": province, "city": city};

        var data_users_JSON = JSON.stringify(data);


        $.post("../../products/alta_users/", {alta_users_json: data_users_JSON},
          function (response) {
              console.log(typeof(response));
              if (response.success) {
                  window.location.href = response.redirect;
              }
              console.log(response);
          }, "json")
                  .fail(function (xhr, textStatus, errorThrown) {
                      //var o = JSON.parse(xhr.responseText);
                      if (xhr.responseJSON === undefined || xhr.responseJSON === null)
                          xhr.responseJSON = JSON.parse(xhr.responseText);


/*
                      if (xhr.status === 0) {
                          alert('Not connect: Verify Network.');
                      } else if (xhr.status === 404) {
                          alert('Requested page not found [404]');
                      } else if (xhr.status === 500) {
                          alert('Internal Server Error [500].');
                      } else if (textStatus === 'parsererror') {
                          alert('Requested JSON parse failed.');
                      } else if (textStatus === 'timeout') {
                          alert('Time out error.');
                      } else if (textStatus === 'abort') {
                          alert('Ajax request aborted.');
                      } else {
                          alert('Uncaught Error: ' + xhr.responseText);
                        */


                      if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                          if (xhr.responseJSON.error.cerveza !== undefined && xhr.responseJSON.error.cerveza !== null) {
                              $("#cerveza").focus().after("<span class='error'>" + xhr.responseJSON.error.cerveza + "</span>");
                                console.log(response);
                          }
                        }


                        if(xhr.responseJSON.error.country)
                            $("#error_country").focus().after("<span  class='error1'>" + xhr.responseJSON.error.country + "</span>");

                          if(xhr.responseJSON.error.province)
                            $("#error_province").focus().after("<span  class='error1'>" + xhr.responseJSON.error.province + "</span>");

                          if(xhr.responseJSON.error.city)
                            $("#error_city").focus().after("<span  class='error1'>" + xhr.responseJSON.error.city + "</span>");



                                                if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                                                    if (xhr.responseJSON.error.pais !== undefined && xhr.responseJSON.error.pais !== null) {
                                                        $("#pais").focus().after("<span class='error'>" + xhr.responseJSON.error.pais + "</span>");
                                                    }
                                                  }


                                                    if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                                                        if (xhr.responseJSON.error.gustos !== undefined && xhr.responseJSON.error.gustos !== null) {
                                                            $("#e_gustos").focus().after("<span class='error'>" + xhr.responseJSON.error.gustos+ "</span>");
                                                        }
                                                      }

                          if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                          if (xhr.responseJSON.error.date_reception !== undefined && xhr.responseJSON.error.date_reception !== null) {
                        $("#date_reception").focus().after("<span class='error'>" + xhr.responseJSON.error.date_reception+ "</span>");
                                                    }
                                                      }


                            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                          if (xhr.responseJSON.error.estado !== undefined && xhr.responseJSON.error.estado !== null) {
                        $("#estado").focus().after("<span class='error'>" + xhr.responseJSON.error.estado+ "</span>");
                      }
                      }


                      if (!(xhr.responseJSON.success1)) {
                          $("#bar").width('0%');
                          $("#percent").html('0%');
                          $('.msg').text('').removeClass('msg_ok');
                          $('.msg').text('Error Upload image!!').addClass('msg_error').animate({'right': '300px'}, 300);
                        }



                      });//Funtion xhr
                    }// end if
                  }//end validate_user


          function load_countries_v2(cad) {
              $.getJSON( cad, function(data) {
                $("#country").empty();
                $("#country").append('<option value="" selected="selected">Select country</option>');

                $.each(data, function (i, valor) {
                  $("#country").append("<option value='" + valor.sISOCode + "'>" + valor.sName + "</option>");
                });
              })
              .fail(function() {
                  alert( "error load_countries " );
              });
          }

          function load_countries_v1() {
            console.log("load");

            $.post("/../../products/load_countries_products/",{'load_country':true},

                  function( response ) {
                      console.log(response);
                      if(response === 'error'){
                          load_countries_v2("../../resources/ListOfCountryNamesByName.json");
                      }else{
                        load_countries_v2("../../products/load_countries_products/",{'load_country':true}); //oorsprong.org
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
                $.post('/../..products/load_provinces_products/',{'load_provinces':true},
                  function( response ) {
                    $("#province").empty();
          	        $("#province").append('<option value="" selected="selected">Select province</option>');

                      //alert(response);
                  var json = JSON.parse(response);
          		    var provinces=json.provinces;
          		    alert(provinces);
          		    //console.log(provinces);

          		    //alert(provinces[0].id);
          		    //alert(provinces[0].nombre);

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
              $.post("/../..products/load_cities_products/", datos, function (response) {
          	    //alert(response);
                  var json = JSON.parse(response);
          		var cities=json.cities;
          		//alert(poblaciones);
          		//console.log(poblaciones);
          		//alert(poblaciones[0].poblacion);

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
