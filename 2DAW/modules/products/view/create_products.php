
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/dropzone.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.js"></script>

<p>Introduzca Los datos de la cerveza deseada :</p>
		<!-- <form name="form_product" method="POST" action="index.php?module=products" id="from_product">
			<script type="text/javascript" src="modules/products/view/js/products.js" ></script>
-->
			<script type="text/javascript" src="<?php echo PRODUCTS_JS_PATH ?>products.js" ></script>

<!-- Script with absolute route -->


		  <table width="50%"  border="0" cellspacing="0" cellpadding="0">
			<tr>
			  <td width="24%">Cerveza</td>

				<div class="row contact-wrap">
			            <div class="status alert alert-success" style="display: none"></div>
			            <form id="form_user" method="post">
			                <div class="col-sm-5 col-sm-offset-1">
			                    <div class="form-group">





       <td width="76%"><input name="cerveza" placeholder="Cerveza"type="text" id="cerveza" value=""></>
       <div id ="e_cerveza"></div>
			</tr>
			<tr>
			  <td>Pais de Fabricacion</td>
			  <td><input name="pais" placeholder="Pais" type="text" id="pais" value="" ></td>
				<div id="e_pais"><div>


			<tr>

			  <td>Tu valoracion del 1 al 5 </td>
			  <td><select name="estado" id="estado">
				<option value="Select valoration">Select valoration</option>
				<option value="0">0</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
		   <div id="e_estado"></div>
								</div>
			  </select></td>
			</tr>


			<tr>
			  <td>Año de salida al mercado </td>
			  <td><input id="date_reception" type="text" name="date_reception"></td>
				<div id="e_date_reception"></div>
			</tr>


					<td>Country: </td>
		<td id="error_country">
			<select name="country" id="country">
			<option selected>Select country</option>
		</select>
		<div ></div>
		</td>
		</tr>
		<tr>
			<td> </td>
		</tr>
		<tr>
				<td>Province: </td>
		<td id="error_province">
			<select name="province" id="province">
			<option selected>Select province</option>
		</select>
		<div></div>
		</td>
		</tr>
		<tr>
			<td> </td>
		</tr>
		<tr>
				<td>City: </td>
		<td id="error_city">
			<select name="city" id="city">
			<option selected>Select city</option>
		</select>
		<div></div>
		</td>
			<tr>



Tostada  <input type="checkbox" name="gustos[]" class="messageCheckbox" value="Tostada">
Lager  <input type="checkbox" name="gustos[]" class="messageCheckbox" value="Lager">
Negra <input type="checkbox" name="gustos[]" class="messageCheckbox" value="Negra">
Lambic<input type="checkbox" name="gustos[]" class="messageCheckbox" value="Lambic">
<div id="e_gustos"></div>


						</tr>

   															<td>
																<label>dropzone<label>
						                    <div class="msg"></div>
						                    <br/>
						                    <div id="dropzone" class="dropzone"></div>
																<br/>
																<tr>

			<tr>
			  <td><input type="button" name="SubmitProductos" value="Enviar" id="SubmitProductos"></td>
			  <td>&nbsp;</td>
			</tr>
		  </table>
		</form>
