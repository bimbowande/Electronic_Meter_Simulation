$(()=>{
    let parsed_value = {};
    let meter_raw_details,meter_details;
    $.get('./scripts/index.php',(data,status)=>{
            meter_raw_details = JSON.parse(data);
            meter_raw_details.forEach(parsed_data => {
                meter_details = parsed_data;
            });
            console.log(meter_details.id);
           
        }
    )
})