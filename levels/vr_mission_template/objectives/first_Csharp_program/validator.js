
const { NiceError } = require('../../validation');
const { exec} = require('child_process');


module.exports = async function (helper) {
 
  const {TQ_CSHARP_WORKSPACE_PATH} = helper.env;

   
  exec('dotnet run', {cwd: TQ_CSHARP_WORKSPACE_PATH} ,(error, stdout, stderr) => {
    
    if (error) {
      helper.fail(error.message); // replace with a nice error 
      return;
    }
      
      if(stdout.indexOf('Hello Cloud!') == 0 ){
          helper.success(`
            Hooray! You did it!
            `);
          }
        else
        {
          helper.fail('Did you change your Console.WriteLine to print "Hello Cloud!" ?')
        }
  });
};
