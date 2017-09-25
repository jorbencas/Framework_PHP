<?php 
	session_start();
        $_SESSION['result_avatar'] = array();
        require_once("view/inc/header.php"); 
	require_once("view/inc/menu.php");
        
        
        include("utils/utils.inc.php");
        
	if (!isset($_GET['module'])) {
		require_once("modules/homepage/controller/controller_homepage.class.php");
	}  else  if ( (isset($_GET['module'])) && (!isset($_GET['view'])) ) {
		require_once("modules/".$_GET['module']."/controller/controller_".$_GET['module'].".class.php");
                
	}
        
        if ( (isset($_GET['module'])) && (isset($_GET['view'])) ) {
            require_once("modules/".$_GET['module']."/view/".$_GET['view'].".php");
        } 
   
	
        
	require_once("view/inc/footer.html");
