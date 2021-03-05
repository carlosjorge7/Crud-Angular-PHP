<?php
	$serverName = 'TECNOFUN-CJ\SQLEXPRESS';
	$uid = "carlo";
	$pwd = "123";
	
	$db = "tecdinvoice";
	$connectionInfo = array( "Database"=>$db, "UID"=>$uid, "PWD"=>$pwd, "CharacterSet"=>"UTF-8");
	
	$conn = sqlsrv_connect($serverName, $connectionInfo);

    if($conn){
        //echo "Conexion establecida";
    }
    else{
        echo "Error en la conexion";
        die(print_r(sqlsrv_errors(), true));
    }
?>
