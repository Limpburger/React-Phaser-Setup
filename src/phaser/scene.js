// import Phaser from "phaser";
// import logoImg from "../assets/logo.png";

// class playGame extends Phaser.Scene {
//   constructor() {
//     super("PlayGame");
//   }
//   preload() {
//     this.load.image("logo", logoImg);
//   }
//   create() {
//     const logo = this.add.image(400, 150, "logo");

//     this.tweens.add({
//       targets: logo,
//       y: 450,
//       duration: 2000,
//       ease: "Power2",
//       yoyo: true,
//       loop: -1
//     });
//   }
// }

// export default playGame;

//scene.js
import Phaser from "phaser";
import { preload } from "./preload";
import { create } from "./create";
import { update } from "./update";
class playGame extends Phaser.Scene {
  constructor() {
    const sceneConfig = {
      key: "IsoInteractionExample",
      mapAdd: { isoPlugin: "iso" }
    };
    super(sceneConfig);
  }
  preload() {
    return preload.call(this);
  }
  create() {
    return create.call(this);
  }
  update() {
    return update.call(this);
  }
}export default playGame;
