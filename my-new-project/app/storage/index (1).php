<?php

$fileName = $_FILES["myFile"]["name"];
$fileSize = $_FILES["myFile"]["size"];

      move_uploaded_file($_FILES["myFile"]["tmp_name"],
	            "/storage/" . $_FILES["myFile"]["name"]);

$data = array(array('name'=>$fileName,'size'=>$fileSize));
$result = array("result"=>$data);
header('Content-Type: application/json');
echo json_encode($result);
?>
