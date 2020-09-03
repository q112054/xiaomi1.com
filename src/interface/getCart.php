<?php
    include('./conn.php');
    $idList = $_REQUEST['ids'];

    
    $sql = "select * from product where p_id in ($idList)";
   

    $res = $mysqli->query($sql);

    $mysqli->close();

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;
?>