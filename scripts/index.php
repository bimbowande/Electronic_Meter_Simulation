<?php
include_once('./ConnectInfo.php');

$meter_id = range(1,10);
shuffle($meter_id);

class Meter{
   private $query;
   public $result;
   private $meter;
   private $connDB;

   #database info
    public function __construct(){
        $testConn = new ConnectInfo();
        $this->connDB =  $testConn->connect();
        $this->meter = $this->meterId();
    }
    
    #meterdata
    public function meterId(){
        $meter_id = range(1,10);
        shuffle($meter_id);
        $m_id  = $meter_id[3];
        return $m_id;
    }
    #display'6
    public function displayData(){
        $data = [];
        $this->query = "SELECT * from meter_details WHERE id='$this->meter'";
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
$data = new Meter();
$sentdata = json_encode($data->displayData());
echo $sentdata;
?>