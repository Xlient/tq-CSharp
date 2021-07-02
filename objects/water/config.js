module.exports = {
    spriteSheets: {
      scifi_tiles_2: {
        fileName: "Water.png",
        frameDimensions: {
          width: 24,
          height: 24,
        },
      },
    },
  
    events: {
      onMapDidLoad: (self) => {
        self.playAnimation("on", true);
      },
    },
    properties: {
      sprite: {
        spriteSheet: "water_flowing",
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