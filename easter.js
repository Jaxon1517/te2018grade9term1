// import readline-sync module, don't touch!
const READLINE = require("readline-sync");
let userInput = READLINE.question("What is the year?");
console.log(`y=${userInput}`);

// Write your program below!
// First line should get user input (year) and store it in variable y.
//#1
let y = userInput;


//#2
let a = Math.floor(y % 19);
//#3
let b = Math.floor(y / 100);
let c = Math.floor(y % 100);
//#4
let d = Math.floor(b / 4);
let e = Math.floor(b % 4);
//#5
let f = Math.floor((b+8) / 25);
//#6
let g = Math.floor((b-f+1) / 3);
//#7
let h = Math.floor((19 * a + b - d - g + 15) % 30);
//#8
let i = Math.floor(c / 4);
let k = Math.floor(c % 4);
//#9
let r = Math.floor((32 + 2 * e + 2 * i - h - k) % 7);
//#10
let m = Math.floor((a + 11 * h + 22 * r) / 451);
//#11
//value n defines the month
let n = Math.floor((h + r - 7 * m + 114) / 31);
// p+1 gives the day
let p = Math.floor((h + r - 7 * m + 114) % 31);
//prints whatever variable is in the {} brackets
console.log(`
	y=${y} 
	a=${a} 
	b=${b} 
	c=${c} 
	d=${d} 
	e=${e} 
	f=${f} 
	g=${g} 
	h=${h} 
	i=${i} 
	k=${k} 
	r=${r}
	m=${m} 
	n=${n} 
	p=${p}
	Easter was on ${n}/${p+1}`);
 