<?php

class listbooks_bll {
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = listbooks_dao::getInstance();
        $this->db = db::getInstance();
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
