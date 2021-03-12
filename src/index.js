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
  this.add.image(0, 0, 'sky').setOrigin(0, 0); //setOrigin : 0,0 = haut à gauche / 0.5,0.5 = centre / 1,1 = bas à droite
  // this.add.image(400, 300, 'star');

  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'ground').setScale(2).refreshBody(); 
  // The call to refreshBody() is required because we have scaled a static physics body, 
  // so we have to tell the physics world about the changes we made.

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
}

function update ()
{
}