# JavaScript

## What is ECMAScript?

- ECMAScript is a scripting language specification standardized by Ecma International in the ECMA-262 and ISO/IEC 16262 documents. It serves as the guideline or the 'rules' for scripting language design. JavaScript is based on ECMAScript.
- Versions: ECMAScript versions (like ES5, ES6/ES2015, ES2017, etc.) are essentially updates to the specification, introducing new features and syntaxes. For example, ES6 introduced arrow functions, classes, and template literals.

## What is JavaScript?

- JavaScript is a scripting language that conforms to the ECMAScript specification. It's the most widely known and used implementation of ECMAScript.
- Beyond ECMAScript: JavaScript includes additional features that are not part of the ECMAScript specification, like the Document Object Model (DOM) manipulation, which is crucial for web development but is not defined by ECMAScript.

## Interpreted vs compiled languages

What are compilers? - Compilers convert high level developer friendly code into 0s and 1s.

1. **Compiled languages:**

   - First need to compile, then need to run
   - Usually don’t compile if there is an error in the code
   - Example - C++, Java, Rust, Golang

2. **Interpreted languages:**
   - Usually go line by line
   - Can run partially if the error comes later
   - Example - JavaScript, Python

## Why is JS better than other languages?

1. Browsers can only understand HTML/CSS/JS (not technically true).
2. Thanks to Node.js , JavaScript can also be used for “Backend Development”.

### Synchronous vs Asynchronous functions

- **Synchronous:** Code running line by line.
- **Asynchronous:** Asynchronous functions in programming are those that allow a program to start a potentially long-running operation and continue executing other tasks without waiting for that operation to complete. This is particularly important in environments like web browsers or Node.js, where waiting for an operation to finish (like fetching data from a server or reading a large file) could make the application unresponsive.

Lets build some intuition
Human brain and body is single threaded.

1. We can only do one thing at a time.
2. But we can context switch b/w tasks, or we can delegate tasks to other people.

You have 4 tasks -

1. Boil water
2. Cut vegetables
3. Cut maggi packet
4. Get ketchup from the shop nearby.

How would you do this? Synchronously or Asynchronously?

Even if you are single threaded (brain can do only one thing at a time), you can do things parallelly by Delegating. You can also context switch between tasks if need be (the net time to do both the things would still be the same). Net amount of time take to do a task can be decreased by doing these two things (delegating and context switching).

### Callback Queue

- [Loupe](http://latentflip.com/loupe/) is a little visualisation to help you understand how JavaScript's call stack/event loop/callback queue interact with each other.
