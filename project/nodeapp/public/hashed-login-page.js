const { argon2d } = require('argon2'); 

const loginForm = document.getElementById("login-form");
const hashedLoginButton = document.getElementById("hashed-login-form-submit");
const hash = '$argon2id$v=19$m=4096,t=3,p=1$rJhrZxCuDVncbNVRzC6rOw$uO4Ww0NZCdwABYtNKjW4ZEHAVlyzMLmDhGXqXwaKfMA'

hashedLoginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = loginForm.password.value;
    console.log("HELLO I AM HERE I AM WORKING HELLOOOOOOOOOOO!!!!")
    const correct = argon2d.verify(hash, password)
    console.log(correct ? "Matches" : "Do not match")
})