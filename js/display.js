$(()=>{

    $.get('./scripts/index.php',function(data,status){
        let newData = {};
        let meter_details = JSON.parse(data);
        meter_details.forEach((ele)=>{
            newData = ele;
        })
       function consumeEnergy(availablePower){
            $('.power-output').text(availablePower + ' kw');
           
       }

       let availablePower = parseFloat(newData.available_credit);

       setInterval(()=>{
           availablePower= availablePower - 0.19999978 ;
          consumeEnergy(availablePower);
       },2200)

       
        $('.text-1 h2').text(newData.meter_number);

    })
})