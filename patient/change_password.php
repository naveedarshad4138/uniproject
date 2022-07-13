<?php
include "head.php";
?>
<body>
<?php
include "header.php";
?>
  <div class="container">
    <div class="row">
      <div class="form_div col-5 align-self-center">
        <h1>Change password </h1>
        <form action="php/change_password.php" method="post">

          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></label>
            <input type="password" class="form-control" placeholder="Current password" name="currentpassword" required>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></label>
            <input type="password" class="form-control" placeholder="New password" name="newpassword" required>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></label>
            <input type="password" class="form-control" placeholder="Confirm new password" name="confirmpassword" required>
          </div>

          <button type="submit" class="btn btn-outline-light "><i class="fa-solid fa-lock"></i> Change now</button>

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