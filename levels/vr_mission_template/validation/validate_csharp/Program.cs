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
            string sourceCode = "";
            string scriptCode = "";
            

            string directory = Path.GetDirectoryName(path);
           
            if (Directory.Exists(directory) == false) 
            {
                ObjectiveStatus.Score = SCORE.FAIL;
                ObjectiveStatus.Feedback = " Uh oh.. looks like you forgot to save your code in the  directory you made a couple objectives ago"; 
               
                return;
            }

            // Geting the user's Program.cs file and reading it into a string 
            try
            {

                sourceCode = File.ReadAllText(Path.GetFullPath(path));


                //Making a SyntaxTree from source code
                SyntaxTree syntaxTree = CSharpSyntaxTree.ParseText(sourceCode);

                // checking the tree for  syntax errors 
                if (TreeErrorCheck(syntaxTree) == false)
                    throw new Exception("Syntax errors found");


                SyntaxNode root = syntaxTree.GetRoot();
                string variableDeclaration = TreeTraversal(root, out scriptCode);
        
        //checks to see if the user's array declaration matches ours
                if (variableDeclaration.Equals(@"string laser = ""OFF"";"))
                {
                    //runs all code and evaluates output
                    EvaluateCode(scriptCode);

                }
                else
                {
                    ObjectiveStatus.Score = SCORE.FAIL;
                    ObjectiveStatus.Feedback = "Make sure your variable looks like the one outlined in the objective!";
                }
               
            }
            catch (ArgumentNullException) 
            {
                ObjectiveStatus.Score = SCORE.FAIL;
                ObjectiveStatus.Feedback = "Make sure you sure are declaring a variable and try again!";
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


        // traversing the Syntax tree to find the variable declaration.
        private static string TreeTraversal(SyntaxNode root, out string allcode)
        {
            //geting the full block of code inside main to run later
            var codeblock = root.DescendantNodes()
                .OfType<BlockSyntax>()
                .Single();

            allcode = codeblock.Statements.ToString();

            var varSyntx = root.DescendantNodes()
                                 .OfType<VariableDeclarationSyntax>()
                                 .Single();
                                
            return varSyntx.ToString().Trim() + ";";
        }

            private static bool TreeErrorCheck(SyntaxTree syntaxTree)
            {
                IEnumerable<Diagnostic> diagnostics = syntaxTree.GetDiagnostics();
                if (diagnostics.Count() == 0)
                        return true;

                return false;
                
            }
     }
    }


