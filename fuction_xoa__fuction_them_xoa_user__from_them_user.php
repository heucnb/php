<?php
include "setup/fuction_ket_noi_csdl.php";
		

    
    


    $trai=safeSQL($_POST["post_8"]);
    include "setup/check_token_and_post.php";
$username_post=safeSQL($_POST["post_1"]);
$password_post=safeSQL($_POST["post_2"]);	

header("Content-type: text/html; charset=utf-8"); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($conn, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// láy dữ liệu lên
$sql = "DELETE  FROM `login` WHERE `username` = '".$username_post."' AND `password` = '".$password_post."' AND `trai` = '".$trai."' ";
$result = mysqli_query($conn, $sql);

echo 'Đã xóa' ;

 
  


    



?>	
