
module.exports = async function (helper) {

  const codePath = helper.env.CSHARP_WORKSPACE_PATH;
  
  exec('dotnet run --project validate ${codePath}\\program.cs', {cwd: ".\\validate"} ,(error, stdout, stderr) => {
    if (error || stdout.indexOf('FAIL') == 1) {
      helper.fail()
      return;
    }
      
      if(stdout.indexOf('OFF') == 0 && stdout.indexOf('PASS') == 1 ){
          helper.success(`
            Hooray! You did it!
            `);
          }
  });

  helper.success(`
    Hooray! You did it!
  `);
};
