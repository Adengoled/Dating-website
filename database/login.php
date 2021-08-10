<?php
    include './getusers.php';
    session_start();
    $_SESSION['user'] = "";
    echo "1";
    print_r($_POST);
    if ((isset($_POST['email'])) && (isset($_POST['ww']))) {
        echo "2";
        $getusers = new Getusers();
        $stmt = $getusers->getdata();
        //$user = $stmt->fetch();
        //var_dump($user);
        while ($user = $stmt->fetch()) {
            echo "3";

            if (($user['mail'] == $_POST['email']) && (password_verify($_POST['ww'], $user['ww']))) {
                // $_SESSION['user'] = $user['user'];
                $_COOKIE['email'] = $user['email'];
                // $_SESSION['ID'] = $user['ID'];
                // $_SESSION['active'] = $user['active'];
                // $_SESSION['profilephoto'] = $user['profilephoto'];
                header("Access-Control-Allow-Origin: *");
                header('Content-Type: application/json');
                echo json_encode($result);
                header('Location: http://localhost:4200/dashboard');
                // header("Location: index.php");
                exit();

            // } else if (($user['user'] == $_POST['user']) && ($user['ww'] != $_POST['ww'])) {
            //     $_SESSION['user'] = $_POST['user'];
            //     echo "password does't match";
            // }
        }

        // if ((strlen($_SESSION['user']) == 0) && (strlen($_POST['ww']) > 0)) {
        //     echo "no such user";

        // } else if ((strlen($_SESSION['user']) == 0) && (strlen($_POST['ww']) == 0)) {
        //     echo "not enough info";
        // }
    }
    }
echo "4";
?>
