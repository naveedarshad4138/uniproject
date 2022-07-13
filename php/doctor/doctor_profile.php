			<!-- update information -->

            <?php
			    session_start();
					include('../../config/config.php');	
					//File Upload
					$target_dir = "../../doctors/assets/img/doctors/";
					$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
          // echo $target_file;die;
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}	
					if(!basename($_FILES["fileToUpload"]["name"])){
            $sql="UPDATE doctor SET name='" .$_POST["name"]. "' ,email='" .$_POST["email"]."' , contact='" .$_POST["contact"]. "',address='" .$_POST["address"]. "', expertise='".$_POST["expertise"]."', fee='".$_POST["fee"]."' WHERE email='" .$_SESSION["userid"]. "'";	
          }else{
            $sql="UPDATE doctor SET name='" .$_POST["name"]. "' ,email='" .$_POST["email"]."' , contact='" .$_POST["contact"]. "',address='" .$_POST["address"]. "', expertise='".$_POST["expertise"]."', fee='".$_POST["fee"]."', pic='" .$_FILES["fileToUpload"]["name"]."' WHERE email='" .$_SESSION["userid"]. "'";	
          }
					if (mysqli_query($conn, $sql)) {
              header("location:../../doctors/index.php");
					} else {
							    echo "<script>alert('There was a Error Updating profile');</script>";
							}
						mysqli_close($conn);
					?> 
			<!-- update information End -->