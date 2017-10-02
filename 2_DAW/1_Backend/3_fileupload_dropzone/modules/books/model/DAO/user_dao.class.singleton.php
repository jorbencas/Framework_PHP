<?php
class userDAO {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function create_user_DAO($db, $arrArgument) {
        $isbn = $arrArgument['isbn'];
        $Titulo = $arrArgument['Titulo'];
        $Autores = $arrArgument['Autores'];
        $date_reception = $arrArgument['date_reception'];
        $edicion = $arrArgument['edicion'];
        $vol = $arrArgument['vol'];
        $gustos = $arrArgument['gustos'];
        $country = $arrArgument['country'];
        $province = $arrArgument['province'];
        $city = $arrArgument['city'];
        $avatar = $arrArgument['avatar'];

        $Drama = 0;
        $Comedia = 0;
        $Thriller = 0;
        $Aventura = 0;

        foreach ($gustos as $indice) {
            if ($indice === 'Drama')
                $Drama = 1;
            if ($indice === 'Comedia')
                $Comedia = 1;
            if ($indice === 'Thriller')
                $Thriller = 1;
            if ($indice === 'Aventura')
                $Aventura = 1;
        }

        $sql = "INSERT INTO books (isbn, Titulo, Autores, date_reception, edicion, vol, Thriller, Drama, Aventura, Comedia, country, provincie, city, avatar) VALUES ('$isbn', '$Titulo', '$Autores','$date_reception', '$edicion', '$vol', '$Thriller', '$Drama', '$Aventura', '$Comedia', '$country', '$province', '$city', '$avatar')";
        return $db->ejecutar($sql);
    }

    public function obtain_countries_DAO($url){
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

    public function obtain_provinces_DAO(){
          $json = array();
          $tmp = array();

          $provincias = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/2_DAW/1_Backend/3_fileupload_dropzone/resources/provinciasypoblaciones.xml');
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

    public function obtain_cities_DAO($arrArgument){
          $json = array();
          $tmp = array();

          $filter = (string)$arrArgument;
          $xml = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/2_DAW/1_Backend/3_fileupload_dropzone/resources/provinciasypoblaciones.xml');
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
