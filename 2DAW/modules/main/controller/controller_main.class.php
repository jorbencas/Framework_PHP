<?php
class controller_main {

    function __construct() {
        //include(UTILS . "common.inc.php");
    }

    function begin() {
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");

        loadView('modules/main/view/', 'main.php');

        require_once(VIEW_PATH_INC . "footer.html");
    }

}
