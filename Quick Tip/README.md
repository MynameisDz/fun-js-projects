# I LEARN
1. In HTML, **`<input type="number">`** value always return a string. So, if you want to use it like a number, you must convert it into a number.\
   Some different ways to convert a string into a number in `javascript` language.
   - **`parseInt(string [, radix])`** function parses a string and returns an integer. Here's an example:  
   
   ``` 
   let string = '42px001';
   let integer = parseInt(string);
   // return 42
   ```
   
   - **`parseFloat(string)`** function parses an argument (converting it to a string first if needed) and returns a floating point number.  
   
   ```
   let string = '4.2paa001';
   let float = parseFloat(string);
   // return 4.2
   ```
   
   - **`Number(string)`** The Number() function converts the object argument to a number that represents the object's value. If the value cannot be converted to a legal number, NaN is returned.

2. **`document`** and **`window`** objects
