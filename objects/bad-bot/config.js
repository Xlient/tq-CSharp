module.exports = {
    spriteSheets: {
        twilioquest_badflybot: {
            fileName: "all-bots.png",
            frameDimensions: {
                width: 24,
                height: 24,
        },
      },
    },
    
    events: {
        onMapDidLoad: (self) => {
          self.playAnimation("idle");
        }
    },
    properties: {
        sprite: {
            spriteSheet: "twilioquest_badflybot",
            defaultFrameIndex: 0,
            // We'll not use this feature, so we should turn it off
            useGidAsDefaultFrameIndex: false,
            // We don't need any layered sprites for the laser barrier
            layers: [],
          },   
    },
    animations: {
        hurt: {
            frames: [0, 1, 2, 3, 4],
            frameRate: 5,
          },
          idle: {
            frames: [5, 6, 7, 8, 9],
            frameRate: 5,
          },
          death: {
            frames: [10, 11, 12],
            frameRate: 3,
     },
    },

};