<?php
include('./ConnectInfo.php');

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

class GetUpdates{
    private $query;
    public function __construct(){
        $testConn = new ConnectInfo();
        $this->connDB =  $testConn->connect();
    } 
    

}
?>