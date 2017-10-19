<?php

class listbooks_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = listbooks_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function list_books($limit){
        return $this->bll->list_books_BLL($limit);
    }
    
     public function details_books($idbook){
        return $this->bll->details_books_BLL($idbook);
    }
 
}
