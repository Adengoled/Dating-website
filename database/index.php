<?php

include './read.php';
include './search.php';
include './create.php';

print_r(readproduct());
?>
<form action="create.php" method="post">

    <input type="text" name="name" id="name">
    <input type="text" name="ww" id="ww">
    <input type="text" name="mail" id="mail">
    <input type="text" name="gender" id="gender">
    <input type="text" name="search" id="search">
    <input type="text" name="age" id="age">
    <input type="text" name="location" id="location">
    <input type="file" name="photo" id="photo">
    <input type="submit" name="submit" id="submit">

</form>



<!--
Antwerpen
Henegouwen
Limburg
Luik
Luxemburg
Namen
Oost-Vlaanderen
Vlaams-Brabant