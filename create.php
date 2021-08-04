<?php
error_reporting(E_ALL);
  
// get database connection
include_once './database.php'; 
// instantiate product object
include_once './product.php';

$database = new Database();
$db = $database->getConnection();
$product = new Product($db);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $ww = password_hash($_POST['ww'], PASSWORD_DEFAULT);
    $mail = $_POST['mail'];
    $gender = $_POST['gender'];
    $search = $_POST['search'];
    $age = $_POST['age'];
    $location = $_POST['location'];
    $photo = $_POST['photo'];

    $product->name = $name;
    $product->ww = $ww;
    $product->mail = $mail;
    $product->gender = $gender;
    $product->search = $search;
    $product->age = $age;
    $product->location = $location;
    $product->photo = $photo;
    $product->hash = hash('sha512', rand());
    $product->create();
}

?>