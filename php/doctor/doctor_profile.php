			<!-- update information -->

            <?php
			
                    session_start();
							include('../../config/config.php');				
							$sql="UPDATE doctor SET name='" .$_POST["name"]. "' ,email='" .$_POST["email"]."' , contact='" .$_POST["contact"]. "',address='" .$_POST["address"]. "', expertise='".$_POST["expertise"]."', fee='".$_POST["fee"]."' WHERE email='" .$_SESSION["userid"]. "'";	
                            print_r($sql);	
							if (mysqli_query($conn, $sql)) {
						        // echo "<script>alert(' Record updated successfully');</script>";
                                header("location:../../doctors/index.php");
							} else {
							    echo "<script>alert('There was a Error Updating profile');</script>";
							}
						mysqli_close($conn);
					?> 
			<!-- update information End -->