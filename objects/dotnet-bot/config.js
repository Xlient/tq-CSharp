module.exports = {
  animations: {
    idle: {
      frames: [0 , 1],
      frameRate: 2,
    },
    walk: {
      frames: [2 , 3, 4],
      frameRate: 2,
    },
    hurt: {
      frames: [5],
      frameRate: 1,
    },
  },
  spriteSheets: {
    dotnetBot:{
      fileName: 'dotnet-bot.png',
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  events:
  {
     onMapDidLoad:(self) => 
     {
       self.playAnimation("idle");
     },
  },
  properties: {
    sprite: {
      spriteSheet: "dotnetBot",
      defaultFrameIndex: 0,
      layers: [],
    },
    idleAnimations: {
    animations: {
      idle: 500,
    },
    minIdleTime: 2000,
    maxIdleTime: 5000,
    },
  },
};
