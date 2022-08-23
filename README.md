# Learning-Login

This is a Node.js / Express project [me](https://github.com/yrno) and [MarcusSkalevik](https://github.com/MarcusSkalevik) have been working on to learn about password hashing using [Argon2](https://www.npmjs.com/package/argon2). 

This page features two log-in pages. One authenticates the user through an if() check with plaintext in frontend, and the other sends user input to back-end and verifies it against an Argon2id hash.
We're still working on what actually happens when a user is authenticated (or authentication fails), but the authentication process now works fully.
