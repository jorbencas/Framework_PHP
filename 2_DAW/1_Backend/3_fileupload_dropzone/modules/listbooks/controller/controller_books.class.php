<?php
session_start();
include ($_SERVER['DOCUMENT_ROOT'] . "/2_DAW/1_Backend/3_fileupload_dropzone/utils/common.inc.php");
/*
if (isset($_GET["load"]) && ($_GET["load"] == true)) {
    $path_model = $_SERVER['DOCUMENT_ROOT'] . '/2_DAW/1_Backend/3_fileupload_dropzone/modules/listbooks/model/model/';
    $arrValue = loadModel($path_model, "user_model", "list_books");
     echo json_encode($arrValue);
     exit;
}
*/


if (isset($_GET["load"])) {
    $_SESSION['limit'] =  $_GET["load"];
    $path_model = $_SERVER['DOCUMENT_ROOT'] . '/2_DAW/1_Backend/3_fileupload_dropzone/modules/listbooks/model/model/';
    $arrValue = loadModel($path_model, "user_model", "list_books", $_SESSION['limit']);
     echo json_encode($arrValue);
     exit;
}

if (isset($_GET["loaddetails"]) && $_GET["loaddetails"] == true){
    $idbook = $_GET["idbook"];
    $path_model = $_SERVER['DOCUMENT_ROOT'] . '/2_DAW/1_Backend/3_fileupload_dropzone/modules/listbooks/model/model/';
    $arrValue = loadModel($path_model, "user_model", "details_books", $idbook);
   
    $_SESSION['user'] = $arrValue;

    $callback = "index.php?module=listbooks&view=details_books";
    echo json_encode($callback);
    exit;
}

if (isset($_GET["loaddetails1"]) && ($_GET["loaddetails1"] == true)){
    $arrValue[0]=  $_SESSION['user'];
    echo json_encode($arrValue[0]);  
    exit;
}

/*
if (isset($_GET["get_data"])) {
    $_SESSION['limit'] =  $_GET["get_data"];
    $path_model = $_SERVER['DOCUMENT_ROOT'] . '/a/Server-Project/modules/list_rooms/model/model/';
    $arrValue = loadModel($path_model, "listrooms_model", "select_rooms",$_SESSION['limit']);
    if ($arrValue) {
        $jsondata['limit'] = $_SESSION['limit'];
        $jsondata["results"] = $arrValue;
        echo json_encode($jsondata);
        exit;
} else {
// $message = "NOT PRODUCTS";
// loadView('view/inc/', '404.php', $message);
}
}else {
  header('HTTP/1.0 400 Bad error');
    echo json_encode($jsondata);
}*/