"use strict"; 

class Socket{

    constructor(ip, port, type){ 
        this.address = "ws://javascript.info/article/websocket/demo/hello";
        // + ip + ":" + port;
        console.log(this.address);
        if(type == "Host"){ 

        }
        else{ 
            this.ws = new WebSocket(this.address); 
        }
        this.storage = null;

        this.ws.onopen = function(e) {
            alert("[open] Connection established");
            alert("Sending to server");
        };
          
        this.ws.onmessage = function(event) {
            this.storage = `${event.data}`;
            console.log(this.storage);
        };
          
        this.ws.onclose = function(event) {
            if (event.wasClean) {
              alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
              // e.g. server process killed or network down
              // event.code is usually 1006 in this case
              alert('[close] Connection died');
            }
        };
          
        this.ws.onerror = function(error) {
            alert(`[error] ${error.message}`);
        };
    }

    init(){ 
        //this.socket = new net.Socket();
    }

    update(){ 

    }

    sendInfo(data){ 
        this.ws.send(data);
    }

    recieveInfo(){ 

    }

}

export default Socket;