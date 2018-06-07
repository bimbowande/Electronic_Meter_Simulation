$(()=>{
    $.get('./scripts/index.php',function(data,status){
        let newData = {};
        let meter_details = JSON.parse(data);
        // console.log(meter_details);
        meter_details.forEach((ele)=>{
            newData = ele;
        })
        console.log(newData);
       
        $('.power-output').text(newData.available_credit);
        $('.text-1 h2').text(newData.meter_number);
    })
})