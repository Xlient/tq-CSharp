module.exports = {
    spriteSheets: {
      neon_scroll_sign_on: {
        fileName: "neon-scroll.png",
        frameDimensions: {
          width: 13,
          height: 47,
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
        spriteSheet: "neon_scroll_sign_on",
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