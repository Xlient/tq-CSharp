module.exports = {
 
  spriteSheets: {
      hacker_effect: {
          fileName: "all.png",
          frameDimensions: {
            width: 21,
            height: 18,
          },
  },
},
  animations: {
      display: {
          frames: [0,1,2,3],
          frameRate: 4,
        },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "hacker_effect",
      layers: [],
    },
  },
  events: {
      onMapDidLoad: (self) => {
        self.playAnimation("display", true);
      },
  },
  };