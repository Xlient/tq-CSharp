module.exports = {
    spriteSheets: {
      scifi_tiles_2: {
        fileName: "neon-sign-2.png",
        frameDimensions: {
          width: 35,
          height: 92,
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
        spriteSheet: "neon_sign_on",
        defaultFrameIndex: 0,
        useGidAsDefaultFrameIndex: false,
        layers: [],
      },
    },
    animations: {
      neon_sign_on: {
        frames: [0,1,2,3],
        frameRate: 4,
      },
    },
  };