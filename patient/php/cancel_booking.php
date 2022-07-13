<?php
	include('../../config/config.php');
		$id=$_GET['id'];		
		$sql = "DELETE FROM booking WHERE `booking_id`='$id'";

		mysqli_query($conn, $sql);
        header("location:../view_booking.php");

	
?> 

