<?php
  include_once "../config/config.php";
	include_once "head.php";
?>
<body>
<?php
	include_once "header.php";
?>
<!-- //Form html -->
<div class="container">
    <div class="row">
      <div class="form_div col-8 align-self-center">
       
        <?php

           $sql= "SELECT * FROM patient  where email='" . $_SESSION["email"] . "'";   
           // $result = $conn->query($sql);
             $result = mysqli_query($conn, $sql);
               // if ($result->num_rows > 0) {
                 if(mysqli_num_rows($result) >0){
                   while($row = mysqli_fetch_assoc($result)){
      ?>
        <form action="php/add_doctor.php" method="post" enctype="multipart/form-data">
        <label>
            <img src='assets/img/uploadImage.png' for='fileToUpload' id="output"  style="width:200px;height:200px;border-radius:8px"/>
						 <input type="file" id='fileToUpload' name="fileToUpload" onchange="loadFile(event)"  hidden
             required>
					</label>
          <h1>Add Doctor </h1>
        <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></label>
            <input type="text" class="form-control" placeholder="Full name" name="name" required >
            <label class="input-group-text" id="basic-addon1">@</label>
            <input type="email" class="form-control" placeholder="Email" name="email" aria-label="Email" required >
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-map-marker"></i></label>
            <input type="text" class="form-control" placeholder="Address" name="address" aria-label="Address" required>
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-phone"></i></label>
            <input type="text" class="form-control" placeholder="contact" name="contact" aria-label="contact" required>
          </div>
         
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-id-card"></i></label>
            <input type="text" class="form-control" aria-label="userid" name="userid" placeholder='Login Id'> 
            <label class="input-group-text" for="inputGroupSelect02"><i class="fa-solid fa-lock"></i></label>
            <input type="text" class="form-control" aria-label="password" name="password" placeholder='Password'> 

           
          </div>
          <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-medal"></i></label>
            <input type="text" class="form-control" aria-label="expertise" name="expertise" placeholder='Expert In'>
            <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-cash"></i></label>
            <input type="number" class="form-control" aria-label="fee" placeholder='Fee' name="fee">
          </div>
          <button type="submit" class="btn btn-outline-light"><i class="fa-regular fa-pen-to-square"></i> Add</button>
          <!-- <div class="mb-3 my-4">
            <div id="emailHelp" class="form-text">Click here <a href="login.php">Login</a></div>
          </div> -->
        </form>
        <?php }  
      }?>
      </div>
    </div>
  </div>
<?php
	include_once "footer.php";

?>
</body>
</html>