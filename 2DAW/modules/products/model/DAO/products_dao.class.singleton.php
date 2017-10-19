<?php
class products_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }
 //echo json_encode($arrArgument);
    public function create_beer_DAO($db, $arrArgument) {
        $cerveza = $arrArgument['cerveza'];
        $pais = $arrArgument['pais'];
        $date_reception = $arrArgument['date_reception'];
        $gustos = $arrArgument['gustos'];
        $estado = $arrArgument['estado'];
        $country = $arrArgument['country'];
        $province = $arrArgument['province'];
        $city = $arrArgument['city'];
        $avatar = $arrArgument['avatar'];

        $Tostada =0;
        $Lager =0;
        $Negra=0;
        $Lambic=0;



        foreach($gustos as $indice) {
            if ($indice === 'Tostada')
                $Tostada = 1;
            if ($indice === 'Lager')
                $Lager = 1;
            if ($Negra === 'Negra')
                $Negra = 1;
            if ($Lambic === 'Lambic')
                $Lambic = 1;
        }


        //INSERT INTO `cerveza`(cerveza,estado,pais,gustos,date_reception,country,province,city,avatar)
              //VALUES ("Heineken",1,"Holanda",1,"19/03/2017","Es","Valencia","Bocairent","media/avatar.png")



  //echo json_encode($arrArgument);

        $sql = "INSERT INTO `cerveza`(cerveza,estado,pais,date_reception,country,province,city,Tostada,Lager,Negra,Lambic,avatar) VALUES ('$cerveza','$estado','$pais','$date_reception','$country','$province','$city','$Tostada','$Lager','$Negra',$Lambic,'$avatar')";
        //(echo json_encode($arrArgument);
                   //die;

        return $db->ejecutar($sql);

   }


        function obtain_countries_DAO ($url){
        $ch = curl_init();
        curl_setopt ($ch, CURLOPT_URL, $url);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
        $file_contents = curl_exec($ch);

        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        $accepted_response = array(200, 301, 302);
        if(!in_array($httpcode, $accepted_response)){
          return FALSE;
        }else{
          return ($file_contents) ? $file_contents : FALSE;
        }
  }

        function obtain_provinces_DAO(){
        $json = array();
        $tmp = array();

        $provincias = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/Cerveza/resources/provinciasypoblaciones.xml');
        $result = $provincias->xpath("/lista/provincia/nombre | /lista/provincia/@id");
        for ($i=0; $i<count($result); $i+=2) {
          $e=$i+1;
          $provincia=$result[$e];

          $tmp = array(
            'id' => (string) $result[$i], 'nombre' => (string) $provincia
          );
          array_push($json, $tmp);
        }
            return $json;

  }

       function obtain_cities_DAO($arrArgument){
        $json = array();
        $tmp = array();

        $filter = (string)$arrArgument;
        $xml = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/Cerveza/resources/provinciasypoblaciones.xml');
        $result = $xml->xpath("/lista/provincia[@id='$filter']/localidades");

        for ($i=0; $i<count($result[0]); $i++) {
            $tmp = array(
              'poblacion' => (string) $result[0]->localidad[$i]
            );
            array_push($json, $tmp);
        }
        return $json;

    }


}
