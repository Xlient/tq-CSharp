module.exports = {
 
  spriteSheets: {
      banner_coke: {
          fileName: "all.png",
          frameDimensions: {
            width: 27,
            height: 78,
          },
  },
},
  animations: {
      display: {
          frames: [0,1,2],
          frameRate: 3,
        },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "banner_coke",
      layers: [],
    },
  },
  events: {
      onMapDidLoad: (self) => {
        self.playAnimation("display", true);
      },
  },
  };