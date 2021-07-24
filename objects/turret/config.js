module.exports = {
 
    spriteSheets: {
        turret_idle: {
            fileName: "all.png",
            frameDimensions: {
              width: 26,
              height: 24,
            },
    },
},
    animations: {
        idle: {
            frames: [0,1,2, 3,4,5],
            frameRate: 6,
          },
    },
    properties: {
      sprite: {
        defaultFrameIndex: 0,
        spriteSheet: "turret_idle",
        layers: [],
      },
    },
    events: {
        onMapDidLoad: (self) => {
          self.playAnimation("idle", true);
        },
    },
};