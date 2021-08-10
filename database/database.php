<?php
class Database{
  
    // specify your own database credentials
    private $host = "192.168.0.237";
    private $db_name = "phpdate";
    private $username = "usse";
    private $password = "Lu\$iF3r1e36";
    public $conn;
  
    // get the database connection
    public function getConnection(){
  
        $this->conn = null;
  
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
  
        return $this->conn;
    }
}
?>