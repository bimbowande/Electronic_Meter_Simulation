$(()=>{
     if(typeof(EventSource) !== "undefined") {
            var source = new EventSource("./scripts/getUpdates.php");
            source.onmessage = event => {
                console.log('oya'+ event.data)
            };
        } else {
            console.log( "Sorry, your browser does not support server-sent events...");
        }
})