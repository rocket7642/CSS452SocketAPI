"use strict"; // Operate in Strict mode such that variables must be declared before used!

import engine from "../engine/index.js";

class MyGame extends engine.Scene {
  constructor() {
    super();

    // The camera to view the scene
    this.mCamera = null;

    this.mMsg = null;

    this.socketTest = null;

    this.drawSet = [];
  }

  async init() {
    // Step A: set up the cameras
    this.mCamera = new engine.Camera(
      vec2.fromValues(30, 27.5), // position of the camera
      100, // width of camera
      [0, 0, 640, 480] // viewport (orgX, orgY, width, height)
    );
    this.mCamera.setBackgroundColor([0.8, 0.8, 0.8, 1]);
    // sets the background to gray

    this.mMsg = new engine.FontRenderable("This is a text renderable");
    this.mMsg.setColor([0, 0, 0, 1]);
    this.mMsg.getXform().setPosition(0, 0);
    this.mMsg.setTextHeight(5);

    this.drawSet.push(this.mMsg);

    this.socketTest = new engine.Socket("192.168.274.274", 8080, "Client");
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    await sleep(1000);
    this.socketTest.sendInfo("Hello World");
  }

  // This is the draw function, make sure to setup proper drawing environment, and more
  // importantly, make sure to _NOT_ change any state.
  draw() {
    // Step A: clear the canvas
    engine.clearCanvas([0.9, 0.9, 0.9, 1.0]); // clear to light gray

    this.mCamera.setViewAndCameraMatrix();
    for (let i = 0; i < this.drawSet.length; i++) {
      this.drawSet[i].draw(this.mCamera);
    }
  }

  // The Update function, updates the application state. Make sure to _NOT_ draw
  // anything from this function!
  update() {}
}

window.onload = function () {
  engine.init("GLCanvas");

  let myGame = new MyGame();
  myGame.start();
};
