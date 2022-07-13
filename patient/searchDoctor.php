<?php include 'head.php'; ?>
<body>
    <?php
    include_once "header.php";
    ?>
    <div class="container table_container">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <!-- <form action="searchDoctorTables.php" method="post"> -->

            <div class="input-group mb-3">
                <select class="form-select" id="inputGroupSelect01" name="expertise" type="text" required>
                    <option value="">Select Category</option>
                    <option>Medicine</option>
                    <option>Heart</option>
                    <option>Bone</option>
                    <option>Neurologist</option>
                    <option>kedney</option>
                    <option>Cardiologist</option>
                    <option>Plastic Surgeon</option>
                    <option>General Physician</option>
                </select>
                <button style="width: 20%;" name="submit" class="btn btn-light my-0">Search</button>
            </div>
        </form>
        <!-- Search Result Table-->

        <?php
    include('../config/config.php');
    if(isset($_POST['submit'])){
    $sql = " SELECT * FROM doctor WHERE expertise = '" . $_POST["expertise"] . "' ";
    $result = mysqli_query($conn, $sql);
    $count = mysqli_num_rows($result);
    if ($count >= 1) {
        echo "       
                                <table class='table form_div  table-bordered' id='dataTable' width='100%' cellspacing='0'>

                                    <thead>
                                    <tr>
                                    <th>SL.</th>
                                    <th>Name</th>
                                    <th>Address</th>                                   
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>Expertise in</th>
                                    <th>Fee</th>
                                    <th>Book</th>                                    
                                </tr>
                                </thead>";
        while ($row = mysqli_fetch_array($result)) {
            echo "<tbody>";
            echo "<tr>";
            echo "<td>" . $row['doc_id'] . "</td>";
            echo "<td>" . $row['name'] . "</td>";
            echo "<td>" . $row['address'] . "</td>";

            echo "<td>" . $row['contact'] . "</td>";
            echo "<td>" . $row['email'] . "</td>";

            echo "<td>" . $row['expertise'] . "</td>";
            echo "<td>" . $row['fee'] . "</td>";
    ?>
            <td><a href="booking.php?doc_id=<?php echo $row['doc_id'] ?>">Book</a></td>
    <?php

            echo "</tr>";
            echo "</tbody>";
        }
        echo "</table>";
    } else {
        print "<p align='center'>Sorry, No match found for your search result..!!!</p>";
    }
    // echo "</div>";
}
    ?>
    </div>
    <?php
    include_once "footer.php";
    ?>
</body>
</html>