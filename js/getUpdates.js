$(()=>{
    let _recievedData  = (_dataRecieved) => {
        console.log(_dataRecieved);
    }


    let _getUpdates = setInterval(()=>{
        $.get('./scripts/getUpdates.php',(data,status)=>{
            _recievedData(data);
        })
    },2200)
})