<?php
    include('./conn.php');
   
     $username = $_REQUEST['username'];
    
    $sql = "select * from users where username = '$username'";

    $exist = $mysqli->query($sql);

    if($exist->num_rows>0) {
        echo '{"has":false,"msg":"账号存在","username":"'.$username.'"}';
    } else {
        echo '{"has":true,"msg":"可以使用","username":"'.$username.'"}';
    }
?>