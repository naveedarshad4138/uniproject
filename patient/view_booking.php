<?php include_once 'head.php'; ?>
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
											<th>Disease Type</th>
											<th>Doctor</th>
											<th>Appoinment Date</th>
											<th>Time</th>
                                            <th>Status</th>
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
                echo "<td>" . $row['status'] . "</td>";
                if($row['status'] === "pending"){
                echo "<td><a href='php/cancel_booking.php?id=" . $row['booking_id'] . "'>Cancel</a></td>";
                 }else{
                    echo "<td><a href=''>Appointment Done</a></td>";
                 }
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