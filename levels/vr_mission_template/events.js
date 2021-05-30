const CEDRIC_ARROW = "floating_arrow_cedric";
module.exports = function(event, world) {

  world.showEntities(CEDRIC_ARROW, 0);
  if (event.name === "conversationDidEnd")
  {
    world.screenShake(2,1);
    world.hideEntities(CEDRIC_ARROW);
  }
  
}
