<?php
session_start();
include "../../config/config.php";
$currentpassword =  $_POST['currentpassword'];
$newpassword = $_POST['newpassword'];
$confirmpassword = $_POST['confirmpassword'];
//Get Passwor from database
$sql_password = "SELECT * FROM patient WHERE email= '" . $_SESSION["email"] . "'";
$result = mysqli_query($conn, $sql_password);
$row = mysqli_fetch_assoc($result);
$dbCurrentPassword =  $row['password'];
if (($newpassword === $confirmpassword) && ($currentpassword === $dbCurrentPassword)) {
	$updatePassword = "UPDATE patient SET password='" . $newpassword . "' WHERE email= '" . $_SESSION["email"] . "'";
	$passwordChanged = mysqli_query($conn, $updatePassword);
	if ($passwordChanged) {
		header("location:../../patient/profile.php");
	}
} else { ?>
	<?php
	include_once "../head.php";
	?>
	<!-- //login.css -->
	<link rel="stylesheet" href="../assets/css/user-css/patient_form.css">
	</head>

	<body class="body">
		<div class="container">
			<div class="row">
				<div class="form_div col-5 align-self-center">
					<h1>Invalid Password </h1>
					<div class="mb-3 my-4">
						<div id="emailHelp" class="form-text"><b>Try again</b> , Something worng </div>
					</div>

					<a href="../change_password.php"><button type="submit" class="btn btn-outline-light "><i class="fa-solid fa-lock"></i> Try Again</button>
					</a>

				</div>
			</div>
		</div>
		<!-- Jquery Cdn -->
		<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
		<!-- Ajax cdn -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	</body>

	</html>
<?php
	// header("location:../../patient/change_password.php");

}
