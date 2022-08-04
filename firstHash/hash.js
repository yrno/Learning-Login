const argon2 = require("argon2")
const readline = require("readline")


// rl.question("Enter your password: ", async (password) => {
//     const hash = await argon2.hash(password, {type: argon2.argon2id})
    
    
//     rl.question("re-enter your password: ", async (pw) => {
//         const correct = await argon2.verify(hash, pw)
//         console.log(correct ? "Matches" : "iDo not match")
//         console.log('Your hash:', {hash})
//         process.exit(0)
//     })
// })

function logIn() {
    const password = "HELP"; //What how who when why whom?!?! (one moment I gotta relearn js)
    const hash = argon2.hash(password, {type: argon2.argon2id})
    console.log(hash)
    if ( password === "ilder") {
        alert("You have successfully logged in.");
        console.log("User authenticated");
    } else {
        console.log("Could not log in..");
    }
}