<?php

session_start();
//include  with absolute route
//include ($_SERVER['DOCUMENT_ROOT'] . "/Cerveza/modules/products/utils/functions_user_inc.php");
//include ($_SERVER['DOCUMENT_ROOT'] . "/Cerveza/utils/upload.php");
//include ($_SERVER['DOCUMENT_ROOT'] . "/Cerveza/utils/common.inc.php");
/////////////////////////////////////////////////////////////// upload
/*
if ((isset($_GET["upload"])) && ($_GET["upload"] == true)) {
    $result_avatar = upload_files();
    $_SESSION['result_avatar'] = $result_avatar;
    //echo debug($_SESSION['result_avatar']); //se mostraría en alert(response); de dropzone.js
}
*/
class controller_products {

function __construct() {
      include(FUNCTIONS_PRODUCTS . "functions_user_inc.php");
      include(UTILS . "upload.php");
      $_SESSION['module'] = "products";
  }


  function create_products() {
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");

        echo '<br><br><br><br><br><br><br>';
        loadView('modules/products/view/', 'create_products.php');

        require_once(VIEW_PATH_INC . "footer.html");
    }


    function results_products() {

           require_once(VIEW_PATH_INC . "header.php");
           require_once(VIEW_PATH_INC . "menu.php");

           echo '<br><br><br><br><br><br><br>';
           loadView('modules/products/view/', 'results_products.php');

           require_once(VIEW_PATH_INC . "footer.html");
       }



/*
//////////////////////////////////////////////////////////////// alta_users_json
if ((isset($_POST['alta_users_json']))) {
  //echo json_encode('vladi');
  //exit;
  $usersJSON = json_decode($_POST["alta_users_json"], true);
  //echo json_encode($usersJSON);


    alta_users_json();
}
*/
function alta_users() {
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
            'cerveza' => $result['datos']['cerveza'],
            'estado' => $result['datos']['estado'],
            'pais' => $result['datos']['pais'],
            'gustos' => $result['datos']['gustos'],
            'date_reception' => $result['datos']['date_reception'],
            'country' => $result['datos']['country'],
            'province' => $result['datos']['province'],
            'city' => $result['datos']['city'],
            'avatar'=>$result_avatar['datos']
        );

        $arrValue = false;
            try {

                $arrValue = loadModel(MODEL_PRODUCTS, "products_model", "create_beer", $arrArgument)
                ;
            } catch (Exception $e) {
                showErrorPage(2, "ERROR - 503 BD", 'HTTP/1.0 503 Service Unavailable', 503);
            }


                      if ($arrValue)
                          $mensaje = "Su registro se ha efectuado correctamente, para finalizar compruebe que ha recibido un correo de validacion y siga sus instrucciones";
                      else
                          $mensaje = "No se ha podido realizar su alta. Intentelo mas tarde";

        //redirigir a otra p�gina con los datos de $arrArgument y $mensaje
        $_SESSION['user'] = $arrArgument;
        $_SESSION['msje'] = $mensaje;
        $callback = "../../products/results_products/";//

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
        if ($result_avatar['resultado']) {
            $jsondata["success1"] = true;
            $jsondata["img_avatar"] = $result_avatar['datos'];
        }
        header('HTTP/1.0 400 Bad error');
        echo json_encode($jsondata);
        //exit;
    }
  }
}//end alta_products

//////////////////////////////////////////////////////////////// delete
function delete_products(){
if (isset($_POST["delete"]) && $_POST["delete"] == true) {
    $_SESSION['result_avatar'] = array();
    $result = remove_files();
    if ($result === true) {
        echo json_encode(array("res" => true));
    } else {
        echo json_encode(array("res" => false));
    }
}
}//end delete_products

//////////////////////////////////////////////////////////////// load
function load_products(){
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
    close_session();
    echo json_encode($jsondata);
    exit;
}

}//end loadproduts

function close_session() {
    unset($_SESSION['user']);
    unset($_SESSION['msje']);
    $_SESSION = array(); // Destruye todas las variables de la sesión
    session_destroy(); // Destruye la sesión
} //end close_session

/////////////////////////////////////////////////// load_data

function load_data_products(){
if ((isset($_POST["load_data"])) && ($_POST["load_data"] == true)) {
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
}//end load data


    function load_countries_products(){
      if(  (isset($_POST["load_country"])) && ($_POST["load_country"] == true)  ){
      		$json = array();

          	//$url = 'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON';
      		//$path_model=$_SERVER['DOCUMENT_ROOT'] . '/Cerveza/modules/products/model/model/';
      		//$json = loadModel($path_model, "products_model", "obtain_countries", $url);

          try {
              //throw new Exception();

              $json = loadModel(MODEL_PRODUCTS, "products_model", "obtain_countries", $url);
          } catch (Exception $e) {
              $json = array();
          }


      		if($json){
      			echo $json;
      			exit;
      		}else{
      			$json = "error";
      			echo $json;
      			exit;
      		}
      	}
}// end contries
      /////////////////////////////////////////////////// load_provinces

      function load_provinces_products(){
      if(  (isset($_POST["load_provinces"])) && ($_POST["load_provinces"] == true)  ){
          	$jsondata = array();
              $json = array();

      		//$path_model=$_SERVER['DOCUMENT_ROOT'] . '/Cerveza/modules/products/model/model/';
      		//$json = loadModel($path_model, "products_model", "obtain_provinces");


          try {
                      $json = loadModel(MODEL_PRODUCTS, "products_model", "obtain_provinces");
                  } catch (Exception $e) {
                      $json = array();
                  }

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
}//end load provinces
      /////////////////////////////////////////////////// load_cities

function load_cities_products(){
      if(  isset($_POST['idPoblac']) ){
      	    $jsondata = array();
              $json = array();

      		//$path_model=$_SERVER['DOCUMENT_ROOT'] . '/Cerveza/modules/products/model/model/';
      		//$json = loadModel($path_model, "products_model", "obtain_cities", $_POST['idPoblac']);

          try {
                        $json = loadModel(MODEL_PRODUCTS, "products_model", "obtain_cities", $_POST['idPoblac']);
                    } catch (Exception $e) {
                        showErrorPage(2, "ERROR - 503 BD", 'HTTP/1.0 503 Service Unavailable', 503);
                    }

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
      }//end cities

}// end controller_products
