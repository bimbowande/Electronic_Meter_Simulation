<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
			<!-- Bootstrap -->
	<link rel="stylesheet" href="../css/bootstrap.min.css">
			<!-- admin styles --->
	<link rel="stylesheet" href="../styles/admin-login.css">
</head>
<body>
	<section class='container-fluid body-container'>
		<div class='col-lg-10 form-parent'>
			<div class='col-lg-10 form-container'>
				<form class='form'  method='POST' action='<? echo $_SERVER['PHP_SELF']?>'>
					<h5 class='text-underline text-blue'>BEDC POWER MONITORING SYSTEM</h5>
					<div class='form-header'><h5>Admin Login</h5></div>
					<div class="form-group">
						<label for="">Username</label>
						<input  class='form-control' placeholder='e.g Alfred' type="text" />
					</div>
					<div class="form-group">
						<label for="">Password</label>
						<input class='form-control' placeholder='e.g **********' type="password"/>
					</div>
					<div class='form-group'>
						<button class='btn btn-lg btn-primary btn-choice'>Login</button>
					</div>
					<div class='form-group'>
						<p>Are you a customer? <a href='<?echo $_SERVER['PHP_SELF']. '/'.'cutomer'?>'>Login here</a></p>
					</div>
				</form>
			</div>
		</div>
	</section>
		<!--  Jquery--->
	<script src='../js/jquery.min.js'></script>
		<!--  Bootstrap --->
	<script src='../js/bootstrap.js'></script>
</body>
</html>