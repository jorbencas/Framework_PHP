<?php
  function send_mailgun($email,$messag,$issue,$name){
   //$ip = getRealIpAddr();
   $users = get_current_user();
   $config = array();
   $config['api_key'] = "XXXXXXX"; //API Key
   $config['api_url'] = "XXXXXXX"; //API Base URL

   $message = array();
   $message['from'] = $email;
   $message['to'] = 'tu-email@gmail.com';//You must create a email account
   $message['h:Reply-To'] = $email;
   $message['subject'] = 'Support '.$email.', '.$issue.' issue';
   $message['html'] = '' . $email . ' have a support issue opened <br> Type '.$issue.'<br>'. $messag .'<br>Name: '.$name.'';

   $ch = curl_init();
   curl_setopt($ch, CURLOPT_URL, $config['api_url']);
   curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
   curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
   curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
   curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
   curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
   curl_setopt($ch, CURLOPT_POST, true);
   curl_setopt($ch, CURLOPT_POSTFIELDS,$message);
   $result = curl_exec($ch);
   curl_close($ch);
   return $result;
 }
?>
