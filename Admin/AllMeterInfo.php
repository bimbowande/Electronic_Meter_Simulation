<?php include_once('../scripts/getAllMeter.php');
     $display_value  = new getAllMeter();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="../styles/allmeter.css">
</head>
<body>
	<div class='meter-info-curtain'>
	<?foreach ($display_value->getAllMeterData() as $dt =>$data ){
		echo "<div class='meter-user'>{$data['id']} <p>{$data['Username']}</p></div>";
	}?>
</div>
</body>
</html>