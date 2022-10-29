module.exports = {
    spriteSheets: {
      neon_sign_on: {
        fileName: "neon-sign.png",
        frameDimensions: {
          width: 19,
          height: 48,
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
        spriteSheet: "neon_sign_on",
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