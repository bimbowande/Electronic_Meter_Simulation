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

        /** loads */
        let load = [0.8986541,1.4322,0.19999978,0.17899978,2.567839,1.2334222,0.889489,0.23456765,0.87655242]

        /*************************## METHODS ##************************************* */
       /*
        *  method for sending updated power
        */
            let updates = (availablePower,meter_id,powerConsumed,currentLoad) => {
                let data_parsed = {
                    availablePower,meter_id,powerConsumed,currentLoad
            }
                /**
                 *  Post updated info to the database
                 */
                $.ajax({
                    url:"./scripts/update.php",
                    type:"POST",
                    data:data_parsed,
                    success:function(status,data){
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
            if(loadIndex > load.length-1){
                    loadIndex = 0;
            }

            //incerement of the powerConsumed
            powerConsumed += load[loadIndex];

            //available Power
            availablePower= availablePower - load[loadIndex];

            //updates
            updates(availablePower,meter_id,powerConsumed,load[loadIndex]);

        },2200);
    /***********!!! live feeds updates from data to display on the Meter !!!******************/

    })
})                           