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

    public function list_books_DAO($db, $limit) {
        $sql = "SELECT * from books limit $limit";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function details_books_DAO($db, $idbook) {
        $sql = "SELECT * from books  where idbook='$idbook'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

}
