<?php
/*	echo "<br>";
	echo "<br>";
	echo "<br>";
	echo "<br>";
	echo "<br>";
	echo "<br>";
	echo "<br>";
	echo "<br>";
	echo "<br>";
	*/
	//echo "<pre>";
	//print_r($_POST);
	//echo "</pre>";
	debugPHP($_POST);


	//echo "<pre>";
	//print_r($_SESSION);
	//echo "</pre>";
	debugPHP($_SESSION);
	//die();
	$user = $_SESSION['user'];
	$msage = $_SESSION['msje'];

 foreach ($user as $indice => $valor) {
		 if ($indice == 'gustos') {
				echo "<br><b>gustos:</b><br>";
				 $interests = $user['gustos'];
				 foreach ($interests as $indice => $valor) {
						 echo "<b>---> $indice</b>: $valor<br>";
				 }
		 } else {
				 echo "<br><b>$indice</b>: $valor";
		 }
 }
					 //echo "<br>" . "<b style='color:green'>" . $msage;
 ?>
