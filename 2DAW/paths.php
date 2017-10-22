<?php
//SITE_ROOT
$path = $_SERVER['DOCUMENT_ROOT'] . '/2DAW/';
define('SITE_ROOT', $path);

//SITE_PATH
define('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . '/2DAW/');

//CSS
define('CSS_PATH', SITE_PATH . 'view/css/');

//JS
define('JS_PATH', SITE_PATH . 'view/js/');

//IMG
define('IMG_PATH', SITE_PATH . 'view/img/');

define('PRODUCTION', true);

//model
define('MODEL_PATH', SITE_ROOT . 'model/');
//view
define('VIEW_PATH_INC', SITE_ROOT . 'view/inc/');
define('VIEW_PATH_INC_ERROR', SITE_ROOT . 'view/inc/templates_error/');
//modules
define('MODULES_PATH', SITE_ROOT . 'modules/');
//resources
define('RESOURCES', SITE_ROOT . 'resources/');
//media
define('MEDIA_PATH', SITE_ROOT . 'media/');
//utils
define('UTILS', SITE_ROOT . 'utils/');

//model users
define('FUNCTIONS_USERS', SITE_ROOT . 'modules/books/utils/');
define('MODEL_PATH_USERS', SITE_ROOT . 'modules/books/model/');
define('DAO_USERS', SITE_ROOT . 'modules/books/model/DAO/');
define('BLL_USERS', SITE_ROOT . 'modules/books/model/BLL/');
define('MODEL_USERS', SITE_ROOT . 'modules/books/model/model/');
define('USERS_JS_PATH', SITE_PATH . 'modules/books/view/js/');

//model products
define('UTILS_PRODUCTS', SITE_ROOT . 'modules/listbooks/utils/');
define('PRODUCTS_JS_LIB_PATH', SITE_PATH . 'modules/listbooks/view/lib/');
define('PRODUCTS_JS_PATH', SITE_PATH . 'modules/listbooks/view/js/');
define('MODEL_PATH_PRODUCTS', SITE_ROOT . 'modules/listbooks/model/');
define('DAO_PRODUCTS', SITE_ROOT . 'modules/listbooks/model/DAO/');
define('BLL_PRODUCTS', SITE_ROOT . 'modules/listbooks/model/BLL/');
define('MODEL_PRODUCTS', SITE_ROOT . 'modules/listbooks/model/model/');


//module contact
define('CONTACT_JS_PATH', SITE_PATH . 'modules/contact/view/js/');
define('CONTACT_VIEW_PATH', 'modules/contact/view/');
    
//amigables
define('URL_AMIGABLES', TRUE);
