<?php
error_reporting(E_ALL);
class Product {
  
    // database connection and table name
    private $conn;
    private $table_name = "profile";
  
    // object properties
    public $id;
    public $name;
    public $ww;
    public $mail;
    public $gender;
    public $search;
    public $age;
    public $location;
    public $photo;
    public $hash;
    // public $gender;
    // public $search;
    // public $age;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // read products
    function read(){    
        // select all query
        $query = "SELECT * FROM " . $this->table_name;
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }

    // used when filling up the update product form
    function readOne(){
    
        // query to read single record
        $query = "SELECT
                    c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
                FROM
                    " . $this->table_name . " p
                    LEFT JOIN
                        categories c
                            ON p.category_id = c.id
                WHERE
                    p.id = ?
                LIMIT
                    0,1";
    
        // prepare query statement
        $stmt = $this->conn->prepare( $query );
    
        // bind id of product to be updated
        $stmt->bindParam(1, $this->id);
    
        // execute query
        $stmt->execute();
    
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
        // set values to object properties
        $this->name = $row['name'];
        $this->price = $row['price'];
        $this->description = $row['description'];
        $this->category_id = $row['category_id'];
        $this->category_name = $row['category_name'];
    }

    // search products
    function search($keywords){
    
        // select all query
        $query = "SELECT
                    c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
                FROM
                    " . $this->table_name . " p
                    LEFT JOIN
                        categories c
                            ON p.category_id = c.id
                WHERE
                    p.name LIKE ? OR p.description LIKE ? OR c.name LIKE ?
                ORDER BY
                    p.created DESC";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $keywords=htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";
    
        // bind
        $stmt->bindParam(1, $keywords);
        $stmt->bindParam(2, $keywords);
        $stmt->bindParam(3, $keywords);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }

    // create product
    function create(){
    
        // query to insert record
        $query = "INSERT INTO
                    " . $this->table_name . "
                SET
                    name=:name, ww=:ww, mail=:mail, gender=:gender, search=:search, age=:age, location=:location, photo=:photo, hash=:hash";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->ww=htmlspecialchars(strip_tags($this->ww));
        $this->mail=htmlspecialchars(strip_tags($this->mail));
        $this->gender=htmlspecialchars(strip_tags($this->gender));
        $this->search=htmlspecialchars(strip_tags($this->search));
        $this->age=htmlspecialchars(strip_tags($this->age));
        $this->location=htmlspecialchars(strip_tags($this->location));
        $this->photo=htmlspecialchars(strip_tags($this->photo));
        $this->hash=htmlspecialchars(strip_tags($this->hash));    
        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":ww", $this->ww);
        $stmt->bindParam(":mail", $this->mail);
        $stmt->bindParam(":gender", $this->gender);
        $stmt->bindParam(":search", $this->search);
        $stmt->bindParam(":age", $this->age);
        $stmt->bindParam(":location", $this->location);
        $stmt->bindParam(":photo", $this->photo);
        $stmt->bindParam(":hash", $this->hash);

        // execute query
        if($stmt->execute()){
            return true;
        }
        
        return false;
        
    }
}
?>