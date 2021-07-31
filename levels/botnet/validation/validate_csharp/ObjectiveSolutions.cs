using System;
namespace Validate
{
///<summary> 
///Class to hold the solution code for all the objectives 
 ///</summary>
public  class ObjectiveSolutions{

public ObjectiveSolutions()
{
    HelloCloudSolution = _helloCloudSolution;
    VariablesSolution = _variableSolution;
    OperatorsSolution = _operatorsSolution;
}
private readonly string _helloCloudSolution = @"
using System;
class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(""Hello Cloud!"");
           
        }
    }";

private  readonly string _variableSolution = @"
using System;
class Program
    {
        static void Main(string[] args)
        {
          string laser = ""OFF"";
          Console.WriteLine(laser);
        }

    }";

private  readonly string _operatorsSolution = @"
   using System;
   class Program
    {
        static void Main(string[] args)
        {
          int pin = (144000 % 866) * (4 + 3);
          Console.WriteLine(pin);
        }

    }";

 

public string HelloCloudSolution { get;}
public string VariablesSolution { get;}
public string OperatorsSolution { get;}

}

}