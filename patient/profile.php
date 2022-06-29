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

           $sql= "SELECT * FROM patient  where email='" . $_SESSION["email"] . "'";   
           // $result = $conn->query($sql);
             $result = mysqli_query($conn, $sql);
               // if ($result->num_rows > 0) {
                 if(mysqli_num_rows($result) >0){
                   while($row = mysqli_fetch_assoc($result)){
                   

      ?>
        <form action="../php/patient/profile.php" method="post">
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></label>
            <input type="text" class="form-control" placeholder="Your name" name="name" value="<?php echo $row['name']; ?>" required >
            <label class="input-group-text" id="basic-addon1">@</label>
            <input type="email" class="form-control" placeholder="Email" name="email" aria-label="Email"value="<?php echo $row['email']; ?>" required>
          </div>
          <!-- <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></label>
            <input type="password" class="form-control" placeholder="Password" aria-label="Password"value="="<?php //echo $row['']; ?>" required>
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></label>
            <input type="password" class="form-control" placeholder="Confirm password" aria-label="Confirm Password"value="="<?php //echo $row['']; ?>" required>
          </div> -->
          <div class="input-group mb-3">
            <label class="input-group-text" for="age" id="basic-addon1"><i class="fa-solid fa-calendar"></i></label>
            <input type="text" class="form-control" id="age" placeholder="Age" name="age" aria-label="Age"value="<?php echo $row['age']; ?>" required>
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-address-book"></i></label>
            <input type="text" class="form-control" placeholder="Address" name="address" aria-label="Address"value="<?php echo $row['address']; ?>" required>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-phone"></i></label>
            <input type="number" class="form-control" placeholder="Mobile" name="contact" aria-label="Mobile"value="<?php echo $row['contact']; ?>" required>
            <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-filter"></i></label>
            <input type="text" class="form-control" aria-label="bGroup" name="bgroup"value="<?php echo $row['bgroup']; ?>" disabled>
          </div>
          <!-- <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect02"><i class="fa-solid fa-filter"></i></label>
            <select class="form-select" id="inputGroupSelect02"value="="<?php //echo $row['']; ?>" required>
              <option value="="<?php //echo $row['']; ?>">Doctor / Patient</option>
              <option value="1">Doctor</option>
              <option value="2">Patient</option>
            </select>
          </div> -->
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