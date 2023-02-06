module.exports = {
    spriteSheets: {
      sushi_sign_on: {
        fileName: "sushi-sign.png",
        frameDimensions: {
          width: 36,
          height: 13,
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
        spriteSheet: "sushi_sign_on",
        defaultFrameIndex: 0,
        useGidAsDefaultFrameIndex: false,
        layers: [],
      },
    },
    animations: {
      turn_on: {
        frames: [0,1,2],
        frameRate: 3,
      },
    },
  };