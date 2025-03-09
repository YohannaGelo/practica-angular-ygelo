<?php
// La clase es abstracta pq no se instanciará
abstract class PcDB {
  private static $server = 'localhost';
  private static $db = 'coliney_general';
  private static $user = 'coliney';
  private static $password = 'cOliney7';

  // Creamos la conexión en estática, se llamaría PizzeriaDB::connectDB;
  public static function connectDB() {
    try {
      $connection = new PDO("mysql:host=".self::$server.";dbname=".self::$db.";charset=utf8", self::$user, self::$password);
    } catch (PDOException $e) {
      echo "No se ha podido establecer conexión con el servidor de bases de datos.<br>";
      die ("Error: " . $e->getMessage());
    }
 
    return $connection;
  }
}
