# Basic Operations

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li> Clear previous code </li> 
  <li> Convert the given value into an Integer </li>
  <li> Calculate the Pin Code based on the formula then click <em>HACK</em>.</li>
</ul>
</div>
 There will come a time in your in journey where you will need to add,subtract or multiply values in your C# program.
 To do that you can use an Arithmetic Operator, Operators are used to perform operations on variables and values.
 You are already familiar with the common ones like  `* ` for multiplication , `/` division, `+` addition and so on!

```cs
int x = 7;
int y = 4;
int z = x + y; // 11
```
In addition to these are the `Increment ++, Decrement -- and Remainder %` operations.

|    Operator |    Symbol     |                       Example       Int num = 10                   |
| ----------- | -----------   | ------------------------------------------------------------------ |
| Increment   |    ++         |  Increases the value ts operand by 1    e.g num++                  |
| Decrement   |    --         |  Decreases the value of its operand by 1   e.g num--               |
| Remainder   |    %          | Computes the remainder after preforming division   num  %   4  = 2 |
## Calculate the PIN

Using C# Operators you can calculate the correct 4 digit pin code to unlock the laser barrier.
Declare a variable called `pin` and set it's value to this formula `(144000 % 866) * (4 + 3)`
then print the value of `pin`. Once you're done be sure to click the _HACK_ button.
