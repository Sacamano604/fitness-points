<?php 

$db_name = 'fitness-points';
$hostname = 'localhost';
$username = 'root';
$password = 'root';


$dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);




switch($_GET["action"]){
    case "activities":
        $sql = 'SELECT * FROM activityList';
        $stmt = $dbh->prepare( $sql );
        $stmt->execute();
        $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
        $json = json_encode( $result );
    break;

    case "fitnessActivities":
        $sql = 'SELECT * FROM fitnessList';
        $stmt = $dbh->prepare( $sql );
        $stmt->execute();
        $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
        $json = json_encode( $result );       
    break;
}







header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
echo $json;

?>