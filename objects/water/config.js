module.exports = {
    spriteSheets: {
      water: {
        fileName: "Water.png",
        frameDimensions: {
          width: 24,
          height: 24,
        },
      },
    },
  
    events: {
      onMapDidLoad: (self) => {
        self.playAnimation("water_flowing", true);
      },
    },
    properties: {
      sprite: {
        spriteSheet: "water",
        defaultFrameIndex: 0,
        useGidAsDefaultFrameIndex: false,
        layers: [],
      },
    },
    animations: {
      water_flowing: {
        frames: [26,27,28],
        frameRate: 3,
      },
    },
  };