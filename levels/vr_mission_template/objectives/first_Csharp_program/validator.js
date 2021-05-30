
const { NiceError } = require('../../validation');
const { exec} = require('child_process');

module.exports = async function (helper) {
  // We start by getting the user input from the helper
  exec('dotnet run', {cwd: workspacePath} ,(error, stdout, stderr) => {
    if (error) {
      helper.fail(error.message)
      return;
    }
      
      if(stdout.indexOf('Hello Cloud!') == 0 ){
          helper.success(`
            Hooray! You did it!
            `);
          }
  });
};
