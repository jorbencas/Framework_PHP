<?php
//require($_SERVER['DOCUMENT_ROOT'] . "/2_DAW/1_Backend/3_fileupload_dropzone/modules/books/model/BLL/user_bll.class.singleton.php");

class books_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = books_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function create_user($arrArgument) {
        //echo json_encode($arrArgument);
        return $this->bll->create_user_BLL($arrArgument);
    }

    public function obtain_countries($url){
       return $this->bll->obtain_countries_BLL($url);
   }

   public function obtain_provinces(){
       return $this->bll->obtain_provinces_BLL();
   }

   public Function obtain_cities($arrArgument){
       return $this->bll->obtain_cities_BLL($arrArgument);
   }
}
