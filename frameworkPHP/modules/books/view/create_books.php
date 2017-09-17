<script type="text/javascript" src="modules/books/view/js/books.js" ></script>
<p>Introduzca sus datos personales:</p>
		 <form id="form_books"name="formulario" method="POST">
		  <table width="50%"  border="0" cellspacing="0" cellpadding="0">
			<tr>
			  <td width="20%">ISBN</td>
			  <td width="40%"><input name="ISBN" placeholder="ISBN" type="text" id="ISBN" value="<?php echo $_POST?$_POST['ISBN']:""; ?>" ></td>
				<td width="40%"><?php
          if (isset($error['ISBN'])) {
              print ("<BR><span style='color: #ff0000'>" . "* " . $error['ISBN'] . "</span><br/>");
          }
          ?></td>
			</tr>
			<tr>
			  <td>Titulo</td>
			  <td><input name="Titulo" placeholder="Titulo" type="text" id="Titulo" value="<?php echo $_POST?$_POST['Titulo']:""; ?>" ></td>
				<td width="40%"><?php
          if (isset($error['Titulo'])) {
              print ("<BR><span style='color: #ff0000'>" . "* " . $error['Titulo'] . "</span><br/>");
          }
          ?></td>
			</tr>
			<tr>
			  <td>Autores/as</td>
			  <td><input name="autor" placeholder="Autores/as" type="text" id="autor" value="<?php echo $_POST?$_POST['autor']:""; ?>" ></td>
				<td width="40%"><?php
          if (isset($error['autor'])) {
              print ("<BR><span style='color: #ff0000'>" . "* " . $error['autor'] . "</span><br/>");
          }
          ?></td>
			</tr>
			<tr>
			  <td>Edición </td>
			  <td><select name="Edición" id="Edición">
				<option value="Normal">Normal</option>
				<option value="Colecionista">Colecionista</option>
				<option value="limitada">limitada</option>
				<option value="E de lujo">E de lujo</option>
			  </select></td>
			</tr>
			<tr>
			  <td>N&uacute;mero del volumen </td>
			  <td>Vol 1 <input name="vol" type="radio" value="1" checked>
				 Vol 2 <input name="vol" type="radio" value="2">
					Vol 3 <input name="vol" type="radio" value="3">
					Vol 4 <input name="vol" type="radio" value="4"></td>
					<td width="40%"><?php
	          if (isset($error['vol'])) {
	              print ("<BR><span style='color: #ff0000'>" . "* " . $error['vol'] . "</span><br/>");
	          }
	          ?></td>
			</tr>
			<tr>
			  <td>Generos</td>
			  <td>Ciénci&aacute;Ficción
					<input type="checkbox" name="gustos[]" value="Ciéncia Ficción" checked>
					Drama  <input type="checkbox" name="gustos[]" value="Drama">
					Comedia <input type="checkbox" name="gustos[]" value="Comedia">
					Thriller <input type="checkbox" name="gustos[]" value="Thriller">
					Aventura <input type="checkbox" name="gustos[]" value="Aventura"></td>
					<td width="40%"><?php
	          if (isset($error['gustos'])) {
	              print ("<BR><span style='color: #ff0000'>" . "* " . $error['gustos'] . "</span><br/>");
	          }
	          ?></td>
			</tr>
			<tr>
			  <td>date_reception</td>
			  <td><input id="date_reception" type="text" name="date_reception"><div id="date_reception"></div></td>
				<td width="40%"><?php
          if (isset($error['date_reception'])) {
              print ("<BR><span style='color: #ff0000'>" . "* " . $error['date_reception'] . "</span><br/>");
          }
          ?></td>
			</tr>
			<tr>
			  <td><input type="submit" name="SubmitBooks" id="SubmitBooks" value="Enviar"></td>
			  <td>&nbsp;</td>
			</tr>
		  </table>
		</form>
