<?php
include('./ConnectInfo.php');
class UpdateData{
    private $query;
    public function __construct(){
        $testConn = new ConnectInfo();
        $this->connDB =  $testConn->connect();
    } 
    public function getUpdates($availablePower,$meter_id){
        if($availablePower > 0){
            $this->query = "UPDATE meter_details SET available_credit = '$availablePower' WHERE id='$meter_id'";
            $this->result = mysqli_query($this->connDB,$this->query);
            echo  $error = $this->result ? 'succesful upload':$this->result->error;
        }
    }
}

$updates =  new UpdateData();
if(isset($_POST)){
    $availablePower = $_POST['availablePower'];
    $meter_id = $_POST['meter_id'];
    $updates->getUpdates($availablePower,$meter_id);
} else echo 'no data sent';
?>