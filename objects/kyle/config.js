module.exports = {
  spriteSheets: {
    kyle_npc_tiles: {
      fileName: "kyle.png",
      frameDimensions: {
        width: 16,
        height: 32,
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
      spriteSheet: "kyle_npc_tiles",
      defaultFrameIndex: 0,
      // We'll not use this feature, so we should turn it off
      useGidAsDefaultFrameIndex: false,
      // We don't need any layered sprites for the laser barrier
      layers: [],
    },
  },
  animations: {
    idle: {
      frames: [23, 24, 25, 26, 27, 28],
      frameRate: 6,
    },
  },
};
