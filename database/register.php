<?php

include 'getusers.php';
session_start();
//$_SESSION['user'] = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $ww = password_hash($_POST['ww'], PASSWORD_DEFAULT);
    $mail = $_POST['mail'];
    $gender = $_POST['gender'];
    $search = $_POST['search'];
    $age = $_POST['age'];
    $location = $_POST['location'];
    // $photo = $_POST['photo'];
    $hash = hash('sha512', rand());

    $getusers = new Getusers();
    $getusers->register($name, $ww, $mail, $gender, $search, $age, $location, $hash);
    sendMail($mail, $hash);

}

function sendMail($mail, $hash) {
  date_default_timezone_set('Etc/UTC');
  require './PHPMailer/PHPMailerAutoload.php';
  $email1 = $mail;
  $email2 = 'erhen3000@gmx.com';
  //Create a new PHPMailer instance
  $mail = new PHPMailer;
  //Tell PHPMailer to use SMTP
  $mail->isSMTP();
  //Enable SMTP debugging
  // 0 = off (for production use)
  // 1 = client messages
  // 2 = client and server messages
  $mail->SMTPDebug = 0;
  //Ask for HTML-friendly debug output
  $mail->Debugoutput = 'html';
  //Set the hostname of the mail server
  $mail->Host = 'smtp.gmail.com';
  // use
  // $mail->Host = gethostbyname('smtp.gmail.com');
  // if your network does not support SMTP over IPv6
  //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
  $mail->Port = 587;
  //Set the encryption system to use - ssl (deprecated) or tls
  $mail->SMTPSecure = 'tls';
  //Whether to use SMTP authentication
  $mail->SMTPAuth = true;
  // include './.con/creds.php';
  //Username to use for SMTP authentication - use full email address for gmail
  $mail->Username = "opleidingphpgenk@gmail.com";
  //Password to use for SMTP authentication
  $mail->Password = "Opleiding.21";
  //Set who the message is to be sent from
  $mail->setFrom('noreply@phpdate.be');
  //Set an alternative reply-to address
  $mail->addReplyTo('noreply@phpdate.be');
  //Set who the message is to be sent to
  $mail->addAddress(
  $email2);
  //Set the subject line
  $mail->Subject = 'Een email van phpdate';
  //Read an HTML message body from an external file, convert referenced images to embedded,
  //convert HTML into a basic plain-text alternative body
  //$mail->msgHTML(file_get_contents('contents.php'), dirname(__FILE__));
  //Replace the plain text body with one created manually
  $mail->Body = "
  hallo,

  Pease verify your email address by clicking on the following link:

  http://127.0.0.1/phpdate/Dating-website/db/verify.php?email=$email&hash=$hash

  ";
  //Attach an image file
  //$mail->addAttachment('images/phpmailer_mini.png');
  //send the message, check for errors
  if ($mail->send()) {
      echo "Message sent!";
      header("Location: login.php");
      exit();

  } else {
      echo "Mailer Error: " . $mail->ErrorInfo;
  }
}

?>

<html>
<form method="post">

    <input type="text" name="name" id="name">
    <input type="text" name="ww" id="ww">
    <input type="text" name="mail" id="mail">
    <input type="text" name="gender" id="gender">
    <input type="text" name="search" id="search">
    <input type="text" name="age" id="age">
    <input type="text" name="location" id="location">
    <!-- <input type="file" name="photo" id="photo"> -->

    <input type="submit" name="submit" id="submit">

</form>
</html>
