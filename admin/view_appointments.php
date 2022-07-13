<?php include 'head.php'; ?>
<body>
    <?php
    include_once "header.php";
    //Check Category Selected Or Not
    $category = isset($_POST["expertise"]);
    ?>
    <div class="container table_container">
        <?php
            include('../config/config.php');
                    $sql = " SELECT * FROM booking";
                $result = mysqli_query($conn, $sql);
                $count = mysqli_num_rows($result);
                if ($count >= 1) {
                    echo "<table class='table form_div  table-bordered' id='dataTable' width='100%' cellspacing='0'>
                        <thead>
                            <tr>
                                <th>Dr. Name</th>
                                <th>Doctor Contact</th>
                                <th>Expert At</th> 
                                <th>Patient Name</th>
                                <th>Patient Contact</th>
                                <th>Date</th>
                                <th>Time</th>                                 
                            </tr>
                        </thead>";
                        echo "<tbody>";
                        while ($row = mysqli_fetch_array($result)) {
                            echo "<tr>";
                                echo "<td>" . $row['dname'] . "</td>";
                                echo "<td>" . $row['dcontact'] . "</td>";
                                echo "<td>" . $row['expertise'] . "</td>";
                                echo "<td>" . $row['pname'] . "</td>";
                                echo "<td>" . $row['pcontact'] . "</td>";
                                echo "<td>" . $row['dates'] . "</td>";
                                echo "<td>" . $row['tyme'] . "</td>";

                            echo "</tr>";
                        }
                    ?>
                    <?php       
                    echo "</tbody>";
                    echo "</table>";
                } 
    ?>
    </div>
    <?php
    include_once "footer.php";
    ?>
</body>
</html>