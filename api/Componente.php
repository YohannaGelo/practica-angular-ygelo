<?php
require_once 'PcDB.php';
require_once 'TipoComponente.php';

class Componente
{
    public int $id;
    public string $nombre;
    public string $descripcion;
    public string $url_imagen;
    public int $tipo_id;

    function __construct($id = 0, $nombre = "", $descripcion = "", $url_imagen = "", $tipo_id = 0)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->url_imagen = $url_imagen;
        $this->tipo_id = $tipo_id;
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

    public function getTipoId()
    {
        return $this->tipo_id;
    }

    // Inserta un nuevo componente en la base de datos
    public function insert()
    {
        $conexion = PcDB::connectDB();
        $insercion = "INSERT INTO componentes (nombre, descripcion, url_imagen, tipo_id) VALUES ('$this->nombre', '$this->descripcion', '$this->url_imagen', '$this->tipo_id')";
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
        $actualizar = "UPDATE componentes SET nombre='$this->nombre', descripcion='$this->descripcion', url_imagen='$this->url_imagen', tipo_id='$this->tipo_id' WHERE id='$this->id'";
        $conexion->exec($actualizar);
    }

    // Recupera todos los componentes con información del tipo
    public static function getComponentes()
    {
        $conexion = PcDB::connectDB();
        $seleccion = "SELECT c.*, t.nombre AS tipo_nombre, t.descripcion_educativa, t.imagen_url AS tipo_imagen_url 
                  FROM componentes c 
                  LEFT JOIN tipos_componentes t ON c.tipo_id = t.id";
        $consulta = $conexion->query($seleccion);
        $componentes = [];

        while ($registro = $consulta->fetch(PDO::FETCH_ASSOC)) { // Usar fetch en modo asociativo
            $componentes[] = $registro; // Devolver el array asociativo directamente
        }

        return $componentes;
    }

    public static function getComponenteById($id)
    {
        $conexion = PcDB::connectDB();
        $seleccion = "SELECT c.*, t.nombre AS tipo_nombre, t.descripcion_educativa, t.imagen_url AS tipo_imagen_url 
                  FROM componentes c 
                  LEFT JOIN tipos_componentes t ON c.tipo_id = t.id 
                  WHERE c.id='$id'";
        $consulta = $conexion->query($seleccion);

        if ($consulta->rowCount() > 0) {
            return $consulta->fetch(PDO::FETCH_ASSOC); // Devolver el array asociativo directamente
        } else {
            return false; // Si no se encuentra
        }
    }
}
