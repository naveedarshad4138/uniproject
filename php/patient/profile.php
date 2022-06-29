			<!-- update information -->

            <?php
                    session_start();
							include('../../config/config.php');				
							$sql="UPDATE patient SET name='" .$_POST["name"]. "' ,age='" .$_POST["age"]."' , contact='" .$_POST["contact"]. "',address='" .$_POST["address"]. "', email='".$_POST["email"]."' WHERE email='" .$_SESSION["email"]. "'";	
                            // print_r($sql);	
							if (mysqli_query($conn, $sql)) {
						        // echo "<script>alert(' Record updated successfully');</script>";
                                header("location:../../patient/profile.php");
							} else {
							    echo "<script>alert('There was a Error Updating profile');</script>";
							}
						mysqli_close($conn);
					?> 
			<!-- update information End -->