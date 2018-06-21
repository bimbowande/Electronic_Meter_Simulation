$(()=>{
    _parsedData = {};
    let _recievedData  = _dataRecieved => {
      
         _dataRecieved = JSON.parse(_dataRecieved).forEach(element => {
             _parsedData = element;  
        });
        return _parsedData;
    }

   let RefreshELem = data_func => {
       let {id,meter_number,availablePower,available_credit} = data_func;
       console.log(data_func);
   }
   
   let action_btn = (value) => {
       let entry_value,r_value;
       switch(entry_value){
        case "01":
            r_value = available_credit;
        break;

        case "02":
            r_value = available_credit;
        break;

        case "03":
            r_value = available_credit;
        break;

        case "04":
            r_value = available_credit;
        break;

        case "05":
            r_value = available_credit;
        break;

        case "06":
            r_value = last_billed_amount
        break;
        case "07":
            r_value = available_credit;
        break;

        case "08":
            r_value  = totalcredit_used;
        break;

        case "09":
            r_value = available_credit;
        break;

        case "10":
            r_value = meter_number;
        break;

        default:
            r_value ='Invalid Input';
       }

       return r_value;
   }

    let _getUpdates = setInterval(()=>{
        $.get('./scripts/getUpdates.php',(data,status)=>{
           RefreshELem(_recievedData(data));
        })
    },2200)


})