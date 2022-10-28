module.exports = {
  animations: {
    hacked: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      frameRate: 14,
    },
  }, 
  spriteSheets: {
    computerMonitor: {
        fileName: "Animated-Monitors-Sheet.png",
        frameDimensions: {
          width: 144,
          height: 96,
        },
      },
    },
  events:{
    onMapDidLoad: (self) => {
    self.playAnimation("hacked",true);
    },
  },
  properties: {
    sprite: {
      spriteSheet:"computerMonitor",
      defaultFrameIndex: 0,
      useGidAsDefaultFrameIndex: false,
      layers: [],
    },
  },
};