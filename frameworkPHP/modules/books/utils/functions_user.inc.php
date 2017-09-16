<?php

function validate_user() {
    $error = array();

    $valido = true;
    $filtro = array(
      'ISBN' => array(
          'filter' => FILTER_VALIDATE_REGEXP,
          'options' => array('regexp' => '/[0-9]{13}$/')
      ),
      'date_reception' => array(
          'filter' => FILTER_VALIDATE_REGEXP,
          'options' => array('regexp' => '/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/')
      ),
      'Titulo' => array(
          'filter' => FILTER_VALIDATE_REGEXP,
          'options' => array('regexp' => '/^[a-z]{2,20}$/')
      ),
      'autor' => array(
          'filter' => FILTER_VALIDATE_REGEXP,
          'options' => array('regexp' => '/^[a-zA-Z]{6,32}$/')
      ),
    );

    $resultado = filter_input_array(INPUT_POST, $filtro);


    //no filter
    $resultado['Edición'] = $_POST['Edición'];
    $resultado['gustos'] = $_POST['gustos'];
    $resultado['vol'] = $_POST['vol'];

    if ($_POST['Edición'] === 'Select level') {
        $error['Edición'] = "You haven't select vol.";
        $valido = false;
    }

    if(count($_POST['vol']) < 1){
        $error['vol'] = "Select 1";
        $valido = false;
    }

    if(count($_POST['gustos']) <= 1){
        $error['gustos'] = "Select 2 or more.";
        $valido = false;
    }

    if ($resultado != null && $resultado) {

        if (!$resultado['Titulo']) {
            $error['Titulo'] = 'Title must be 2 to 20 letters';
            $valido = false;
        }

        if (!$resultado['autor']) {
            $error['autor'] = 'Autor must be 2 to 20 characters';
            $valido = false;
        }

        if (!$resultado['ISBN']) {
            $error['ISBN'] = 'ISBN must be 13 numbers';
            $valido = false;
        }

        if (!$resultado['date_reception']) {
            if($_POST['date_reception'] == ""){
                $error['date_reception'] = "this camp can't empty";
                $valido = false;
            }
        }

    } else {
        $valido = false;
    };
    return $return = array('resultado' => $valido, 'error' => $error, 'datos' => $resultado);
}
