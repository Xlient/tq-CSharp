const {spawn} =  require('child_process');
const path = require('path');
const { cwd, stderr, stdin } = require('process');
const { reject } = require('ramda');

class NiceError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NiceError';
    }
}

async function ExecuteCode(codePath, arg1 ="", arg2="")
{
  return new Promise(async (resolve, reject) => {

      const pathToValidator = path.join(__dirname +"\\validate_csharp");
     
        let bufferedStdout = "";
        let bufferedStderr = "";

        

     try{
      const dotnetRun = spawn('dotnet',['run',`${codePath}`,`${arg1}`, `${arg2}`],
      { cwd: pathToValidator , shell: true});

        dotnetRun.on('error', (err) => {
          console.error(`${err}`);
        });

        dotnetRun.stderr.on('data', (data) => {
              bufferedStderr += `${data}`;
          });

        dotnetRun.stdout.on('data', (data) => {
            
              bufferedStdout =`${data}`;
              console.log(bufferedStdout);
              
            });

            dotnetRun.on('close', (code) => {
              
                resolve({

                    exitCode: code,
                    stdout: bufferedStdout,
                    stderr: bufferedStderr
                });
              
            });

           
        
        }    
        catch(e) 
        {
            console.log(e);
            throw new NiceError(`there was a problem validating your C# code -please try again`);
        }
  });
}

module.exports = {
    NiceError,
    ExecuteCode
}