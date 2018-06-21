<?php
include('./ConnectInfo.php');
session_start();

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

class GetUpdates{
    private $query;
    public function __construct(){
        $testConn = new ConnectInfo();
        $this->connDB =  $testConn->connect();
    } 
    public function fetchUpdates($meter_id){
        $this->updates = array();
        $this->query = "SELECT * FROM  `meter_details` WHERE id = '$meter_id'";
        $this->result = mysqli_query($this->connDB,$this->query); 
        if($this->result->num_rows > 0){
            while($this->row = $this->result->fetch_assoc()){
                $this->updates[] = $this->row;
            }
            return $this->updates;
        }
    }
}
$doGetUpdates = new GetUpdates();
 $_SESSION['meter_id'];

 $doFetchUpdates = $doGetUpdates->fetchUpdates($_SESSION['meter_id']);
 print json_encode($doFetchUpdates);
?>