<?php
include_once('../../config/config.php');
$target_dir = "../assets/img/doctors/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image


$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
if($check !== false) {
    // echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
} else {
    echo "File is not an image.";
    $uploadOk = 0;
}

// Check if file already exists
// if (file_exists($target_file)) {
//     echo "<script>alert('Sorry, file already exists.');</script>";
//     $uploadOk = 0;
// }
//aloow certain file formats
if($imageFileType != "jpg" && $imageFileType !="png" && $imageFileType !="jpeg" && $imageFileType !="gif"){
    echo "sorry, only jpg, jpeg, Png & gif files are allowed.";
    $uploadok=0;
}	
else{
if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        include('../config.php');
        $sql1 = "SELECT * FROM doctor WHERE userid='".$_POST["userid"]."' OR email= '" . $_POST["email"] . "' ";
          $result = $conn->query($sql1);
          if($result->num_rows > 0){
               echo "<script>alert('Sorry, Userid or E-mail already exist!');</script>";
          }
          else{
        $sql = "INSERT INTO doctor (name,address,contact,email,expertise,userid,fee,password,pic)
            VALUES ('" . $_POST["name"] . "','" . $_POST["address"] . "','" . $_POST["contact"] . "','" . $_POST["email"] . "', '" . $_POST["expertise"] . "','" . $_POST["userid"] . "','" . $_POST["fee"] . "','" . $_POST["password"] . "','" . basename($_FILES["fileToUpload"]["name"]) ."' )";

            if (mysqli_query($conn,$sql) === TRUE) {
                header('location:../view_doctor.php');
                // echo "<script>alert('New Doctor Has been Added Successfully!');</script>";
            } else {
                echo "<script>alert('There was an Error')<script>";
            }
        }

        $conn->close();
} else {
    echo "<script>alert('sorry there was an error!');</script>";
}


}
?>