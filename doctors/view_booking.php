<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/user-css/theme.css">
    <link rel="stylesheet" href="assets/css/user-css/index.css">
    <link rel="stylesheet" href="assets/css/user-css/table.css">
</head>
<body>
    <?php
    include_once "header.php";

    ?>
    <div class="container table_container">

        <!-- Search Result Table-->

        <?php
        include('../config/config.php');
        $sql = " SELECT * FROM booking WHERE email = '" . $_SESSION["email"] . "'  ";
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);

        if ($count >= 1) {
            echo "       
                                <table class='table form_div  table-bordered' id='dataTable' width='100%' cellspacing='0'>
                                    <thead>
										<tr>
											<th>My Disease Type</th>
											<th>My Doctor</th>
											<th>Appoinment Date</th>
											<th>Time</th>
											<th>Action</th>
										</tr>
                                	</thead>";
            while ($row = mysqli_fetch_array($result)) {
                echo "<tbody>";
                echo "<tr>";
                echo "<tr>";
                echo "<td>" . $row['expertise'] . "</td>";
                echo "<td>" . $row['dname'] . "</td>";
                echo "<td>" . $row['dates'] . "</td>";
                echo "<td>" . $row['tyme'] . "</td>";
                echo "<td><a href='php/cancel_booking.php?id=" . $row['booking_id'] . "'>Cancel</a></td>";
        ?>
        <?php

                echo "</tr>";
                echo "</tbody>";
            }
            echo "</table>";
        } else {
            print "<p align='center'>Sorry, Not booking yet..!!!</p>";
        }
        // echo "</div>";

        ?>
    </div>
    <?php include "footer.php"; ?>
</body>