$(()=>{
    let getUpdates = setInterval(()=>{
        $.get('./scripts/getUpdates.php',(data,status)=>{
            console.log('data recieved is  '+ data);
        })
    },2200)
})