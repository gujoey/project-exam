<?php
//Creates a class called Contact
class Establishment
{
  //To add more variables create the variable name here and set below
    public $establishmentName;
    public $establishmentEmail;
    public $imageUrl;
    public $price;
    public $maxGuests;
    public $googleLat;
    public $googleLong;
    public $description;
    public $selfCatering;
    public $id;
}

//Creates new establishment and sets properties
if($_POST["selfCatering"]=="on"){
  $selfService = false;
}else{
  $selfService = true;
}

$newEstablishment = new Establishment();
$newEstablishment->establishmentName = $_POST["establishmentName"];
$newEstablishment->establishmentEmail = $_POST["establishmentEmail"];
$newEstablishment->imageUrl = $_POST["imageUrl"];
$newEstablishment->price = $_POST["price"];
$newEstablishment->maxGuests = $_POST["maxGuests"];
$newEstablishment->googleLat = $_POST["googleLat"];
$newEstablishment->googleLong = $_POST["googleLong"];
$newEstablishment->description = $_POST["description"];
$newEstablishment->selfCatering = $selfService;
$newEstablishment->id = $_POST["id"];

//Adds object to array
$establishmentsList = file_get_contents('establishments.json');
$jsonInput = json_decode($establishmentsList, true);
array_push($jsonInput, $newEstablishment);

//Writes array to JSON file
$jsonData = json_encode($jsonInput);
file_put_contents('establishments.json', $jsonData);

//redirects to contact success page
header("Location: https://fixforsikring.no/holidaze/#/admin/new-establishment-created");
die();
?>