<?php include_once 'head.php'; ?>
<body>
    <?php
    include_once "header.php";

    ?>
    <div class="container table_container">

        <!-- Search Result Table-->

        <?php
        include('../config/config.php');
        $sql = "SELECT * FROM booking WHERE userid='".$_SESSION["userid"]."'";
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);

        if ($count >= 1) {
            echo "       
                                <table class='table form_div  table-bordered' id='dataTable' width='100%' cellspacing='0'>
                                    <thead>
										<tr>
                                            <th>Patient Name</th>
                                            <th>Contact</th>
                                            <th>E-mail</th>
                                            <th>address</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Action</th>
										</tr>
                                	</thead>";
            while ($row = mysqli_fetch_array($result)) {
                echo "<tbody>";
                echo "<tr>";
                echo "<tr>";
                echo "<td>".$row['pname']."</td>";
                echo "<td>".$row['pcontact']."</td>";
                echo "<td>".$row['email']."</td>";
                echo "<td>".$row['address']."</td>";
                echo "<td>".$row['dates']."</td>";
                echo "<td>".$row['tyme']."</td>";
                if($row['status'] === "pending"){
                    echo "<td><a href='php/confirm_booking.php?id=" . $row['booking_id'] . "'>Confirm</a></td>";
                    echo "<td><a href='php/cancel_booking.php?id=" . $row['booking_id'] . "'>Cancle</a></td>";
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