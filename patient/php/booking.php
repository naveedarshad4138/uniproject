<?php
include "../../config/config.php";
        $sql = "INSERT INTO booking (dname,userid,dcontact,expertise,fee, pname,pcontact,email,address,dates,tyme,status)
        VALUES ('" . $_POST["dname"] . "','" . $_POST["userid"] . "','" . $_POST["dcontact"] . "','" . $_POST["expertise"] . "', '" . $_POST["fee"] . "','" . $_POST["pname"] . "','" . $_POST["pcontact"] . "','" . $_POST["email"] . "','" . $_POST["address"] . "','" . $_POST["dates"] . "','" . $_POST["tyme"] . "','pending')";
        if ($conn->query($sql) === TRUE) {

            header("location:../view_booking.php");

        } else {
            echo "<script>alert('There was an Error')<script>";
        }

        $conn->close();
    
    ?>