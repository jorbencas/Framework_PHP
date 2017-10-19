function load_users() {
    //var amig =amigable_js("?module=books&function=load_books");
   //console.log(amig);
  // var jqxhr = $.post(amig, function (data) {
    var jqxhr = $.post("../../books/load_books/", {'load':true}, function (data) {
       console.log(data);
        var json = JSON.parse(data);
        console.log(json);
        pintar_user(json);
        //alert( "success" );
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
}

$(document).ready(function () {
    load_users();
    alert("Pepe");
});

function pintar_user(data) {
    //alert(data.user.avatar);
   
    var content = document.getElementById("content");
    var div_user = document.createElement("div");
    var parrafo = document.createElement("p");

    var msje = document.createElement("div");
    msje.innerHTML = "msje = ";
    msje.innerHTML += data.msje;

    var isbn = document.createElement("div");
    isbn.innerHTML = "isbn = ";
    isbn.innerHTML += data.user.isbn;

    var Titulo = document.createElement("div");
    Titulo.innerHTML = "Titulo = ";
    Titulo.innerHTML += data.user.Titulo;

    var Autores = document.createElement("div");
    Autores.innerHTML = "Autores = ";
    Autores.innerHTML += data.user.Autores;

    var date_reception = document.createElement("div");
    date_reception.innerHTML = "date_reception = ";
    date_reception.innerHTML += data.user.date_reception;

    var edicion = document.createElement("div");
    edicion.innerHTML = "edicion = ";
    edicion.innerHTML += data.user.edicion;

    var vol = document.createElement("div");
    vol.innerHTML = "vol = ";
    vol.innerHTML += data.user.vol;

    var gustos = document.createElement("div");
    gustos.innerHTML = "gustos = ";
    gustos.innerHTML += data.user.gustos;

    var gustos = document.createElement("div");
    gustos.innerHTML = "gustos = ";
    for(var i =0;i < data.user.gustos.length;i++){
    gustos.innerHTML += " - "+data.user.gustos[i];
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

    //arreglar ruta IMATGE!!!!!

    var cad = data.user.avatar;
    //var cad = cad.toLowerCase();
    var img = document.createElement("div");
    var html = '<img src="../../' + cad + '" height="75" width="75"> ';
    img.innerHTML = html;
    //alert(html);

    div_user.appendChild(parrafo);
    parrafo.appendChild(msje);
    parrafo.appendChild(isbn);
    parrafo.appendChild(Titulo);
    parrafo.appendChild(Autores);
    parrafo.appendChild(date_reception);
    parrafo.appendChild(edicion);
    parrafo.appendChild(vol);
    parrafo.appendChild(gustos);
    parrafo.appendChild(country);
    parrafo.appendChild(province);
    parrafo.appendChild(city);
    content.appendChild(div_user);
    content.appendChild(img);

}

/*
function amigable_js(url) {
    var backurl="";
    url = url.replace("?", "");
    url = url.split("&");

    for (var i=0;i<url.length;i++) {
        var aux = url[i].split("=");
        backurl +=  "/"+aux[1];
    }
    var SITEROOT = "https://localhost/a/Server-Project"
    return SITEROOT + backurl;
}*/