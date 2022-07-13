<?php
	include('../../config/config.php');
		$id=$_GET['id'];		
		$sql = "UPDATE booking SET status='confirmed' WHERE `booking_id`='$id'";
		mysqli_query($conn, $sql);
        header("location:../myAppoinment.php");
?> 

