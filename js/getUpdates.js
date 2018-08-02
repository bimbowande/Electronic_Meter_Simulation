$(()=>{

    //method for 
    let _getUpdates = () => {
        setInterval(()=>{
            $.get('./scripts/getUpdates.php',(data,status)=>{
               console.log( _recievedData(data));
                let {id,meter_number,available_credit} = _recievedData(data);
                $('.power-output').text(available_credit);
            })
        },2200)
    }

    let _recievedData  = _dataRecieved => {  
         _dataRecieved = JSON.parse(_dataRecieved).forEach(element => {
             _parsedData = element;  
        });
        return _parsedData;
    }

    let string ='';
    $('.command-line').click(function(){
       
        if(string.length >= 2){
            alert('Only two inputs required')
        }   else {
                string  += $(this).attr('data-value');
                $('.input-value').text(string );
        }
    })

    $('.arrow-btn-left').click(function(){
        let str_lngth = string.length-1;
        $('.display-val').text('');
        if(str_lngth < 0){
            alert('no value to delete');
        }
        string = string.substring(0,str_lngth);
        $('.input-value').text(string);
        
    })
    
    $('.arrow-btn-right').click(function(){
        if(string ===''){
            alert('no input yet');
        }
       $.get('./scripts/getUpdates.php',(data,status)=> {
           _recievedData(data);
           let display_val = action_btn(string,{id,meter_number,available_credit,totalcredit_used,currentload} = _recievedData(data));
           $('.display-val').text(display_val);
       })
    })

  // !!!!!   Return value fo the value passed, the value parameter takes in the Object !!!!!!!!!!
   let action_btn = (value,obj) => {
       //destructure the _parsedData
    let entry_value = value, r_value;

       switch(entry_value){
        case "01":
            r_value = available_credit;
        break;

        case "02":
            r_value = currentload;
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

   _getUpdates();
})