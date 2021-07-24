module.exports = {
    spriteSheets: {
      neon_sign2_on: {
        fileName: "neon-sign-2.png",
        frameDimensions: {
          width: 35,
          height: 92,
        },
      },
    },
  
    events: {
      onMapDidLoad: (self) => {
        self.playAnimation("turn_on", true);
      },
    },
    properties: {
      sprite: {
        spriteSheet: "neon_sign2_on",
        defaultFrameIndex: 0,
        useGidAsDefaultFrameIndex: false,
        layers: [],
      },
    },
    animations: {
      turn_on: {
        frames: [0,1,2,3],
        frameRate: 4,
      },
    },
  };