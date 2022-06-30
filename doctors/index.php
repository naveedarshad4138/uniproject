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
        <h1>Your Profile </h1>


        <?php

            $sql="SELECT * FROM doctor where userid='" . $_SESSION["userid"] . "'";
           // $result = $conn->query($sql);
             $result = mysqli_query($conn, $sql);
               // if ($result->num_rows > 0) {
                 if(mysqli_num_rows($result) >0){
                   while($row = mysqli_fetch_assoc($result)){
                   

      ?>
        <form action="../php/doctor/doctor_profile.php" method="post">
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></label>
            <input type="text" class="form-control" placeholder="Your name" name="name" value="<?php echo $row['name']; ?>" required >
            <label class="input-group-text" id="basic-addon1">@</label>
            <input type="email" class="form-control" placeholder="Email" name="email" aria-label="Email"value="<?php echo $row['email']; ?>" required readonly>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-map-marker"></i></label>
            <input type="text" class="form-control" placeholder="Address" name="address" aria-label="Address"value="<?php echo $row['address']; ?>" required>
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-phone"></i></label>
            <input type="text" class="form-control" placeholder="contact" name="contact" aria-label="contact"value="<?php echo $row['contact']; ?>" required>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-id-card"></i></label>
            <input type="text" class="form-control" aria-label="userid" name="userid"value="<?php echo $row['userid']; ?>" readonly>
            <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-medal"></i></label>
            <input type="text" class="form-control" aria-label="expertise" name="expertise"value="<?php echo $row['expertise']; ?>">
          </div>
          <div class="input-group mb-3">
           
            <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-cash"></i></label>
            <input type="text" class="form-control" aria-label="fee" name="fee"value="<?php echo $row['fee']; ?>">
          </div>
          <button type="submit" class="btn btn-outline-light"><i class="fa-regular fa-pen-to-square"></i> Update Profile</button>
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