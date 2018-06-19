$(()=>{
    $.get('./scripts/index.php',(data,status) => {
        
        let newData = {};
        let meter_details = JSON.parse(data);
        meter_details.forEach((ele)=>{
            newData = ele;
        })

        /**************************VARIABLES ************************************************* */
        let meter_id = parseInt(newData.id);
        let availablePower = parseFloat(newData.available_credit);
        let powerConsumed = 0;
        let loadIndex = 0;
        let load = [0.8986541,1.4322,0.19999978,0.17899978,2.567839,1.2334222,0.889489,0.23456765,0.87655242]


        /*************************## METHODS ##************************************* */
        
        /*
         * method for changing the available power
         */
            let consumeEnergy = availablePower => {
                $('.power-output').text(availablePower + ' kw');   
            }

       /*
        *  method for sending updated power
        */
            let updates = (availablePower,meter_id,powerConsumed) => {
                let data_parsed = {
                    availablePower,meter_id,powerConsumed
            }
                /**
                 *  Post updated info to the database
                 */
                $.ajax({
                    url:"./scripts/update.php",
                    type:"POST",
                    data:data_parsed,
                    success:function(status,data){
                        console.log('data sent is ')
                        console.log(data_parsed);
                    },
                    failure:function(){
                        console.log('failure')
                    }
                })
            }
    


    /*******************###  UPDATE CHANGES IN  DATABASE #####***************************************** */

        //updating the database on interval
        let autoUpdate = setInterval(()=>{
            loadIndex++;
            if(loadIndex >load.length-1){
                    loadIndex = 0;
            }
            //incerement of the powerConsumed
            powerConsumed += load[loadIndex];
            //console.log('power consumed is ' + powerConsumed);

            //available Power
            availablePower= availablePower - load[loadIndex];

            consumeEnergy(availablePower);
            //updates
            updates(availablePower,meter_id,powerConsumed);

             $.get('./scripts/getUpdates.php',(data,status)=>{
                 console.log('data recieved is  '+ data);
             })
        },2200);



    /***********!!! live feeds updates from data to display on the Meter !!!******************/
    })
})                           