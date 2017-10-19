<?php

function debugPHP($array) {
    echo "<pre>";
    print_r($array);
    echo "</pre>";
}

function redirect($url) {
    die('<script>window.location.href="' . $url . '";</script>');
}

function amigable($url, $return = false) {
    $amigableson = URL_AMIGABLES;
    $link = "";
    if ($amigableson) {
        $url = explode("&", str_replace("?", "", $url));
        foreach ($url as $key => $value) {
            $aux = explode("=", $value);
            $link .=  $aux[1]."/";
        }
    } else {
        $link = "index.php" . $url;
    }
    if ($return) {
        return SITE_PATH . $link;
    }
    echo SITE_PATH . $link;
}

function send_mailgun($email,$message){
          $config = array();
          $config['api_key'] = "key-6974acca6fa552a31e514682c2759394"; //API Key
          $config['api_url'] = "https://api.mailgun.net/v2/sandboxed6f57a2428d40c293b32ad2743b295c.mailgun.org/messages"; //API Base URL
    
          $message = array();
          $message['from'] = "jorgebeneytocastello@gmail.com";
          $message['to'] = $email;
          $message['h:Reply-To'] = "jorbencas@gmail.com";
          $message['subject'] = "Hello, this is a test";
          $message['html'] = 'Hello ' . $email . ',</br></br>'. $message .' ';
    
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