module.exports = {
    spriteSheets: {
        RadarMonitor: {
            fileName: "Animated-RadarMonitor-Sheet.png",
            frameDimensions: {
                width: 143,
                height: 106,
        },
      },
    },
    animations: {
        active: {
          frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          frameRate: 9,
        }
  },
    events: {
        onMapDidLoad: (self) => {
          self.playAnimation("active");
        }
    },
    properties: {
        sprite: {
            spriteSheet: "RadarMonitor",
            defaultFrameIndex: 0,
            // We'll not use this feature, so we should turn it off
            useGidAsDefaultFrameIndex: false,
            // We don't need any layered sprites for the laser barrier
            layers: [],
          },   
    }, 
};