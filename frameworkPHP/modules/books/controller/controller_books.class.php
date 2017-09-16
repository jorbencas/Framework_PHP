<?php
	include 'modules/books/utils/functions_user.inc.php';
	if (isset($_POST['SubmitBooks'])) {

			$result = validate_user();

			if ($result['resultado']) {
			$arrArgument = array(
					'ISBN' => $result['datos']['ISBN'],
					'Titulo' => ucfirst($result['datos']['Titulo']),
					'Edición' => strtoupper($result['datos']['Edición']),
					'vol' => $result['datos']['vol'],
					'date_reception' => $result['datos']['date_reception'],
					'autor' => $result['datos']['autor'],
					'gustos' => $result['datos']['gustos'],
			);

			$mensaje = "Book has been successfully registered";

			$_SESSION['user'] = $arrArgument;
			$_SESSION['msje'] = $mensaje;

			$callback="index.php?module=books&view=results_books";
			redirect($callback);
	} else {
			$error = $result['error'];
	}
}
	include 'modules/books/view/create_books.php';
