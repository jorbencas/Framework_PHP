

function load_products() {
    var jqxhr = $.post("../../products/load_products/",{'load':true}, function (data) {
        var json = JSON.parse(data);
        pintar_products(json);
    }).done(function () {
        //alert( "second success" );
    }).fail(function () {
        //alert( "error" );
    }).always(function () {
        //alert( "finished" );
    });
    jqxhr.always(function () {
        //alert( "second finished" );
    });
}//end load_products

$(document).ready(function () {
    load_products();
console.log("peperoni");

});

function pintar_products(data) {

    var content = document.getElementById("content");
    //var div_pro = document.createElement("div");
    var parrafo = document.createElement("p");

    var msje = document.createElement("div");
    msje.innerHTML = "msje = ";
    msje.innerHTML += data.msje;

    var cerveza = document.createElement("div");
    cerveza.innerHTML = "cerveza = ";
    cerveza.innerHTML += data.user.cerveza;

    var pais = document.createElement("div");
    pais.innerHTML = "pais = ";
    pais.innerHTML += data.user.pais;

    var estado = document.createElement("div");
    estado.innerHTML = "estado = ";
    estado.innerHTML += data.user.estado;


    var date_reception = document.createElement("div");
    date_reception.innerHTML = "date_reception = ";
    date_reception.innerHTML += data.user.date_reception;

    var gustos = document.createElement("div");
    gustos.innerHTML = "gustos = ";
    for(var i =0;i < data.user.gustos.length;i++){
     gustos.innerHTML += " , "+data.user.gustos[i];
    }


    var country = document.createElement("div");
    country.innerHTML = "country = ";
    country.innerHTML += data.user.country;

    var province = document.createElement("div");
    province.innerHTML = "province = ";
    province.innerHTML += data.user.province;

    var city = document.createElement("div");
    city.innerHTML = "city = ";
    city.innerHTML += data.user.city;


/*
    for(var i =0;i < data.user.gustos.length;i++){
      interests.innerHTML += " - "+data.user.gustos[i];
      }
/*
    var pass = document.createElement("div");
    pass.innerHTML = "pass = ";
    pass.innerHTML += data.user.pass;

    var email = document.createElement("div");
    email.innerHTML = "email = ";
    email.innerHTML += data.user.email;

    var en_lvl = document.createElement("div");
    en_lvl.innerHTML = "en_lvl = ";
    en_lvl.innerHTML += data.user.en_lvl;

    var interests = document.createElement("div");
    interests.innerHTML = "interests = ";
    for(var i =0;i < data.user.interests.length;i++){
    interests.innerHTML += " - "+data.user.interests[i];


        var gustos = document.createElement("div");
        gustos.innerHTML = "gustos = ";
        for(var i =0;i < data.user.gustos.length;i++){
         gustos.innerHTML += " - "+data.user.gustos[i];
        }



    }
*/
    //arreglar ruta IMATGE!!!!!

    var cad = data.user.avatar;

    //var cad = cad.toLowerCase();
    var img = document.createElement("div");
    var html = '<img src="../../' + cad + '" height="75" width="75"> ';
    img.innerHTML = html;
    //alert(html);
    content.appendChild(parrafo);
    content.appendChild(msje);
    content.appendChild(cerveza);
    content.appendChild(pais);
    content.appendChild(estado);
    content.appendChild(date_reception);
    content.appendChild(gustos);
    parrafo.appendChild(country);
    parrafo.appendChild(province);
    parrafo.appendChild(city);
    //parrafo.appendChild(user);
    //parrafo.appendChild(pass);
    //parrafo.appendChild(email);
    //parrafo.appendChild(interests);
    //content.appendChild(div_user);
    content.appendChild(img);
}//end pintar data
