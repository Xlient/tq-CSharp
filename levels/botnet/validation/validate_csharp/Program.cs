using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using Microsoft.CodeAnalysis.Scripting;
namespace Validate
{
    class Program
    {
        static void Main(string[] args)
        {
            
            string path = args[0];
            string objectiveName = args[1];
            string solutionCode = "";
            string sourceCode = "";
            string scriptCode = "";
            

            string directory = Path.GetDirectoryName(path);
           
            if (Directory.Exists(directory) == false) 
            {
                ObjectiveStatus.Score = SCORE.FAIL;
                ObjectiveStatus.Feedback = " Uh oh.. looks like you forgot to save your code in the  directory you made a couple objectives ago"; 
            }

            // Geting the user's Program.cs file and reading it into a string 
            try
            {
                //geting the solution code &  the user's code
                solutionCode = GetObjectiveSolution(objectiveName); 
                sourceCode = File.ReadAllText(Path.GetFullPath(path));

                //Making a SyntaxTree from source code
                SyntaxTree syntaxTree = CSharpSyntaxTree.ParseText(sourceCode);
                SyntaxTree solutionSyntaxTree = CSharpSyntaxTree.ParseText(solutionCode);

                // checking the tree for  syntax errors 
                if (TreeErrorCheck(syntaxTree) == false)
                    throw new Exception("Syntax errors found");
                
                SyntaxNode root = syntaxTree.GetRoot();
                SyntaxNode solutionRoot = solutionSyntaxTree.GetRoot();

                //checks to see if the user's code matches ours
                if (CompareTrees(in solutionRoot, in root, out scriptCode) == false)
                {
                    ObjectiveStatus.Score = SCORE.FAIL;
                    ObjectiveStatus.Feedback = "Make sure your code looks like the example found in the objective!";
                }
                else
                {
                    //runs all code and evaluates output
                    EvaluateCode(scriptCode);
                }
               
            }
            catch (Exception e)
            {
                ObjectiveStatus.Score = SCORE.FAIL;
                ObjectiveStatus.Feedback = "something went wrong in your code : " + e.Message;
            }

            Console.WriteLine($"{ObjectiveStatus.Score} \n{ObjectiveStatus.Feedback}");
           
         
        }

private static void EvaluateCode(string scriptCode)
        {
                var evaluation = CSharpScript.RunAsync(scriptCode, ScriptOptions.Default.WithImports("System"));

                
                if (evaluation.IsCompletedSuccessfully && evaluation.IsFaulted == false)
                {
                    ObjectiveStatus.Score = SCORE.PASS;
                    ObjectiveStatus.Feedback = "Success!";
                }
                else
                {
                    ObjectiveStatus.Score = SCORE.FAIL;
                    ObjectiveStatus.Feedback = "Whoops ! Something went wrong in your code  or it didnt produce the excepted output. Try again ";
                   
                }
        }


         private static bool CompareTrees(in SyntaxNode solutionRoot, in SyntaxNode root, out string allcode)
        {
            //geting the full block of code inside  the main function to run later
            var codeblock = root.DescendantNodes()
                .OfType<BlockSyntax>()
                .Single();

            allcode = codeblock.Statements.ToString();

            var solutionCodeBlock = solutionRoot.DescendantNodes()
                 .OfType<BlockSyntax>()
                 .Single();


             // comparing the code within the main function
            if (codeblock.IsEquivalentTo(solutionCodeBlock, false))
            {
                return true;
            }

            return false;
           
        }
            private static bool TreeErrorCheck(SyntaxTree syntaxTree)
            {
                // looks over the tree for any syntax errors.
                IEnumerable<Diagnostic> diagnostics = syntaxTree.GetDiagnostics();
                if (diagnostics.Count() == 0) 
                        return true;

                return false;
                
            }


           //  The idea here is to get the objective name  passed in to the program and 
           // return the appropriate solution code so we can parse it.
            private static string GetObjectiveSolution(string objectiveName)
            {
                string solution ="";
                var objectiveSolution = new ObjectiveSolutions();
              if (objectiveName.Equals("firstCsharpProgam"))
              {
                  solution = objectiveSolution.HelloCloudSolution;
              }
              else if (objectiveName.Equals("Variables"))
              {
                  solution = objectiveSolution.VariablesSolution;
              }
              return solution;
            }
     }
    }


