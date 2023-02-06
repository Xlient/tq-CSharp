const jetpack = require('fs-jetpack');
const { NiceError } = require('../../validation');


module.exports = async helper => {
  try {
    const { workspacePath, codePath} = helper.validationFields;

    if (!workspacePath) {
      throw new NiceError(`
        Please provide a path to your C# workspace directory!
      `);
    }


    const dirExists = await jetpack.existsAsync(workspacePath);
    const fileExists = await jetpack.existsAsync(codePath);
    if (!dirExists) {
      throw new NiceError(`
        We couldn't find a directory at the path you provided. 
        Please double check that the directory path you typed in 
        the text field is correct.
      `);
    }

    if (!fileExists) {
      throw new NiceError(`
        We couldn't find a file at the path you provided. 
        Please double check that the directory path you typed in 
        the text field is correct.
      `);
    }
  
          helper.success(`
          `,
            [
              {
                name: 'CSHARP_WORKSPACE_PATH',
                value: workspacePath,
              },
              {
                name: 'CSHARP_WORKSPACE_CODE',
                value: codePath,
              },
            ]
          );
        
    
  } catch (e) {
    console.log(e);
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! We couldn't successfully find your workspace path.
      `);
    }
  }



};
