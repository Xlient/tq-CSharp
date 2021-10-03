module.exports = {
    spriteSheets: {
        idle_bot: {
            fileName: "idle(32 x 32).png",
            frameDimensions: {
                width: 32,
                height: 32,
        },
      },
    },
    
    events: {
        onMapDidLoad: (self) => {
          self.playAnimation("idle",true);
        }
    },
    properties: {
        sprite: {
            spriteSheet: "idle_bot",
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
            frames: [0,1,2 ,3],
            frameRate: 2,
          },
          walk: {
            frames: [10, 11, 12],
            frameRate: 3,
     },
    },

};