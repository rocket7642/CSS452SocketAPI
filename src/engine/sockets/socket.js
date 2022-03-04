"use strict";

class Socket {
  constructor(ip, port, type) {
    this.address = "ws://localhost:8080";
    // + ip + ":" + port;
    console.log(this.address);
    // if (type == "Host") {
    // } else {
    this.ws = new WebSocket(this.address);
    // }
    this.storage = null;
    this.storageMap = new Map();
    this.storageMap.set("firstMsg", 0);

    // this.ws.onopen = function (e) {
    //   //   alert("[open] Connection established");
    //   //   alert("Sending to server");
    //   this.ws.send("Hello");
    //   console.log("sent msg to server");
    // };

    this.ws.addEventListener("open", () => {
      this.ws.send(
        JSON.stringify({
          x: 254,
          y: 30,
        })
      );
    });

    this.ws.onmessage = function (event) {
      const msg = JSON.parse(event.data);
      this.storageMap.set("firstMsg", msg);
    };

    this.ws.onclose = function (event) {
      //   if (event.wasClean) {
      //     alert(
      //       `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
      //     );
      //   } else {
      //     // e.g. server process killed or network down
      //     // event.code is usually 1006 in this case
      //     alert("[close] Connection died");
      //   }
    };

    // this.ws.onerror = function (error) {
    //   alert(`[error] ${error.message}`);
    // this.init();
  }

  printMap() {
    for (let [key, value] of this.storageMap.entries()) {
      console.log(key, value);
    }
  }
  init() {}

  update() {}

  sendInfo(data) {
    this.ws.send(JSON.stringify(data));
  }

  recieveInfo() {
    console.log(this.storageMap.get("firstMsg"));
    return this.storageMap.get("firstMsg");
  }
}

export default Socket;
