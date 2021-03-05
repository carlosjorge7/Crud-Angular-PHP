<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Content-Type: application/json');
    
    $json = file_get_contents('php://input');
    $params = json_decode($json);
    
    include './connection.php'; 

    sqlsrv_query($conn,"EXEC p_registro_add '$params->codigo',
                                            '$params->nombre',
                                            '$params->direccion',
                                            '$params->poblacion',
                                            '$params->cp',
                                            '$params->ciudad',
                                            '$params->telefono',
                                            '$params->email';");

    class Result {}
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'registro guardado';
    
    
    echo json_encode($response);  
?>
