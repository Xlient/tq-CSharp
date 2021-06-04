const { exec} = require('child_process');
const {spawn} =  require('child_process');
const path = require('path');
const { cwd, stderr, stdin } = require('process');

module.exports = async function (helper) {

  try{
      const codePath = helper.env.TQ_CSHARP_WORKSPACE_CODE;
      const pathToValidator = path.join(__dirname +"\\validate");
      let bufferdStdout = "";
      let bufferdStderr = "";

      const dotnetRun = spawn('dotnet',['run',`${codePath}`],
      { cwd: pathToValidator , shell: true});


        dotnetRun.on('error', (err) => {
          console.error(`${err}`);
        });

        dotnetRun.stderr.on('data', (data) => {
              bufferdStderr += `${data}`;
          });

        dotnetRun.stdout.on('data', (data) => {
            
              bufferdStdout =`${data}`;
              console.log(bufferdStdout);
              
            });

            dotnetRun.on('close', (code) => {
              
                console.log(`${code}`);
              
            });
          

          if(bufferdStdout.includes("OFF") == true && bufferdStdout.includes('PASS') == true){
            console.log(bufferdStdout.includes("OFF"));
            helper.fail(`Oops something went wrong with your code. Check the example code and try again`);
            
          }
          else
            { 
              helper.success(`Great job!`);
            }
        
        }    
  catch(e) 
  {
    helper.fail(e.message);
    }
};
