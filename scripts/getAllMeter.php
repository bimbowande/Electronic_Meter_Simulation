<?
include('../scripts/ConnectInfo.php');

class getAllMeter{
	private $query;
	private $meter_details;
	private $result;
	//
	public function __construct(){
		$testConn = new ConnectInfo();
        $this->connDB =  $testConn->connect();
	}
	
	##get all meters data
	public function getAllMeterData(){
		//recieved data
		$this->meter_details = array();
		
		//query statement
		$this->query = "SELECT id,Username,meter_number,Location from meter_details";
		
		//querying the database
		$this->result = mysqli_query($this->connDB,$this->query);
		
		if(!$this->result){
			echo("Error description: " . mysqli_error($this->connDB));
		}
		
		//
		elseif($this->result->num_rows > 0){
			while($this->row = $this->result->fetch_assoc()){
				$this->meter_details[] = $this->row;
			}
		}
		return $this->meter_details;
	}
	
	
	## get meter details by ID
	public function getEachMeter($id){
		#storage for data to be recieved
		$this->meter_details  = array();
		//query statement
		$this->query = "SELECT * from `meter_details` WHERE id = '$id'";
		
		$this->result = mysqli_query($this->connDB, $this->query);
		if(!$this->result){
			echo("Error description: " . mysqli_error($this->connDB));
		}
		
		if($this->result->num_rows > 0){
			while($this->row = $this->result->fetch_assoc()){
				$this->meter_details[] = $this->row;
			}
		}
		return $this->meter_details;
	} 
}

$display_value  = new getAllMeter();
?>