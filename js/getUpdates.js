$(()=>{
   $('.arrow-btn').attr('disabled',true);

    _parsedData = {};
    let _recievedData  = _dataRecieved => {
      
         _dataRecieved = JSON.parse(_dataRecieved).forEach(element => {
             _parsedData = element;  
        });
        return _parsedData;
    }

    //!!!!!!!!!!!!!!!!!!! read value based on click !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let getValue = () => {
         let string  = '';
        $('.command-line').click(function(){
            let val = $(this).data('value');
            string += val;
            if(string.length > 2){
                alert("Invalid input");
            }
            else{
                $('.power-output').text(string);
                $('.arrow-btn').attr('disabled',false);
            }
        })
    }

    console.log(document.querySelector('.power-output').innerHTML);

  // !!!!!   Return value fo the value passed, the value parameter takes in the Object !!!!!!!!!!
   let action_btn = (value) => {
       //destructure the _parsedData
    let {id,meter_number,available_credit} = value;
    let entry_value = "01", r_value;
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

       r_value;
   }


    let _getUpdates = setInterval(()=>{
        $.get('./scripts/getUpdates.php',(data,status)=>{
           action_btn(_recievedData(data));
        })
    },2200)
})