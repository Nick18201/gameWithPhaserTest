import Phaser from "phaser";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
},
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

let game = new Phaser.Game(config);

function preload ()
{
  this.load.image('sky', 'src/assets/skyalt.png');
  this.load.image('platform', 'src/assets/platform.png');
  this.load.image('star', 'src/assets/star.png');
  this.load.image('bomb', 'src/assets/bomb.png');
  this.load.spritesheet('dude', 
      'src/assets/dude.png',
      { frameWidth: 32, frameHeight: 48 }
  );
}

let platforms;
let player;

function create ()
{
  this.add.image(0, 0, 'sky').setOrigin(0, 0); //setOrigin : 0,0 = haut à gauche / 0.5,0.5 = centre / 1,1 = bas à droite
  // this.add.image(400, 300, 'star');

  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'platform').setScale(2.5).refreshBody(); 
  // The call to refreshBody() is required because we have scaled a static physics body, 
  // so we have to tell the physics world about the changes we made.

  platforms.create(600, 400, 'platform');
  platforms.create(50, 250, 'platform');
  platforms.create(750, 220, 'platform');

  player = this.physics.add.sprite(100, 450, 'dude');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    frames: [ { key: 'dude', frame: 4 } ],
    frameRate: 20
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });
}

function update ()
{
}