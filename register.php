<?php
  include_once "head.php";
?>
<!-- //login.css -->
<link rel="stylesheet" href="assets/css/user-css/login.css">
</head>
<body  class="body">
    <div class="container">
    <div class="row">
    <div class="form_div col-8 align-self-center">
        <h1>Register </h1>
        <form>      
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></label>
            <input type="text" class="form-control" placeholder="Username" required>
            <label class="input-group-text" id="basic-addon1">@</label>
            <input type="email" class="form-control" placeholder="Email" aria-label="Email"required>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></label>
            <input type="password" class="form-control" placeholder="Password" aria-label="Password" required>
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></label>
            <input type="password" class="form-control" placeholder="Confirm password" aria-label="Confirm Password"required>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-calendar"></i></label>
            <input type="date" class="form-control" placeholder="Age" aria-label="Age" required>
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-address-book"></i></label>
            <input type="text" class="form-control" placeholder="Address" aria-label="Address"required>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-phone"></i></label>
            <input type="number" class="form-control" placeholder="Mobile" aria-label="Mobile" required>
            <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-filter"></i></label>
            <select class="form-select" id="inputGroupSelect01" required>
              <option value="">Blod group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="A-">A-</option>
              <option value="O-">O-</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect02"><i class="fa-solid fa-filter"></i></label>
            <select class="form-select" id="inputGroupSelect02" required>
              <option value="">Doctor / Patient</option>
              <option value="1">Doctor</option>
              <option value="2">Patient</option>
            </select>
          </div> 
          <button type="submit" class="btn btn-outline-light"><i class="fa-solid fa-user-plus"></i> Register Now</button>
            <div class="mb-3 my-4">
                <div id="emailHelp" class="form-text">Click here <a href="login.php">Login</a></div>
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