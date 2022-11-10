<?php

$username = $_POST['username'];

$password = $_POST['password'];

echo $username;
echo $password;

// database connection

$con = new mysqli("localhost","root","","foodorder");

if($con->connect_error) {
	die("Failed to connect : ".$con->connection_error);
} else {
	$stmt = $con->prepare("select * from user where username = ?");
	$stmt->bind_param("s", $username);
	$stmt->execute();
	$stmt_result = $stmt->get_result();
	if($stmt_result->num_rows > 0) {
		$data = $stmt_result->fetch_assoc();
		if($data['password'] === $password){
			echo "<h2>Login Successfully</h2>";
	} else {
		echo "<h2>Invalid username or password</h2>";
	}
} else {
    echo "<h2>Invalid username or password</h2>";    
}
}
?>