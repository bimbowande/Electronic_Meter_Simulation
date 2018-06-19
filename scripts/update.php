<?php
include('./ConnectInfo.php');

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

class UpdateData{
    private $query;
    public function __construct(){
        $testConn = new ConnectInfo();
        $this->connDB =  $testConn->connect();
    } 
    public function getUpdates($availablePower,$meter_id,$powerConsumed){
        if($availablePower > 0){
            $this->query = "UPDATE meter_details SET available_credit = '$availablePower',totalcredit_used = '$powerConsumed' WHERE id='$meter_id'";
            $this->result = mysqli_query($this->connDB,$this->query);
            echo  $error = $this->result ? 'succesful upload':$this->result->error;
    
        }
    }
}

$updates =  new UpdateData();

if(isset($_POST)){
    $availablePower = $_POST['availablePower'];
    $meter_id = $_POST['meter_id'];
    $powerConsumed = $_POST['powerConsumed'];
    $collect_update =  $updates->getUpdates($availablePower,$meter_id,$powerConsumed);
   echo 'boss';
} else echo 'no data sent';
?>