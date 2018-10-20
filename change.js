// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

let changeMachine = {
	inputCents:undefined,
	quarters:undefined,
	dimes:undefined,
	nickels:undefined,
	pennies:undefined,
	greeting:'Welcome to the JayTM, an automated change machine.',
	farewell:'Thank you for using JayTM services. Have a nice day!'
	}
console.log(`${changeMachine.greeting}`);


changeMachine.inputCents = READLINE.question("Please Input money value in cents: ")

console.log(`You inputed ${changeMachine.inputCents} cents. That makes:`)

// fill in object below with all relevant properties (see instructions)


// write code below that simulates the change machine in action!
 changeMachine.quarters = Math.floor(changeMachine.inputCents / 25 )
let d = Math.floor(changeMachine.inputCents % 25 )
changeMachine.dimes = Math.floor(d / 10 )
let n = Math.floor(d % 10 )
changeMachine.nickels = Math.floor(n / 5 )
changeMachine.pennies= Math.floor(n % 5 )



console.log(`
quarters= ${changeMachine.quarters}
dimes= ${changeMachine.dimes}
nickels= ${changeMachine.nickels}
pennies= ${changeMachine.pennies}
`);
console.log(`
${changeMachine.farewell}
`)