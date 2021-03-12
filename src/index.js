import Phaser from "phaser";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

let game = new Phaser.Game(config);

function preload ()
{
  this.load.image('sky', 'src/assets/sky.png');
  this.load.image('ground', 'src/assets/platform.png');
  this.load.image('star', 'src/assets/star.png');
  this.load.image('bomb', 'src/assets/bomb.png');
  this.load.spritesheet('dude', 
      'src/assets/dude.png',
      { frameWidth: 32, frameHeight: 48 }
  );
}

let platforms;

function create ()
{
  this.add.image(0, 0, 'sky').setOrigin(0, 0);
  this.add.image(400, 300, 'star');
}

function update ()
{
}