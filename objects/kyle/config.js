module.exports = {
  spriteSheets: {
    kyle_idle: {
      fileName: "kyle.png",
      frameDimensions: {
        width: 16,
        height: 32,
      },
    },
  },
  animations: {
    idle: {
      frames: [43,44,45, 46, 47],
      frameRate: 5,
    },
  },
  properties: {
    sprite: {
      spriteSheet: "kyle_idle",
      defaultFrameIndex: 0,
      // We'll not use this feature, so we should turn it off
      useGidAsDefaultFrameIndex: false,
      // We don't need any layered sprites for the laser barrier
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self) => {
      self.playAnimation("idle", true);
    },
    onPlayerDidInteract: (self, event, world) => {
      if (event.target.type === 'kyle') {
        world.startConversation('kyleDefault', 'kyle.png');
      }
    }
  },
};
