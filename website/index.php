<?php

session_start();

if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !==true)
{
    header("location: login.php");
}


?>

<!DOCTYPE html>
<html>
<head>
	<!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	
	<title>Smart Home</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
	<!--<script src = paho-mqtt.js type="text/javascript"></script>-->
	<script src = helper.js type= "text/javascript"> </script>
	<script src = webclient_reciever.js type= "text/javascript"> </script>
	<script src = webclient_sender.js type= "text/javascript"> </script>

</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Radheshyam Bhawan</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="register.php">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.php">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="logout.php">Logout</a>
      </li>
    </ul>
  </div>
  <div class = "navbar-collapse collapse">
    <ul class = "navbar-nav ml-auto">
    <li class="nav-item active">
        <a class="nav-link" href=#><?php echo "Welcome " . $_SESSION['username'] ?></a>
      </li>
    </ul> 
  </div>
</nav>
<div class="container mt-4">
	<h3>Welcome to Radheshyam Bhawan</h3>
	</hr>
	</br><img id = "img_bulb"></img>
	</br><button id = "bulb" onclick = turnBulb() style = "width:100px; height:50px;text-align: center;" >Toggle Bulb</button></br>
	</br><img id = "img_fan"></img>
	</br><button id = "fan" onClick = turnFan() style = "width:100px; height:50px;text-align: center;">Toggle Fan</button></br>
	</br><img id = "img_socket"></img>
	</br><button id = "socket" onClick = turnSocket() style = "width:100px; height:50px;text-align: center;">Toggle Socket</button></br>
	</br><img id = "img_outBulb"></img>
	</br><button id = "outsideBulb" onClick = turnBulbOut() style = "width:100px; height:50px;text-align: center;">Toggle outside</button></br>
</div>
</body>
</html>