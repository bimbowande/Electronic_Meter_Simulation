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
		<div class='col-lg-10'>
			<div class='col-lg-10'>
				<form action='<?$_SERVER['PHP_SELF']?>'>
					<div><h3>Admin Login</h3></div>
					<div class="form-group col-lg-4">
						<label for="">Username</label>
						<input  class='form-control' type="text" />
					</div>
					<div class="form-group col-lg-4">
						<label for="">Password</label>
						<input class='form-control' type="password"/>
					</div>
					<div class='col-lg-4'>
						<button class='btn btn-lg btn-primary'>Login</button>
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