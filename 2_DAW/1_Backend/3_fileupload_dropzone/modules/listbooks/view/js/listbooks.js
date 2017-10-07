/*
function load_users() {
    var jqxhr = $.get("modules/listbooks/controller/controller_books.class.php?load=true", function (data) {
        var json = JSON.parse(data);
        console.log(json);
        pintar_user(json);
        //alert( "success" );
    }).done(function () {
        //alert( "second success" );
    }).fail(function () {
        //alert( "error" );
        ///404
    }).always(function () {
        //alert( "finished" );
    });
    jqxhr.always(function () {
        //alert( "second finished" );
    });
}
*/
var limite;
function load_users(limit) {
    //console.log(limit);
    if(limit===undefined){
        limit=3;
     }
   console.log(limit);
    var jqxhr = $.get("modules/listbooks/controller/controller_books.class.php?load="+ limit, function (data) {
        //console.log(data);
        async: false;
    }).done(function (data) {
        var json = JSON.parse(data);
        limite = limit;
        //console.log(limite);
        limite= parseInt(limite);
        pintar_user(json);
    }).fail(function () {
        //alert( "error" );
        ///404
    }).always(function () {
        //alert( "finished" );
    });
    jqxhr.always(function () {
        //alert( "second finished" );
    });
}

$(document).ready(function () {
    console.log("Hola Mundo");
    load_users();
    load_scroll();
});

function pintar_user(data) {
     //alert(data.user.avatar);
     var content = document.getElementById("content");
     data.forEach(function(book) {
        var liEl = document.createElement("li");
        var sp = document.createElement("br");
        var t = document.createTextNode( book.idbook + " " + book.isbn + " " +  book.Titulo + " " + book.edicion+ " "); // Create a text node
        liEl.appendChild(t);
       
        var btn = document.createElement("button");
        var tb = document.createTextNode("Detalles");
        btn.appendChild(tb); 

        content.appendChild(liEl);
        liEl.appendChild(btn);

        btn.addEventListener("click", function() {
            console.log("Hola");
            var jqxhr =  $.get("modules/listbooks/controller/controller_books.class.php?loaddetails=true&idbook="+ book.idbook, function (data, status) {
                console.log( "Pepe" + data);    
                var json = JSON.parse(data);
                   // console.log(json);
                    window.location.href = json;
                   // alert( "success" );
                }).done(function () {
                    //alert( "second success" );
                }).fail(function () {
                    //alert( "error" );
                    ///404
                }).always(function () {
                    //alert( "finished" );
                });
                jqxhr.always(function () {
                    //alert( "second finished" );
                });
        });
    });
}

function load_scroll(){
    $(window).scroll(function() { //detect page scroll
        if($(window).scrollTop() + $(window).height()+1 > $(document).height()){  //user scrolled to bottom of the page?
        
        clearTimeout($.data(this, 'scrollTimer'));
      
        $.data(this, 'scrollTimer', setTimeout(function() {
             
         }, 0));
         var myNode = document.getElementById("content");
         while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);
          }
            load_users(limite+3);
        }
    });
}