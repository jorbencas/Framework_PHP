<?php
require ($_SERVER['DOCUMENT_ROOT'] . "/2_DAW/1_Backend/3_fileupload_dropzone/model/Db.class.singleton.php");
require ($_SERVER['DOCUMENT_ROOT'] . "/2_DAW/1_Backend/3_fileupload_dropzone/modules/books/model/DAO/user_dao.class.singleton.php");

class user_bll {
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = userDAO::getInstance();
        $this->db = Db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function create_user_BLL($arrArgument) {
        return $this->dao->create_user_DAO($this->db, $arrArgument);
    }
    public function obtain_countries_BLL($url){
     return $this->dao->obtain_countries_DAO($url);
   }

   public function obtain_provinces_BLL(){
     return $this->dao->obtain_provinces_DAO();
   }

   public function obtain_cities_BLL($arrArgument){
     return $this->dao->obtain_cities_DAO($arrArgument);
   }
}
