<?php


function validate_user($value) {

    $error = array();
    $valido = true;
    $filtro = array(
        'cerveza' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => '/^[A-Za-z]{5,30}$/')
          ),

        'pais' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => '/^[A-Za-z]{4,30}$/')
        ),

        );


$resultado = filter_var_array($value, $filtro);

 $resultado['estado'] = $value['estado'];
 $resultado['gustos'] = $value['gustos'];
 $resultado['country'] = $value['country'];
 $resultado['province'] = $value['province'];
 $resultado['city'] = $value['city'];
 $resultado['date_reception'] = $value['date_reception'];



  if ($resultado['estado'] === 'Select valoration') {
      $error['estado'] = "You haven't select valoration.";
      $valido = false;
  }


  if (!$resultado['date_reception']) {
            if ($resultado['date_reception'] == "") {
                $error['date_reception'] = "this cassmp can't empty";
                $valido = false;
            } else {
                $error['date_reception'] = 'erroreee format date (mm/dd/yyyy)';
                $valido = false;
            }
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

        if ($resultado['gustos']===""){
                $error['gustos']="You need to choose a gusto";
                $valid = false;
            }




  if ($resultado != null && $resultado) {

        if (!$resultado['cerveza']) {
            $error['cerveza'] = 'The Beer must be 5 to 30 letters';
            $valido = false;
}


            if (!$resultado['pais']) {
                $error['pais'] = 'The country must be 4 to 30 letters';
                $valido = false;

              }



            if (count($resultado['gustos']) < 1) {
            $error['gustos'] = "Select 2 or more.";
            $valido =  false;
}
}

    return $return = array('resultado' => $valido, 'error' => $error, 'datos' => $resultado);
};
