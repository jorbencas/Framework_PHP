<br><br><br><br><br><br><br><br><br>
<script src="<?php echo CONTACT_JS_PATH; ?>contact.js"></script>

<div class="container">
    <form>
        <div class="row">
            <div>
                 <div class="form-group">
                     <label for="name"> Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" value="Jorge"/>
                    <span id="err_name"style='color:red;'></span>
                </div>
                 <div class="form-group">
                     <label for="email"> Email Address</label>
                     <div class="input-group">
                      <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" value="jorbencas@gmail.com"/></div>
                       <span id="err_email"style='color:red;'></span>
                     </div>
                 </div>
                 <div class="form-group">
                  <label for="subject"> Subject</label>
                  <select id="subject" name="subject" class="form-control" required="required">
                      <option value="dv" selected="">Choose One:</option>
                      <option value="General">General</option>
                      <option value="Technical">Technical</option>
                      <option value="Other">Other</option>
                  </select>
                    <span id="err_subject"style='color:red;'></span>
                 </div>
             </div>
             <div>
                 <div class="form-group">
                     <label for="name"> Message</label>
                     <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required" placeholder="Message"></textarea>
                     <span id="err_message"style='color:red;'></span>
                </div>
            </div>
            <div>
                <button class="btn btn-primary" type="button" id="boton"> Send Message</button>
            </div>
        </div>
    </form>
</div> <!-- /container -->
