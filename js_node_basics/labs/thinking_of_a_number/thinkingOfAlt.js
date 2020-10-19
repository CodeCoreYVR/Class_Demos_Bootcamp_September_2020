const readline = require("readline");

const thinkingOf = Math.ceil(Math.random() * 10);
let attemptsCount = 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Alternative more idiomatic solution using Event-based methods
// http://nodejs.org/api/readline.html#readline_rl_setprompt_prompt
rl.setPrompt("> ");
// http://nodejs.org/api/readline.html#readline_event_line
rl.on("line", answer => {
  if (parseInt(answer) === thinkingOf) {
    console.log(`Guessed "${answer}" correctly in ${attemptsCount} attempts!`);
    rl.close();
  } else {
    console.log(`Nope. Try again.`);
    attemptsCount += 1;
    // http://nodejs.org/api/readline.html#readline_rl_prompt_preservecursor
    rl.prompt();
  }
});

console.log(`I'm thinking of a number between 1 and 10 inclusive`);
rl.prompt();
