<?php
$username = $_POST['username'];

$email = $_POST['email'];

$password = $_POST['password'];

$con = new mysqli("localhost","root","","foodorder");

if($con->connect_error) {
	die("Failed to connect : ".$con->connection_error);
} else {
	$stmt = $con->prepare("insert into user(username,email,password)
    values(?,?,?)");
	$stmt->bind_param("sss",$username,$email,$password);
	$stmt->execute();
	echo "Registration Successfull";
    $stmt->close();
    $con->close();
}
?>
<script>
    setTimeout(function(){
       window.location.href = '../index.html';
    }, 5000);
</script>
