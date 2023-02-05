
const { isOption } = require("../lib/installObj_helper");


module.exports = async function (helper) {
   const {answer1} = helper.validationFields;

  
  if (!answer1 || !isOption(answer1)) {
    return helper.fail(`
      The answer you provided is incorrect. Make sure after running the command
      you type the second option in the table (including the dashes).
    `);
  }

  helper.success(`
    Hooray! You did it!
  `);
};
