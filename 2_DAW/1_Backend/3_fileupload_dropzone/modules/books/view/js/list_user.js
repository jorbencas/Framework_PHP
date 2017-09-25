function load_users() {
    var jqxhr = $.get("modules/books/controller/controller_books.class.php?load=true", function (data) {
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

    //arreglar ruta IMATGE!!!!!

    var cad = data.user.avatar;
    //var cad = cad.toLowerCase();
    var img = document.createElement("div");
    var html = '<img src="' + cad + '" height="75" width="75"> ';
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
    content.appendChild(div_user);
    content.appendChild(img);
}
