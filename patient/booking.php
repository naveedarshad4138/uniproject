<?php
include('../config/config.php');

?>
<?php include('head.php'); ?>
<?php include('header.php'); ?>


<!-- result -->
<?php
$doc_id = isset($_GET['doc_id']) ? $_GET['doc_id'] : "";
?>
<!-- fetching doctor info -->
<?php
$sql = "SELECT * FROM doctor WHERE doc_id = $doc_id ";
// patient Result
$sql_patient = "SELECT * FROM patient WHERE email = '" . $_SESSION['email'] . "' ";
$result = mysqli_query($conn, $sql);
$result_patient = mysqli_query($conn, $sql_patient);
if (mysqli_num_rows($result) > 0) { ?>
    <!-- fetching doctor info -->

    <!-- 	html form booking info-->

    <body class="body">
        <div class="container">
            <div class="row">
                <div class="form_div col-8 align-self-center">
                    <h1>Book Appoinment </h1>
                    <?php  // output data of each row
                    $row = mysqli_fetch_assoc($result);
                    $row_patient = mysqli_fetch_assoc($result_patient);
                    ?>
                    <form action="php/booking.php" method="post">

                        <div class="mb-3 text-left">
                            <div class="form-text">Doctor Details </div>
                        </div>
                        <div class="input-group mb-3">
                            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></label>
                            <input type="text" class="form-control" name="dname" value="<?php echo $row["name"]; ?>" readonly>
                            <label class="input-group-text" id="basic-addon1">@</label>
                            <input type="number" class="form-control" name="dcontact" value="<?php echo $row["contact"]; ?>" readonly>
                        </div>
                        <div class="input-group mb-3">
                            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></label>
                            <input type="text" class="form-control" name="expertise" value="<?php echo $row["expertise"]; ?>" readonly>
                            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></label>
                            <input type="text" class="form-control" name="fee" value="<?php echo $row["fee"]; ?>" readonly>
                        </div>
                        <div class="my-3 text-left text-bold">
                            <div class="form-text">Patient Details </div>
                        </div>
                        <div class="input-group mb-3">
                            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></label>
                            <input type="text" class="form-control"  name="pname" value="<?php echo $row_patient['name']; ?>" readonly>
                            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-mobile"></i></label>
                            <input type="number" class="form-control" placeholder="Phone number" name="pcontact" value="<?php echo $row_patient['contact']; ?>" readonly>
                        </div>
                        <div class="input-group mb-3">
                            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-email">@</i></label>
                            <input type="email" class="form-control" name="email" value="<?php echo $row_patient['email']; ?>" readonly>
                            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-address"></i></label>
                            <input type="text" class="form-control" name="address" value="<?php echo $row_patient['address']; ?>" readonly>
                        </div>
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect02"><i class="fa-solid fa-calender"></i></label>
                            <input type="date" class="form-control" name="dates" required>
                            <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-filter"></i></label>
                            <select class="form-select" name="tyme" id="inputGroupSelect01" required>
                                <option value="">Select time</option>
                                <option value="11.00am">11.00am</option>
                                <option value="03.00pm">03.00pm</option>
                            </select>
                            <input type="hidden" name="userid" value="<?php echo $row['userid']; ?>">
                                               
                        </div>
                        <button class="btn btn-outline-light"><i class="fa-solid fa-user-plus"></i> Book Now</button>
                        <a href="searchDoctor.php" class="btn btn-outline-light"><i class="fa-solid fa-close"></i> Cancel</a>

                    </form>

                <?php    }

            $conn->close();

                ?>
                </div>
            </div>
        </div>
        <!-- Jquery Cdn -->
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <!-- Ajax cdn -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </body>

    <?php include('footer.php');
    ?>
    </body>

    </html>