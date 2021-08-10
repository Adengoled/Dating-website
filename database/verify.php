<?php
    include 'getusers.php';
    if(isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['hash']) && !empty($_GET['hash'])){
        $getusers = new Getusers();
        $stmt = $getusers->setverify($_GET['email'], $_GET['hash']);
        header("Location: index.php");
        exit();

    }else{
        echo 'Invalid approach';
    }