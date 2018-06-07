<?php
include('./MeterInfo.php');
class ConnectInfo implements MeterInfo{
    private $host = MeterInfo::DBHOST;
    private $dbuser = MeterInfo::DBUSER;
    private $dbpass = MeterInfo::DBPASS;
    public  $dbname = MeterInfo::DBNAME;
    public $conn;

    public function connect(){
       $this->conn = new mysqli($this->host,$this->dbuser,$this->dbpass,$this->dbname);
        $error = $this->conn->connect_error ? 'Error in connection' : $this->conn;
        return $error;
    }  
}
?>
