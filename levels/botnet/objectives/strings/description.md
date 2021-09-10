# String of truth

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Clear your previous code.</li>
  <li> Check to see if he given string contains the user "Anonymous"</li>
  <li> Format the results and print them out and press <em>HACK</em>.</li>
</ul>
</div>

As we've learned perviously the data type `String` is a collection of single characters (e.g 'p' 'o' 'p')  strung together to make a string (e.g "pop"). You can access or modify an individual character in a string by its index by using  index `[]` operator  ( Note: indexes are 0 based )
```cs
 string example1 = "pop";
 char letter = example[0];
 // letter = 'p'
```
 Once you have a string , you may wonder if there anything else you can do with it?  Yes! There are many things you can do with strings in C#! You're welcome to view the [documentation]("https://docs.microsoft.com/en-us/dotnet/api/system.string?view=net-5.0#methods") for a more comprehensive list of the things you can do with strings but for now we'll discuss just 3 of them briefly.

#### Search Strings
 Strings can also be searched, the Contains() methods checks to see if a string has a substring inside it and
 returns `true` or `false` if the value is present;

 ```cs
 string quote = "Life is a succession of lessons which must be lived to be understood";
 Console.WriteLine(quote.Contains("succession of lessons"));
 // output : True
 ```

#### Formatting Strings
We can use [String Interpolation]("https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated") to format strings. String Interpolation allows us to place variables (and more!) within a set of curly braces `{ }` inside our string.  Placing a `$` in front of your string, tells C# to later replace it with the value of the variable. Lets use our pervious example to demonstrate this
 ```cs
 string quote = "Life is a succession of lessons which must be lived to be understood.";
 Console.WriteLine($"Ralph Waldo Emerson once said: \" {quote} \" ");

 ```
## Put it all together

In our investigation of the attack we noticed that the Antivirus scan was stopped by a user , we managed to get a hold of a log file that records the activity of the applications on the network and the users.  Your task is to create a program to check to see if there is a user named `ANONYMOUS` in that excerpt then format and print the results.  An excerpt of the contents of the log file will be passed to you through the command-line.  

```txt
Suspicious user found: False  
```

When you're done click the  _HACK_  button.
