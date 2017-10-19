function load_users() {
    var jqxhr = $.post("../../listbooks/load_details1/", {'loaddetails1':true}, function (data) {
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
});

function pintar_user(data) {
    //alert(data.user.avatar);
    var content = document.getElementById("content");
    var div_user = document.createElement("div");
    var parrafo = document.createElement("p");

    var isbn = document.createElement("div");
    isbn.innerHTML = "isbn = ";
    isbn.innerHTML += data[0].isbn;

    var Titulo = document.createElement("div");
    Titulo.innerHTML = "Titulo = ";
    Titulo.innerHTML += data[0].Titulo;

    var Autores = document.createElement("div");
    Autores.innerHTML = "Autores = ";
    Autores.innerHTML += data[0].Autores;

    var date_reception = document.createElement("div");
    date_reception.innerHTML = "date_reception = ";
    date_reception.innerHTML += data[0].date_reception;

    var edicion = document.createElement("div");
    edicion.innerHTML = "edicion = ";
    edicion.innerHTML += data[0].edicion;

    var vol = document.createElement("div");
    vol.innerHTML = "vol = ";
    vol.innerHTML += data[0].vol;

    var Drama = document.createElement("div");
    Drama.innerHTML = "gustos = ";
    Drama.innerHTML += data[0].Drama;

    var Comedia = document.createElement("div");
    Comedia.innerHTML = "gustos = ";
    Comedia.innerHTML += data[0].Comedia;

    var Thriller = document.createElement("div");
    Thriller.innerHTML = "gustos = ";
    Thriller.innerHTML += data[0].Thriller;

    var Aventura = document.createElement("div");
    Aventura.innerHTML = "gustos = ";
    Aventura.innerHTML += data[0].Aventura;

    var country = document.createElement("div");
    country.innerHTML = "country = ";
    country.innerHTML += data[0].country;

    var province = document.createElement("div");
    province.innerHTML = "province = ";
    province.innerHTML += data[0].provincie;

    var city = document.createElement("div");
    city.innerHTML = "city = ";
    city.innerHTML += data[0].city;

    //arreglar ruta IMATGE!!!!!

    var cad = data[0].avatar;
    //var cad = cad.toLowerCase();
    var img = document.createElement("div");
    var html = '<img src="../../' + cad + '" height="75" width="75"> ';
    img.innerHTML = html;
    //alert(html);

    div_user.appendChild(parrafo);
    parrafo.appendChild(isbn);
    parrafo.appendChild(Titulo);
    parrafo.appendChild(Autores);
    parrafo.appendChild(date_reception);
    parrafo.appendChild(edicion);
    parrafo.appendChild(vol);
    parrafo.appendChild(Drama);
    parrafo.appendChild(Comedia);
    parrafo.appendChild(Aventura);
    parrafo.appendChild(Thriller);
    parrafo.appendChild(country);
    parrafo.appendChild(province);
    parrafo.appendChild(city);
    content.appendChild(div_user);
    content.appendChild(img);
}
