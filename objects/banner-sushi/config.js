module.exports = {
    spriteSheets: {
      scifi_tiles_2: {
        fileName: "sushi-sign.png",
        frameDimensions: {
          width: 36,
          height: 13,
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
        frames: [0,1,2],
        frameRate: 3,
      },
    },
  };