"use strict"; 

class Socket{

    constructor(ip, port, type){ 
        this.address = "ws://" + ip + ":" + port;
        if(type == "host"){ 

        }
        else{ 
            ws = new WebSocket(address);
        }
        this.storage = null;
    }

    init(){ 
        this.socket = new net.Socket();
    }

    update(){ 

    }

    getInfo(){ 
        
    }

    recieveInfo(){ 

    }
}