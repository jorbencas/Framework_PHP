window.onload = init;

function init(){
  var but = document.getElementById('boton');
  but.addEventListener("click", () => {
  validate_contact();
   });

}

function validate_contact(){
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var subject = document.getElementById('subject');
  var message = document.getElementById('message');
  var error = true;
  if(name.value === ""){
    var er_name = document.getElementById('err_name');
    er_name.innerHTML = "Introduce un nombre";
    error = false;
  }
  if(email.value === ""){
    var er_email = document.getElementById('err_email');
    er_email.innerHTML = "Introduce un email";
    error = false;
  }
  if(subject.value === "dv"){
    var er_subject = document.getElementById('err_subject');
    er_subject.innerHTML = "Elige una";
    error = false;
  }
  if(message.value=== ""){
    var er_message = document.getElementById('err_message');
    er_message.innerHTML = "No puede dejar este campo en blanco";
    error = false;
  }
  if(error === true){
    console.log(typeof(message.value));
  var data = {"name":name.value,"email":email.value,"subject":subject.value, "message": message.value};
  var data_contactJSON = JSON.stringify(data);
  console.log(data_contactJSON);
      $.post('../../contact/send_mail/',
              {data_contact: data_contactJSON},

      function (response) {

          console.log("1 "+response.success);


    }, "json").fail(function(xhr, textStatus, error) {
      console.log(xhr.responseText);
      console.log("2 "+xhr.responseText.success);
      console.log("2 "+xhr.responseText.redirect);
    });
  }
}
