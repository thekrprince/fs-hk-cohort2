# JavaScript

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

### Callback Queue

- [Loupe](http://latentflip.com/loupe/) is a little visualisation to help you understand how JavaScript's call stack/event loop/callback queue interact with each other.
