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
                 TreeErrorCheck(syntaxTree, solutionSyntaxTree);

                    
                SyntaxNode root = syntaxTree.GetRoot();
                SyntaxNode solutionRoot = solutionSyntaxTree.GetRoot();

                //checks to see if the user's code matches ours
                if (CompareTrees(in solutionRoot, in root, out scriptCode) == false)
                {
                    ObjectiveStatus.Score = SCORE.FAIL;
                    ObjectiveStatus.Feedback = "Make sure your code looks like the example code found in the objective!";
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
                ObjectiveStatus.Feedback = $"{e.Message }, {e.StackTrace}";
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
            //geting the full block of code inside  the main function to  compare & run later
            var codeblock = root.DescendantNodes()
                .OfType<BlockSyntax>()
                .SingleOrDefault();
                

            allcode = codeblock.Statements.ToString();

            var solutionCodeBlock = solutionRoot.DescendantNodes()
                .OfType<BlockSyntax>() 
                .SingleOrDefault();


             // comparing the users tree with the solution ignoring white space and other trivia.
            if (codeblock.IsEquivalentTo(solutionCodeBlock, false))
            {
                return true;
            }

            return false;
           
        }
 private static void TreeErrorCheck(SyntaxTree syntaxTree, SyntaxTree solutionSyntaxTree = null)
            {
                if( syntaxTree == null || solutionSyntaxTree == null )
                   { throw new ArgumentNullException("The Syntax tree is null");
                   }
        
                // looks over the tree for any syntax errors.
                List<Diagnostic> diagnostics = syntaxTree.GetDiagnostics().ToList();
                if (diagnostics.Count() != 0) 
                     {
                          throw new Exception($"errors found in tree: {diagnostics[0]}");
                     }


                List<Diagnostic> solutionDiagnostics = solutionSyntaxTree.GetDiagnostics().ToList();
                if (solutionDiagnostics.Count() != 0) 
                       { 
                           throw new Exception($"errors found in solution tree: {solutionDiagnostics[0]}");
                       }
                
                
            }


           //  The idea here is to get the objective name  passed in to the program and 
         // return the appropriate solution code so we can parse it.
private static string GetObjectiveSolution(string objectiveName)
            {
                string solution ="";
                var objectiveSolution = new ObjectiveSolutions();
              if (objectiveName.Equals("firstCsharpProgram"))
              {
                  solution = objectiveSolution.HelloCloudSolution;
              }
              else if (objectiveName.Equals("Variables"))
              {
                  solution = objectiveSolution.VariablesSolution;
              }
              else if (objectiveName.Equals("Operations"))
              {
                  solution = objectiveSolution.OperatorsSolution;
              }
              else 
              {
                  throw new Exception($"Objective {objectiveName}  not found");
              }
              return solution;
            }
     }
    }


