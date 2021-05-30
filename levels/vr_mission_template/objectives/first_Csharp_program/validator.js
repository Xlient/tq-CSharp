
const R = require("ramda");



module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const { answer1, answer2 } = helper.validationFields;

  

  exec('dotnet run', {cwd: workspacePath} ,(error, stdout, stderr) => {
    if (error) {
      helper.fail(error.message)
      return;
    }
      
      if(stdout.indexOf('Hello World!') == 0 ){
          helper.success(`
            Hooray! You did it!
            `);
          }
  });
};
