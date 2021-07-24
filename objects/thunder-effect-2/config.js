module.exports = {
 
    spriteSheets: {
        thunder_effect: {
            fileName: "Projectile2-wo-blur.png",
            frameDimensions: {
              width: 48,
              height: 48,
            },
    },
},
    animations: {
        display: {
            frames: [0,1,2, 3,4,5],
            frameRate: 6,
          },
    },
    properties: {
      sprite: {
        defaultFrameIndex: 0,
        spriteSheet: "thunder_effect",
        layers: [],
      },
    },
    events: {
        onMapDidLoad: (self) => {
          self.playAnimation("display", true);
        },
    },
    };