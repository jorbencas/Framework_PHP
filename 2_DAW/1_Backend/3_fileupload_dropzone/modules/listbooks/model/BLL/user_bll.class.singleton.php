<?php
require ($_SERVER['DOCUMENT_ROOT'] . "/2_DAW/1_Backend/3_fileupload_dropzone/model/Db.class.singleton.php");
require ($_SERVER['DOCUMENT_ROOT'] . "/2_DAW/1_Backend/3_fileupload_dropzone/modules/listbooks/model/DAO/user_dao.class.singleton.php");

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

    public function list_books_BLL($limit) {
        return $this->dao->list_books_DAO($this->db, $limit);
    }

    public function details_books_BLL($idbook) {
        return $this->dao->details_books_DAO($this->db, $idbook);
    }
}
