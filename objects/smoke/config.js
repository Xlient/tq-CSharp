module.exports = {
  animations: {
    active: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
      frameRate: 6,
    },
  }, 
  spriteSheets: {
    smokeTiles: {
        fileName: "smokeFx.png",
        frameDimensions: {
          width: 32,
          height: 32,
        },
      },
  },
  events:{
    onMapDidLoad: (self) => {
    self.playAnimation("active");
    },
  },
  
  properties: {
    sprite: {
      spriteSheet: "smokeTiles",
      defaultFrameIndex: 0,
      useGidAsDefaultFrameIndex: false,
      layers: [],
    },
  },
};