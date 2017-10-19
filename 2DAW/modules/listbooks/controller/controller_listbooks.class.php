<?php
//session_start();

class controller_listbooks{

    function __construct() {
        include(UTILS_PRODUCTS . "utils.inc.php");
        $_SESSION['module'] = "listbooks";
    }

    function form_list_books() {
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");

        loadView('modules/listbooks/view/', 'list_books.php');

        require_once(VIEW_PATH_INC . "footer.html");
    }
    function form_details_books() {
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");

        loadView('modules/listbooks/view/', 'details_books.php');

        require_once(VIEW_PATH_INC . "footer.html");
    }

    function load_listbooks(){
        if (isset($_POST["limit"])) {
            $_SESSION['limit'] =  $_POST["limit"];
            $arrValue = loadModel(MODEL_PRODUCTS, "listbooks_model", "list_books", $_SESSION['limit']);
             echo json_encode($arrValue);
             exit;
        }
    }

    function load_datails(){
        if (isset($_POST["idbook"])){
            $_SESSION['idbook'] = $_POST["idbook"];
           
            $arrValue = loadModel(MODEL_PRODUCTS, "listbooks_model", "details_books", $_SESSION['idbook']);

            $_SESSION['user'] = $arrValue;
                  
            $callback = "../../listbooks/form_details_books/";
            echo ($callback);//json_encode no se usa por que sale con ""
            exit;
        }
    }
   
    function load_details1(){
        if (isset($_POST["loaddetails1"]) && $_POST["loaddetails1"] == true){
            $arrValue[0]= $_SESSION['user'];
            echo json_encode($arrValue[0]);  
            exit;
        }
    }
    
}

