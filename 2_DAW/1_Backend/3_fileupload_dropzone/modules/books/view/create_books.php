<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.1.1/min/dropzone.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/dropzone.css">
		<!-- Script with absolute route -->
		<script type="text/javascript" src="modules/books/view/js/books.js" ></script>
		<section id="contact-page">
		    <div class="container">
		        <div class="center">
		            <h2>ADD USER    </h2>
		            <p class="lead">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		        </div>
		        <div class="row contact-wrap">
		            <div class="status alert alert-success" style="display: none"></div>

		            <form id="form_user" name="form_user"><!---->
		                <div class ="form-group">
		                    <input type="hidden" name="alta_users" value="alta_users">
		                </div>
		                <div class="col-sm-5 col-sm-offset-1">
		                    <div class="form-group">
		                        <label>ISBN *</label>
		                        <input type="text" id="isbn" name="ISBN" placeholder="ISBN" class="form-control" value="" required="required">
		                        <div id="e_ISBN"></div>
		                    </div>
		                    <br />
		                    <div class="form-group">
		                        <label>Titulo *</label>
		                        <input type="text" id="Titulo" name="Titulo" placeholder="Titulo" value="" class="form-control" required="required">

		                        <div id="e_titulo"></div>
		                    </div>
		                    <br />
		                    <div class="form-group">
		                        <label>Autores *</label><br />
		                        <input id="Autores" type="text" name="Autores"   class="form-control" value="" placeholder="Autores" >
		                        <div id="e_Autores"></div>
		                    </div>
		                    <br />
		                    <div class="form-group">
		                        <label>Date of obtaining title *</label><br />
		                        <input id="date_reception" type="text" name="date_reception" placeholder="mm/dd/yyyy" value=""  class="form-control" >
		                        <div id="e_date_reception"></div>
		                    </div>
		                    <br />
		                    <br />
		                    <div class="form-group">
		                        <label>Edición</label><br />
		                        <select name="edicion" id="edicion">
		                            <option value ="Select level" selected>Select level</option>
		                            <option value="normal">Normal</option>
		                            <option value="colecionista">Colecionista</option>
		                            <option value="limitada">limitada</option>
		                            <option value="e_lujo">Edicion de lujo</option>
		                        </select>
		                        <div id="edicion"></div>
		                    </div>

		                </div>
		                <div class="col-sm-5">
		                    <div class="form-group">
													<label>Numero de volumen</label><br>
													Vol 1 <input name="vol" id="vol" type="radio" value="1" checked>
			 										Vol 2 <input name="vol" id="vol" type="radio" value="2">
													Vol 3 <input name="vol" id="vol" type="radio" value="3">
													Vol 4 <input name="vol" id="vol" type="radio" value="4">
		                        <div id="e_vol"></div>
		                    </div>
		                    <br />
		                    <div class="form-group">
		                        <label>gustos  *</label><br>

		                        Drama  <input type="checkbox"  id="gustos" name="gustos[]" class="messageCheckbox" value="Drama">
		                        Comedia  <input type="checkbox" id="gustos" name="gustos[]" class="messageCheckbox" value="Comedia">
		                        Thriller  <input type="checkbox" id="gustos" name="gustos[]" class="messageCheckbox" value="Thriller">
		                        Aventura   <input type="checkbox" id="gustos" name="gustos[]" class="messageCheckbox" value="Aventura">
		                        <div id="e_gustos"></div>
		                    </div>
		                    <br />
		                    <br />
		                    <br />
		                    <br />
		                    <div class="form-group" id="progress">
		                        <div id="bar"></div>
		                        <div id="percent">0%</div >
		                    </div>
		                    <div class="msg"></div>
		                    <br/>
		                    <div id="dropzone" class="dropzone"></div><br/>
		                    <br/>
		                    <br/>
		                    <br/>
										</div>
		                    <div class="form-group">
		                        <button type="button" id="SubmitBooks" name="submit_user" class="btn btn-primary btn-lg" value="submit">Submit Message</button>
		                    </div>
		                </div>
		            </form>
		        </div><!--/.row-->
		    </div><!--/.container-->
		</section><!--/#contact-page-->
