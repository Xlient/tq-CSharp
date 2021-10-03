module.exports = {
    spriteSheets: {
      teleporter_tiles: {
        fileName: "teleporter1-Sheet.png",
        frameDimensions: {
          width: 153,
          height: 167,
        },
      },
    },
  
    events: {
    //   onMapDidLoad: (self) => {
    //     self.playAnimation("inactive", true);
    //   },
    },
    properties: {
      sprite: {
        spriteSheet: "teleporter_tiles",
        defaultFrameIndex: 0,
        // We'll not use this feature, so we should turn it off
        useGidAsDefaultFrameIndex: false,
        // We don't need any layered sprites for the laser barrier
        layers: [],
      },
    },
    animations: {
      active: {
        frames: [0 , 1, 2, 3, 4 ,5 ,6 ,7 ,8],
        frameRate: 9,
      },
    },
  };