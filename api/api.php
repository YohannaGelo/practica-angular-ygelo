<?php
require_once 'Componente.php';
require_once 'TipoComponente.php';

header("Content-Type: application/json;charset=utf-8");
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

$metodo = $_SERVER['REQUEST_METHOD'];
$devolver = [];
$codEstado = 200;

// Manejar la solicitud de preflight (OPTIONS)
if ($metodo === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    switch ($metodo) {
        case 'GET':
            if (isset($_GET['id'])) {
                $componente = Componente::getComponenteById($_GET['id']);
                if ($componente) {
                    $devolver = $componente;
                } else {
                    $codEstado = 404;
                    $devolver = ['error' => 'Componente no encontrado'];
                }
            } elseif (isset($_GET['tipo'])) {
                $tipos = TipoComponente::getTiposComponentes();
                $devolver = $tipos;
            } else {
                $devolver = Componente::getComponentes();
            }
            break;

        case 'POST':
            $datos = json_decode(file_get_contents("php://input"), true);
            $componente = new Componente(0, $datos['nombre'], $datos['descripcion'], $datos['url_imagen'], $datos['tipo_id']);
            $componente->insert();
            $devolver = ['mensaje' => 'Componente insertado correctamente'];
            break;

        case 'PUT':
            $datos = json_decode(file_get_contents("php://input"), true);
            $componente = new Componente($datos['id'], $datos['nombre'], $datos['descripcion'], $datos['url_imagen'], $datos['tipo_id']);
            $componente->update();
            $devolver = ['mensaje' => 'Componente actualizado correctamente'];
            break;

        case 'DELETE':
            $datos = json_decode(file_get_contents("php://input"), true);
            $componente = new Componente($datos['id']);
            $componente->delete();
            $devolver = ['mensaje' => 'Componente eliminado correctamente'];
            break;

        default:
            $codEstado = 405;
            $devolver = ['error' => 'Método no permitido'];
            break;
    }
} catch (Exception $e) {
    $codEstado = 500;
    $devolver = ['error' => $e->getMessage()];
}

http_response_code($codEstado);
echo json_encode($devolver);