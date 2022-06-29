<?php
session_start();
include "../../config/config.php";
$sql = "INSERT INTO feedback (email,feedback)	VALUES ('" . $_SESSION["email"] . "','" . $_POST["feedback"] . "')";
if (mysqli_query($conn,$sql) === TRUE) {
    header("location:../profile.php");
} else {
    header("location:../feedback.php");

}

$conn->close();
