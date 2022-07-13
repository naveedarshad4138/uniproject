<?php
session_start();
if(!$_SESSION['email']){
	header("location:../../doctor_appointment/login.php");
}

?>
<header>
    <div class="topbar">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 text-sm">
            <div class="site-info">
              <a href="#"><span class="mai-call text-primary"></span> +00 123 4455 6666</a>
              <span class="divider">|</span>
              <a href="#"><span class="mai-mail text-primary"></span> mail@example.com</a>
            </div>
          </div>
          <div class="col-sm-4 text-right text-sm">
            <div class="social-mini-button">
              <a href="#"><span class="mai-logo-facebook-f"></span></a>
              <a href="#"><span class="mai-logo-twitter"></span></a>
              <a href="#"><span class="mai-logo-dribbble"></span></a>
              <a href="#"><span class="mai-logo-instagram"></span></a>
            </div>
          </div>
        </div> <!-- .row -->
      </div> <!-- .container -->
    </div> <!-- .topbar -->
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="../index.php"><span class="text-primary">Doctor</span>-Appointment</a>
        <form action="#">
          <!-- <div class="input-group input-navbar">
             <div class="input-group-prepend">
              <span class="input-group-text" id="icon-addon1"><span class="mai-search"></span></span>
            </div> 
            <input type="text" class="form-control" placeholder="Enter keyword.." aria-label="Username" aria-describedby="icon-addon1">
          </div> -->
        </form>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupport">
          <ul class="navbar-nav  ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="profile.php">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="searchDoctor.php">Search Doctors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="view_booking.php">View Appointments</a>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="blog.php">News</a> -->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="change_password.php">Change Password</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="feedback.php">Feed Back</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="php/logout.php">Logout</a>
            </li>
            <!-- <li class="nav-item">
              <a class="btn btn-primary ml-lg-3" href="login.php">Login / Register</a>
            </li> -->
          </ul>
        </div> <!-- .navbar-collapse -->
      </div> <!-- .container -->
    </nav>
  </header>
  