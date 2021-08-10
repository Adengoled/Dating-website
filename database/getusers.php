<?php

// phpinfo();
error_reporting(E_ALL); ini_set('display_errors', 1);

class Getusers {
    private $host;
    private $db;
    private $user;
    private $pass;
    private $charse;
    
    function __construct(string $host = "192.168.0.237",
                         string $db = 'phpdate',
                         string $user = "usse",
                         string $pass = "Lu\$iF3r1e36",
                         string $charset = 'utf8mb4') {
        $this->host = $host;
        $this->db = $db;
        $this->user = $user;
        $this->pass = $pass;
        $this->charset = $charset;
    }
    
    function con() {
        $dsn = "mysql:host=$this->host:3306;dbname=$this->db;charset=$this->charset";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        try {
            return new PDO($dsn, $this->user, $this->pass, $options);

        } catch (PDOException $e) {
            throw new PDOException($e->getMessage(), (int)$e->getCode());
        }

    }

    function getdata() {
        $pdo = Getusers::con();
        $stmt = $pdo->query('SELECT * FROM profile');
        return $stmt;
    }//getdata

    function setdata($user, $ww) {
        $pdo = Getusers::con();
        $sql = 'INSERT INTO login (user, ww) VALUES (?,?)';
        $pdo->prepare($sql)->execute([$user, $ww]);
    }//setdata

    function setemail($email, $hash, $user) {
        $pdo = Getusers::con();
        $sql = 'UPDATE login SET email = (?), hash = (?) WHERE user = (?)';
        $pdo->prepare($sql)->execute([$email, $hash, $user]);
    }//setemail

    function setverify($email, $hash) {
        $pdo = Getusers::con();
        $sql = 'UPDATE login SET isadmin = 1 WHERE email = (?) AND hash = (?)';
        $pdo->prepare($sql)->execute([$email, $hash]);
    }//setverify

    function setphoto($photo, $email, $id) {
        $pdo = Getusers::con();
        $sql = 'UPDATE login SET profilephoto = (?) WHERE email = (?) AND id = (?)';
        $pdo->prepare($sql)->execute([$photo, $email, $id]);
    }//setverify
    
}//Getusers   UPDATE Users SET weight = 160, desiredWeight = 145 WHERE id = 1;

?>

