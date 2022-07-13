<?php
  include_once "head.php";
?>
<!-- //login.css -->
<link rel="stylesheet" href="assets/css/user-css/login.css">
</head>
<body class="body">
    <div class="container">
    <div class="row">
    <div class="form_div col-5 align-self-center">
    <a class='float-right' href="../login.php"><b>Patient</b></a>
        <h1>Doctor Login </h1>
        <form action="../php/doctor/doctor_login.php" method="post">
            <div class="input-group mb-3"> 
              <label class="input-group-text" id="basic-addon1">@</label>            
              <input type="email" class="form-control" id="userid" aria-describedby="emailHelp" placeholder="&#x40; Enter your Id" name="userid"required>
            </div>
            <div class="input-group mb-3">   
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></label>
              <input type="password" class="form-control" placeholder="Password" name="password"required>            
            </div>            
            <!-- <div class="input-group mb-3">
                <label class="input-group-text" for="select3"><i class="fa-solid fa-filter"></i></label>
                <select class="form-select" id="select3" required>
                  <option value="">Doctor / Patient</option>
                  <option value="1">Doctor</option>
                  <option value="2">Patient</option>
                </select>
              </div>  -->
            <button type="submit" class="btn btn-outline-light "><i class="fa-solid fa-lock-open"></i> Login Start</button>
            <div class="mb-3 my-4">            
                <div id="emailHelp" class="form-text">Click here <a href="register.php">Register</a></div>
            </div>
        </form>
    </div>
</div>
</div>
<!-- Jquery Cdn -->
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<!-- Ajax cdn -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</body>
</html>