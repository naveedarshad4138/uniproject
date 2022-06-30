<?php 
// <!-- login validation -->
session_start();
          include('../../config/config.php');
          // <!-- login validation -->
              $_SESSION['adminstatus']="";                
                //   if(isset($_POST["submit"])){   
                  $sql= "SELECT * FROM doctor WHERE userid= '" . $_POST["userid"]."' AND password= '" . $_POST["password"]."'";   
                  // $result = $conn->query($sql);
                    $result = mysqli_query($conn, $sql);
                      // if ($result->num_rows > 0) {
                        if(mysqli_num_rows($result) >0){
                          $_SESSION["userid"]= $_POST["userid"];
                          $_SESSION['adminstatus']= "yes";
                          header("location:../../doctors/index.php");
                            // echo "<script>location.replace('../../patient/profile.php');</script>";
                            // echo "u are supposed to redirect to ur profile";
                        } else {
                            echo "<span style='color:red;'>Invalid username or password</span>";
                        }
                $conn->close();		
            //   }

        // <!-- login validation End-->
?>