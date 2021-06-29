# Declaring Variables

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Declare a variable of type <code> string </code> and name it<code> laser </code></li>
  <li> Assign it the value of <code> "OFF" </code> </li>
</ul>
</div>

<h2>What are Variables?</h2>

Variables are containers for storing information. A variables name represents the information stored in the variable. This information can be exchanged for different values after its declared.

<h2> What are Data Types?</h2>
A data type specifies what type of information the variable has.
Here are some common built-in types in C#

|     Type    | Keyword in C# | Description                                                        |
| ----------- | -----------   | ------------------------------------------------------------------ |
|   Boolean   |    bool       | True or False value                                                |
|   Integer   |    int        | Integral Type value ranging from -2,147,483,648 to 2,147,483,647   |
|   Double    |    double     | Floating-point numeric types with ~15-17 digit precision(e.g 4.13) |
|   Char      |    char       | A character literal  (e.g 'A' or 'B')                              |  
|   String    |    string     | A sequence of characters  (e.g "Hello")                            |

For a list of more built-in data types see this <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types#built-in-value-types">link</a> Now Lets create a variable!
In order to use a variable in our program we must declare it; giving the variable a name and a type.

Lets see an example
```cs
 string myname = "John";
```
In your project from the last objective declare a variable of type <code> string </code> and name it <code> laser </code>.
Assign it the value of <code> "OFF" </code>. Modify the <code>Console.WriteLine()</code> method to print your new variable
Your code should look similar to the example below.
```cs
 string myname = "John";
 
Console.WriteLine(myname);

``` 
When you're done modifying your code click the _HACK_ button.
