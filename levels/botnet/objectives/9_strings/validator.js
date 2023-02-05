
const assert = require("assert");
const { stderr } = require("process");
const { ExecuteCode } = require('../../validation');

module.exports = async function (helper) {
 
  const codePath = helper.env.TQ_CSHARP_WORKSPACE_PATH;
   const logFileText = "Scan Type: Antimalware Scan Message: scan has been stopped before completion  User:  ANONYMOUS/RDUSERS           " ;
   try{
     const results = await ExecuteCode(codePath, logFileText);
     if( results.stderr.length != 0)
     {
      helper.fail(`${stderr}`);
     }

    else if (results.stdout.includes("True") != true){
      helper.fail(`Looks like you forgot to print out the contents 
         of the log file or the result of the search!`);
    }
    else
      { 
        helper.success(`Nice work, looks like we've got some cleaning up to do.`);
      }
    }
    catch(e)
    {
      helper.fail(e.message);
    }
};
