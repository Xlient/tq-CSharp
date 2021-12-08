module.exports = {
    spriteSheets: {
        all_computer_tiles: {
            fileName: "Animated-Monitors-Sheet.png",
            frameDimensions: {
                width: 144,
                height: 96,
        },
      },
    },
    
    events: {
        onMapDidLoad: (self) => {
          self.playAnimation("active",true);
        }
    },
    properties: {
        sprite: {
            spriteSheet: "all_computer_tiles",
            defaultFrameIndex: 0,
            // We'll not use this feature, so we should turn it off
            useGidAsDefaultFrameIndex: false,
            // We don't need any layered sprites for the laser barrier
            layers: [],
          },   
    },
    animations: {
          active: {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            frameRate: 9,
          }
    },

};