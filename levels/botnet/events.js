const CEDRIC_ARROW = "floating_arrow_cedric";
module.exports = function(event, world) {

  world.showEntities(CEDRIC_ARROW, 0);
  if (event.name === "conversationDidEnd")
  {
    world.screenShake(6,6000);
    world.hideEntities(CEDRIC_ARROW);
  }
  
}
