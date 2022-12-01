<?php
session_start();
unset($_SESSION['username']);
$email = $_POST['email'];

$password = $_POST['password'];

// database connection

$con = new mysqli("localhost","root","","foodorder");

if($con->connect_error) {
	die("Failed to connect : ".$con->connection_error);
} else {
	$stmt = $con->prepare("select * from user where email = ?");
	$stmt->bind_param("s", $email);
	$stmt->execute();
	$stmt_result = $stmt->get_result();
	if($stmt_result->num_rows > 0) {
		$data = $stmt_result->fetch_assoc();
		if($data['password'] === $password){
			echo "<h2>Login Successfully</h2>";
			header('Location:/main.html?Login_successfull');
			$username = $data['username'];
			$_SESSION['username'] = $username;
		
	} else {
		echo "<h2>Invalid email or password</h2>";
			header('Location:/index.html?msg=Login_failed');
	}
} else {
    echo "<h2>Invalid email or password</h2>";
			header('Location:/index.html?msg=Login_failed');			   
}
}
?>
