
var limite;

function load_users(limit) {
    if(limit===undefined){
        limit=3;
     }
     console.log(limit);

    var jqxhr = $.post("../../listbooks/load_listbooks/", {'limit':limit}, function (data) {
        console.log(data);
    async: false;
}).done(function (data) {
  console.log(data);
  //console.log(limit);
        var json = JSON.parse(data);
        console.log(json);
        limite = limit;
        limite= parseInt(limite);
        console.log("a");
        console.log(limite);
        pintar_user(json);
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

       // let Book = book.idbook;

        btn.addEventListener("click", function() {
            //console.log("Hola"+ Book ); 
            var jqxhr =  $.post("../../listbooks/load_datails/", {'idbook':book.idbook}, function (data) {
                console.log(data);    
                    window.location.href = data;
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
    $(window).scroll(function () {
        
        if($(window).scrollTop() + $(window).height()+2 >= $(document).height()){
        
            clearTimeout($.data(this, 'scrollTimer'));
        
            console.log("dentro")
            console.log(limite);
               //user scrolled to bottom of the page?
             var myNode = document.getElementById("content");
             while (myNode.firstChild) {
              myNode.removeChild(myNode.firstChild);
              }
        
              load_users(limite+1);
        }
    });
}


