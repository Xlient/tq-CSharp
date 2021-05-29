module.exports = {
  spriteSheets: {
    scifi_tiles_2: {
      fileName: "scifi-2.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },

  events: {
    onMapDidLoad: (self) => {
      self.playAnimation("idle", true);
    },
  },
  properties: {
    sprite: {
      spriteSheet: "scifi_tiles_2",
      defaultFrameIndex: 0,
      // We'll not use this feature, so we should turn it off
      useGidAsDefaultFrameIndex: false,
      // We don't need any layered sprites for the laser barrier
      layers: [],
    },
  },
  animations: {
    idle: {
      frames: [56, 57, 58, 59, 60, 61],
      frameRate: 6,
    },
  },
};
