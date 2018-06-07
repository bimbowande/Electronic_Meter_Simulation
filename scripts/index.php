<?php
include_once('./ConnectInfo.php');

$meter_id = range(1,10);
shuffle($meter_id);

class Meter{
   private $connDB;

   #database info
    public function __construct(){
        $testConn = new ConnectInfo();
        $this->connDB =  $testConn->connect();
    }
}

$meterInstance = new Meter();

?>