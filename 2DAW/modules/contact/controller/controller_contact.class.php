
<?php
    class controller_contact {

        function __construct() {
            $_SESSION['module'] = "contact";
            include(UTILS . "mail.inc.php");
        }

        function view_contact() {
          require_once(VIEW_PATH_INC . "header.php");
          require_once(VIEW_PATH_INC . "menu.php");
            
          loadView(CONTACT_VIEW_PATH, 'contact.php');

          require_once(VIEW_PATH_INC . "footer.html");
        }
        
        function send_mail(){
          $jsondata = array();
    	    $mail_content = json_decode($_POST["data_contact"], true);
          if($mail_content){
             $json = send_mailgun($mail_content['email'],$mail_content['message'],$mail_content['subject'],$mail_content['name']);
            $jsondata['success'] = $json;
          }else{
            $jsondata['success'] = $json;
          }
          echo json_encode($jsondata);
        }
    }
