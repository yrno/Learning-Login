const argon2 = require("argon2")
const readline = require("readline")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter your password: ", async (password) => {
    const hash = await argon2.hash(password, {type: argon2.argon2id})
    
    
    rl.question("re-enter your password: ", async (pw) => {
        const correct = await argon2.verify(hash, pw)
        console.log(correct ? "Matches" : "Do not match")
        console.log('Your hash:', {hash})
        process.exit(0)
    })
})