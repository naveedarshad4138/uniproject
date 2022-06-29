<?php
include "head.php";
?>
<!-- //login.css -->
<link rel="stylesheet" href="assets/css/user-css/login.css">
</head>
<body>
<?php
include "header.php";
?>
  <div class="container">
    <div class="row">
      <div class="form_div col-5 align-self-center">
        <h1>My feedback </h1>
        <form action="php/feedback.php" method="post">
          <div class="input-group mb-3">          
            <textarea class="form-control p-4" name="feedback" required rows="5" placeholder="Write your feedback here ......"></textarea>
          </div>
          <button class="btn btn-outline-light "><i class="fa-solid fa-paper-plane"></i> Send</button>
        </form>
      </div>
    </div>
  </div>
  <!-- Jquery Cdn -->
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <!-- Ajax cdn -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <?php
  include "footer.php";
  ?>
</body>

</html>