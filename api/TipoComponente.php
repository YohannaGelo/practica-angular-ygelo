<?php
require_once 'PcDB.php';


class TipoComponente
{
    public int $id;
    public string $nombre;
    public string $descripcion_educativa;
    public string $imagen_url; // Nuevo campo

    function __construct($id = 0, $nombre = "", $descripcion_educativa = "", $imagen_url = "")
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->descripcion_educativa = $descripcion_educativa;
        $this->imagen_url = $imagen_url; // Inicializar el nuevo campo
    }

    // Recupera todos los tipos de componentes
    public static function getTiposComponentes()
    {
        $conexion = PcDB::connectDB();
        $seleccion = "SELECT * FROM tipos_componentes";
        $consulta = $conexion->query($seleccion);
        $tipos = [];

        while ($registro = $consulta->fetchObject()) {
            $tipos[] = new TipoComponente($registro->id, $registro->nombre, $registro->descripcion_educativa, $registro->imagen_url); // Incluir imagen_url
        }

        return $tipos;
    }

    // Recupera un tipo de componente específico por su ID
    public static function getTipoComponenteById($id)
    {
        $conexion = PcDB::connectDB();
        $seleccion = "SELECT * FROM tipos_componentes WHERE id='$id'";
        $consulta = $conexion->query($seleccion);

        if ($consulta->rowCount() > 0) {
            $registro = $consulta->fetchObject();
            return new TipoComponente($registro->id, $registro->nombre, $registro->descripcion_educativa, $registro->imagen_url); // Incluir imagen_url
        } else {
            return false; // Si no se encuentra
        }
    }
}