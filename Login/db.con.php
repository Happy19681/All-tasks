<?php
$host = "localhost";
$name = "root";
$pwd = "";
$dbname = "clients";

$conn = new mysqli ($host,$name,$pwd,$dbname);
if ($conn -> connect_error) {
    die('Connection Failed:'. $conn -> connect_error)
}
