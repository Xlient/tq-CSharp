
const assert = require("assert");
const R = require("ramda");



module.exports = async function (helper) {

  const { answer} = helper.validationFields;

  function isCorrect(answer ='')
  {
    return answer.toLowerCase() === "open source development platform";
  }
  
  if (!answer1 || !isCorrect(answer)) {
    return helper.fail(`
    Not quite! Look at the description in the linked video for a clue.
    `);
  }

  
  helper.success(`
    Hooray! You did it!
  `);
};
