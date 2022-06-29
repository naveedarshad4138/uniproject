<?php 
// <!-- login validation -->
session_start();
          include('../../config/config.php');
          // <!-- login validation -->
              $_SESSION['patient']="";                
                //   if(isset($_POST["submit"])){   
                  $sql= "SELECT * FROM patient WHERE email= '" . $_POST["email"]."' AND password= '" . $_POST["password"]."'";   
                  // $result = $conn->query($sql);
                    $result = mysqli_query($conn, $sql);
                      // if ($result->num_rows > 0) {
                        if(mysqli_num_rows($result) >0){
                          $_SESSION["email"]= $_POST["email"];
                          $_SESSION['patient']= "yes";
                          header("location:../../patient/profile.php");
                            // echo "<script>location.replace('../../patient/profile.php');</script>";
                            // echo "u are supposed to redirect to ur profile";
                        } else {
                            echo "<span style='color:red;'>Invalid username or password</span>";
                        }
                $conn->close();		
            //   }

        // <!-- login validation End-->
?>