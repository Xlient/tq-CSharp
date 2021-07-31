
const { ExecuteCode } = require('../../validation');
module.exports = async function (helper) {

  try {
     const codePath = helper.env.TQ_CSHARP_WORKSPACE_CODE;
     const results = await ExecuteCode(codePath,"Operations");

    if(results.stdout.search("1708") == -1 && results.stdout.search("PASS") == -1){
      let feedback = results.stdout.split('\n')[1];
      helper.fail(`${feedback}`);
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