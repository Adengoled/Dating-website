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
    $mail = $_POST['email'];
    $gender = rand(0, 1);//$_POST['gender'];
    $search = rand(0, 1);//$_POST['search'];
    $age = rand(80, 99);//$_POST['age'];
    $location = '2000';//$_POST['location'];
    $photo = '/var/www/html/phpdate/better-love/Dating-website/new/src/assets/profiles/pic1.jpg';//$_POST['photo'];

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
    header('Location: http://localhost:43783/login');
}

?>