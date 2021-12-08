module.exports = {
    spriteSheets: {
        all_door_tiles: {
            fileName: "Animated-door-Sheet.png",
            frameDimensions: {
                width: 144,
                height: 96,
        },
      },
    },
    
    events: {
       // TODO Objective did complete handler.
    },
    properties: {
        sprite: {
            spriteSheet: "all_door_tiles",
            defaultFrameIndex: 0,
            // We'll not use this feature, so we should turn it off
            useGidAsDefaultFrameIndex: false,
            // We don't need any layered sprites for the laser barrier
            layers: [],
          },   
    },
    animations: {
          opening: {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            frameRate: 9,
          },
          closing: {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].reverse(),
            frameRate: 9,
          }
    },

};