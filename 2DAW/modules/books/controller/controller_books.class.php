<?php
//session_start();
//include  with absolute route
class controller_books{

    function __construct() {
        include(FUNCTIONS_USERS . "functions_user.inc.php");
        include(UTILS . "upload.php");
        $_SESSION['module'] = "books";
    }

    function form_books(){
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");

        loadView('modules/books/view/', 'create_books.php');

        require_once(VIEW_PATH_INC . "footer.html");
    }
    
    function results_books(){
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");

        loadView('modules/books/view/', 'results_books.php');

        require_once(VIEW_PATH_INC . "footer.html");
    }

    //////////////////////////////////////////////////////////////// upload

// function upload_books(){
//     if ((isset($_GET["upload"])) && ($_GET["upload"] == true)) {
//         $result_avatar = upload_files();
//         $_SESSION['result_avatar'] = $result_avatar;
//         //echo debug($_SESSION['result_avatar']); //se mostraría en alert(response); de dropzone.js
//     }
// }

function alta_books() {



    // echo "Pepe";
    // exit;

    if ((isset($_POST['alta_users_json']))) {
         $jsondata = array();
        $usersJSON = json_decode($_POST["alta_users_json"], true);
        $result = validate_user($usersJSON);
    
        if (empty($_SESSION['result_avatar'])) {
            $_SESSION['result_avatar'] = array('resultado' => true, 'error' => "", 'datos' => 'media/default-avatar.png');
        }
        $result_avatar = $_SESSION['result_avatar'];
    
        if (($result['resultado']) && ($result_avatar['resultado'])) {
            $arrArgument = array(
            'isbn' => $result['datos']['isbn'],
            'Titulo' => $result['datos']['Titulo'],
            'edicion' => $result['datos']['edicion'],
            'vol' => $result['datos']['vol'],
            'date_reception' => $result['datos']['date_reception'],
            'Autores' => $result['datos']['Autores'],
            'gustos' => $result['datos']['gustos'],
            'country' => $result['datos']['country'],
            'province' => $result['datos']['province'],
            'city' => $result['datos']['city'],
            'avatar' => $result_avatar['datos']
            );
            ///////////////insert into BD////////////////////////
            $arrValue = false;
            
             $arrValue = loadModel(MODEL_USERS, "books_model", "create_user", $arrArgument);
            
            if ($arrValue)
                $mensaje = "Su registro se ha efectuado correctamente, para finalizar compruebe que ha recibido un correo de validacion y siga sus instrucciones";
            else
                $mensaje = "No se ha podido realizar su alta. Intentelo mas tarde";
            
                
            //redirigir a otra p�gina con los datos de $arrArgument y $mensaje
            $_SESSION['user'] = $arrArgument;
            $_SESSION['msje'] = $mensaje;

             $callback = "../../books/results_books/";

            $jsondata["success"] = true;
            $jsondata["redirect"] = $callback;



            echo json_encode($jsondata);



            exit;
        } else {
            //$error = $result['error'];
            //$error_avatar = $result_avatar['error'];
            $jsondata["success"] = false;
            $jsondata["error"] = $result['error'];
            $jsondata["error_avatar"] = $result_avatar['error'];

             $jsondata["success1"] = false;
            
           // header('HTTP/1.0 400 Bad error');
          // echo json_encode($jsondata);
            exit;
       }
   }
}//end alta_books

//////////////////////////////////////////////////////////////// delete
function delete_books(){
    if (isset($_POST["delete"]) && $_POST["delete"] == true) {
        $_SESSION['result_avatar'] = array();
        $result = remove_files();
        if ($result === true) {
            echo json_encode(array("res" => true));
        } else {
            echo json_encode(array("res" => false));
        }
    }
}//end delete_books


//////////////////////////////////////////////////////////////// load
function load_books(){
    if (isset($_POST["load"]) && $_POST["load"] == true) {
        $jsondata = array();
        if (isset($_SESSION['user'])) {
            //echo debug($_SESSION['user']);
            $jsondata["user"] = $_SESSION['user'];
        }
        if (isset($_SESSION['msje'])) {
            //echo $_SESSION['msje'];
            $jsondata["msje"] = $_SESSION['msje'];
        }
        //close_session();
        echo json_encode($jsondata);
        exit;
   }
}

// function close_session() {
//     unset($_SESSION['user']);
//     unset($_SESSION['msje']);
//     $_SESSION = array(); // Destruye todas las variables de la sesión
//     session_destroy(); // Destruye la sesión
// }

/////////////////////////////////////////////////// load_data
function load_data_books(){
    if ((isset($_GET["load_data"])) && ($_GET["load_data"] == true)) {
        $jsondata = array();
        if (isset($_SESSION['user'])) {
            $jsondata["user"] = $_SESSION['user'];
            echo json_encode($jsondata);
            exit;
        } else {
            $jsondata["user"] = "";
            echo json_encode($jsondata);
            exit;
        }
    }
}

////////////////////////////////////////////////// load_country
function load_country_books(){
    if(  (isset($_POST["load_country"])) && ($_POST["load_country"] == true)  ){
		$json = array();

    	$url = 'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON';
		
		$json = loadModel(MODEL_USERS, "books_model", "obtain_countries", $url);

		if($json){
			echo $json;
			exit;
		}else{
			$json = "error";
			echo $json;
			exit;
		}
	}
}//end load_country


/////////////////////////////////////////////////// load_provinces
function load_provinces_books(){
    if(  (isset($_POST["load_provinces"])) && ($_POST["load_provinces"] == true)  ){
    	$jsondata = array();
        $json = array();

		$json = loadModel(MODEL_USERS, "books_model", "obtain_provinces");

		if($json){
			$jsondata["provinces"] = $json;
			echo json_encode($jsondata);
			exit;
		}else{
			$jsondata["provinces"] = "error";
			echo json_encode($jsondata);
			exit;
		}
	}
}//end load_provinces

/////////////////////////////////////////////////// load_cities
function load_cities_books(){
    if(isset($_POST['idPoblac']) ){
	    $jsondata = array();
        $json = array();

		$json = loadModel(MODEL_USERS, "books_model", "obtain_cities", $_POST['idPoblac']);

		if($json){
			$jsondata["cities"] = $json;
			echo json_encode($jsondata);
			exit;
		}else{
			$jsondata["cities"] = "error";
			echo json_encode($jsondata);
			exit;
		}
	}
}//end load_cities

}


