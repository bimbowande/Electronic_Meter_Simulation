<?php
include_once('./scripts/ConnectInfo.php');

$meter_id = range(1,10);
shuffle($meter_id);

class Meter{
   private $query;
   public $result;
   private $connDB;

   #database info
    public function __construct(){
        $testConn = new ConnectInfo();
        $this->connDB =  $testConn->connect();
    }
    
    #display'6
    public function displayData(){
        $data = [];
        $this->query = "SELECT * from meter_details";
        $this->result = mysqli_query($this->connDB,$this->query);
        if($this->result->num_rows > 0){
         for($i=0;$i<$this->result->num_rows;$i++){
             $this->result->data_seek($i);
             $this->row = $this->result->fetch_array(MYSQLI_ASSOC);
             $data[] = $this->row;
         }
        }
        return $data;
    }
}


?>