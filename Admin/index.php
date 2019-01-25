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
				<form class='form' action='<? echo $_SERVER['PHP_SELF']?>'>
					<div><h3>Admin Login</h3></div>
					<div class="form-group">
						<label for="">Username</label>
						<input  class='form-control' type="text" />
					</div>
					<div class="form-group">
						<label for="">Password</label>
						<input class='form-control' type="password"/>
					</div>
					<div class='form-group'>
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