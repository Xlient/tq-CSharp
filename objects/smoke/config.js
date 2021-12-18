module.exports = {
    spriteSheets: {
      smoke_tiles: {
          fileName: "smokeFx.png",
          frameDimensions: {
            width: 32,
            height: 32,
          },
        },
  },
  animations: {
    active: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
    frameRate: 6,
    }
  }, 
  events:{
    onMapDidLoad: (self) => {
    self.playAnimation("active",true);
    },
  },
  
  properties: {
    sprite: {
      spriteSheet: "smoke_tiles",
      defaultFrameIndex: 0,
      useGidAsDefaultFrameIndex: false,
      
      layers: [],
    },
  },
    };