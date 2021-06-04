
const { ExecuteCode } = require('../../validation');
module.exports = async function (helper) {

  try {
    const codePath = helper.env.TQ_CSHARP_WORKSPACE_CODE;
     const results = await ExecuteCode(codePath);

    if(results.stdout.search("OFF") == -1 && results.stdout.search("PASS") == -1){
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
