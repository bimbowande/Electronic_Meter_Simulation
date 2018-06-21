$(()=>{
    _parsedData = {};
    let _recievedData  = (_dataRecieved) => {
      
         _dataRecieved = JSON.parse(_dataRecieved).forEach(element => {
             _parsedData = element;  
        });
        return _parsedData;
    }

   let RefreshELem = data_func => {
       let {id,meter_number,availablePower,available_credit} = data_func;
       console.log(available_credit);
      
   }
    let _getUpdates = setInterval(()=>{
        $.get('./scripts/getUpdates.php',(data,status)=>{
           RefreshELem(_recievedData(data));
        })
    },2200)


})