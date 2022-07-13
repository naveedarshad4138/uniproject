<?php include 'head.php'; ?>
<body>
    <?php
    include_once "header.php";
    //Check Category Selected Or Not
    $category = isset($_POST["expertise"]);
    ?>
    <div class="container table_container">
        <!-- <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <div class="input-group mb-3">
                <select class="form-select" id="inputGroupSelect01" name="expertise" type="text" required>
                    <?php if($category){ ?>
                    <option readonly><?php echo $_POST["expertise"]." (Selected)" ; ?></option>
                   <?php }else{ ?>
                  
                    <option value="">Select Category</option>
                   <?php } ?>
                    <option>Heart</option>
                    <option>Bone</option>
                    <option>Eyes</option>
                    <option>kedney</option>
                    <option>Cardiologist</option>
                    <option>Plastic Surgeon</option>
                    <option>General Physician</option>
                </select>
                <button style="width: 20%;" name="submit" class="btn btn-light my-0">Search</button>
            </div>
        </form> -->
        <!-- Search Result Table-->

        <?php
            include('../config/config.php');
            // if(isset($_POST['submit'])){
                // echo $_POST["expertise"];
                // if($category){
                // $sql = " SELECT * FROM pa WHERE expertise = '" . $_POST["expertise"] . "' ";
                // }else{
                    $sql = " SELECT * FROM feedback";
                // }
                $result = mysqli_query($conn, $sql);
                $count = mysqli_num_rows($result);
                if ($count >= 1) {
                    echo "<table class='table form_div  table-bordered' id='dataTable' width='100%' cellspacing='0'>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Feedback</th>                                   
                                                         
                            </tr>
                        </thead>";
                        echo "<tbody>";
                        while ($row = mysqli_fetch_array($result)) {
                            echo "<tr>";
                                echo "<td>" . $row['email'] . "</td>";
                                echo "<td>" . $row['feedback'] . "</td>";
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