<?php
require_once 'PcDB.php';

class Componente
{

    public int $id;
    public string $nombre;
    public string $descripcion;
    public string $url_imagen;
    public string $tipo;

    function __construct($id = 0, $nombre = "", $descripcion = "", $url_imagen = "", $tipo = "")
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->url_imagen = $url_imagen;
        $this->tipo = $tipo;
    }

    public function getUrlImagen()
    {
        return $this->url_imagen;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getDescripcion()
    {
        return $this->descripcion;
    }

    public function getTipo()
    {
        return $this->tipo;
    }

    // Inserta un nuevo componente en la base de datos
    public function insert()
    {
        $conexion = PcDB::connectDB();
        $insercion = "INSERT INTO componentes (nombre, descripcion, url_imagen, tipo) VALUES ('$this->nombre', '$this->descripcion', '$this->url_imagen', '$this->tipo')";
        $conexion->exec($insercion);
    }

    // Elimina un componente existente por su ID
    public function delete()
    {
        $conexion = PcDB::connectDB();
        $borrado = "DELETE FROM componentes WHERE id='$this->id'";
        $conexion->exec($borrado);
    }

    // Actualiza un componente existente
    public function update()
    {
        $conexion = PcDB::connectDB();
        $actualizar = "UPDATE componentes SET nombre='$this->nombre', descripcion='$this->descripcion', url_imagen='$this->url_imagen', tipo='$this->tipo' WHERE id='$this->id'";
        $conexion->exec($actualizar);
    }

    // Recupera todos los componentes
    public static function getComponentes()
    {
        $conexion = PcDB::connectDB();
        $seleccion = "SELECT * FROM componentes";
        $consulta = $conexion->query($seleccion);
        $componentes = [];

        while ($registro = $consulta->fetchObject()) {
            $componentes[] = new Componente($registro->id, $registro->nombre, $registro->descripcion, $registro->url_imagen, $registro->tipo);
        }

        return $componentes;
    }

    // Recupera un componente específico por su ID
    public static function getComponenteById($id)
    {
        $conexion = PcDB::connectDB();
        $seleccion = "SELECT * FROM componentes WHERE id='$id'";
        $consulta = $conexion->query($seleccion);

        if ($consulta->rowCount() > 0) {
            $registro = $consulta->fetchObject();
            return new Componente($registro->id, $registro->nombre, $registro->descripcion, $registro->url_imagen, $registro->tipo);
        } else {
            return false; // Si no se encuentra
        }
    }
}