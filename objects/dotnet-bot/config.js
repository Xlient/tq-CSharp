module.exports = {
    spriteSheets: {
        spin_attack: {
            fileName: "Spin-attack_(32 x 32).png",
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
            spriteSheet: "spin_attack",
            defaultFrameIndex: 0,
            // We'll not use this feature, so we should turn it off
            useGidAsDefaultFrameIndex: false,
            // We don't need any layered sprites for the laser barrier
            layers: [],
          },   
    },
    animations: {
        idle: {
            frames: [0, 1, 2, 3, 4, 5 , 6, 7, 8],
            frameRate: 9,
          },
          spin_attack: {
            frames: [0, 1, 2, 3, 4,5],
            frameRate: 5,
          },
          flying: {
            frames: [0,1],
            frameRate: 2,
     },
    },

};