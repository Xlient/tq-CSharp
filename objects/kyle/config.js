module.exports = {
  spriteSheets: {
   
  },
  animations: { 
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
