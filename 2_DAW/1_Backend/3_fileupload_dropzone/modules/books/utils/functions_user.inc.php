<?php

function validate_user($value) {
    $error = array();
    $valido = true;
    $filtro = array(
      'isbn' => array(
          'filter' => FILTER_VALIDATE_REGEXP,
          'options' => array('regexp' => '/[0-9]{8,13}$/')
      ),
      'date_reception' => array(
          'filter' => FILTER_VALIDATE_REGEXP,
          'options' => array('regexp' => '/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/')
      ),
      'Titulo' => array(
          'filter' => FILTER_VALIDATE_REGEXP,
          'options' => array('regexp' => '/^[a-z]{2,20}$/')
      ),
      'Autores' => array(
          'filter' => FILTER_VALIDATE_REGEXP,
          'options' => array('regexp' => '/^[a-zA-Z]{6,32}$/')
      ),
    );

    $resultado = filter_var_array($value, $filtro);


    //no filter
    $resultado['edicion'] = $value['edicion'];
    $resultado['gustos'] = $value['gustos'];
    $resultado['vol'] = $value['vol'];
    $resultado['country'] = $value['country'];
    $resultado['province'] = $value['province'];
    $resultado['city'] = $value['city'];

    if ($resultado['edicion'] === 'Select level') {
        $error['e_edicion'] = "You haven't select Edition.";
        $valido = false;
    }

    if(count($resultado['vol']) < 1){
        $error['e_vol'] = "Select 1";
        $valido = false;
    }

    if ($resultado['country']==='Select country'){
           $error['country']="You need to choose a country";
           $valid = false;
       }

   if ($resultado['province']==='Select province'){
           $error['province']="You need to choose a province";
           $valid = false;
       }

   if ($resultado['city']==='Select city'){
           $error['city']="You need to choose a city";
           $valid = false;
       }

    if(count($resultado['gustos']) <= 1){
        $error['e_gustos'] = "Select 2 or more.";
        $valido = false;
    }

    if ($resultado != null && $resultado) {

        if (!$resultado['Titulo']) {
            $error['e_Titulo'] = 'Title must be 2 to 20 letters';
            $valido = false;
        }

        if (!$resultado['Autores']) {
            $error['e_Autores'] = 'Autor must be 2 to 20 characters';
            $valido = false;
        }

        if (!$resultado['isbn']) {
            $error['e_isbn'] = 'isbn must be 8 to 13 numbers';
            $valido = false;
        }

        if (!$resultado['date_reception']) {
            if($resultado['date_reception'] == ""){
                $error['e_date_reception'] = "this camp can't empty";
                $valido = false;
            }
        }

    } else {
        $valido = false;
    };
    return $return = array('resultado' => $valido, 'error' => $error, 'datos' => $resultado);
}
