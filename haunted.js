const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`A hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
	player.courage++;
	console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
	// continue the story
	let flashlight = READLINE.question('It is dark in the house. Will you turn your flashlight? (yes or no) ')
	if(flashlight == 'yes'){
  		player.intellect++
  		console.log("you look around the house. You see a room a few feet forward to your left, another down the hallway that is to the right of you, and a staircase in the middle.")
  		leftRoom = READLINE.question("Will you go into the room to the left, or go straight to the staircase/hallway? (Left Room or Continue) ")
  		if(leftRoom == "Left Room") {
  			console.log("walking into the left room, you see it is a living room. It has large faded paintings, a few lavish pieces of furniture, and a fireplace.")
  			ironWep = READLINE.question("looking toward the fireplace, you see a  fire iron. Will you take it? (yes or no)")
  			if(ironWep == "yes"){
  				player.courage++
  				player.weapon = 'Fire iron'
  				bookQuest = READLINE.question("You pick up the fire iron. Before you leave the room, you see a book. Do you look at the book?")
  				if(bookQuest == "yes") {
  					player.intellect+3
  					player.charm+3
  					console.log("the book is a jokebook. You flip through a few of the pages before leaving the room")
  				}
  			} else {
  				bookQuest2 = READLINE.question(`you decide to not pick up the fire iron. Before you leave the room, you see a book. do you look at the book?`)
  				if(bookQuest2 == "yes"){
  					player.intellect+3
  					player.charm+3
  					console.log("the book is a jokebook. You flip through a few of the pages before leaving the room")
  				} else{
  					console.log("You decide to continue.")
  					} 
  			}
  		} else {
  			console.log(`You decide to continue to the hallway and staircase`)
  			}
  		hallwayQuest = READLINE.question("Will you go up the stairs? or down the hallway? (hallway, or stairs)")
  		if(hallwayQuest == "hallway"){
  			console.log(`${player.name} see somthing slithing toward you. ${player.name} at first thinks it is a snake, but after looking at it, ${player.name} sees it is pitch black, thicker than a snake, and doesn't have a distinct head or tail. It seemed more like a black tentacle.`)
  			atk = READLINE.question('Do you attack the monster? or run? (attack or run)')
  			if(player.weapon == "Fire iron" && atk == "attack") {
  				console.log(`${player.name} swings the fire iron at the creature full force. it smacks against one of the walls of the hallway. When ${player.name} shines the flashlight on it, it has dissapeared.`)
  				console.log(`You continue into the room down the hall. The room is a dining room, with clean cutlery and plates layed out. On the dining table is a peculuar white cat wimpering.`)
  				console.log(`Approaching the cat, growls, and tries to stand, but appears injured. the left leg, right front paw, right ear, and parts of the tail of the cat is the same color of the snake you saw earlier.`)
  				catdes = READLINE.question(`Will you try and help the cat, or just leave the room? ('help cat' or 'leave'`)
  				if(catdes == 'help cat'){
  					console.log(`You sooth the cat, and try to calm it down. after helping its injury, you decide that you should take it home and care for it. you leave the house and head home.`)
  					console.log("-------------('C00l CAT' Ending)-------------")
  				} else {
  					console.log(`You decide to leave the room, and go upstairs. When you get upstairs, you see two doors: a wooded door, and a much larger, gold door.`)
  					door = READLINE.question(`Which door do you go through? (gold or wood)`)
  					if(door == "gold"){
  						console.log(`you step into the gold door, and see a large opening out of the room you are in that leads outside. Suddenly, you are surrounded by dark bats, the same color as the snake. unable to see, you can feel them carry you out of the house. As you leave, you can hear another scream coming from the house. `)
  						console.log("-------------('Bad Bats' Ending)-------------")
  					} else{
  						console.log(`you step into the wooden door. on a pedistal is a small sphere made with gears and springs, with a wind-up on it. When you wind it up, butterflies, the same color as the snake start to appear. later you learn they are not dangerous, and turn a bright white in the sunlight. you leave the haunted house.`)
  						console.log(`-------------('Beautiful Buterfly' Ending)-------------)`)
  					}
  				}
  			}
  			if(player.weapon != "Fire Iron" && atk == "attack"){
  				console.log(`${player.name} attempts to grab the creature and strangle it. In their hand, it slips out and bites ${player.name}. ${player.name} wakes up passed out at their home.`)
  				console.log("-------------('Pass-out' Ending)-------------")
  			}
  			if(atk == "run"){
  				player.courage--
  				console.log(`${player.name} run away from the creature out of the hallway. After seeing it is following them, fast, ${player.name} start sprinting. By the time they stop, ${player.name} is outside,  far away from the house.`)
  				console.log("--------------('Runaway'Ending)--------------")
  			}
  		}
	} else{
  	flashlight = READLINE.question('Are you sure? (yes or no)')
  	if(flashlight == 'yes'){
  		player.intellect-4
  		flashlight = READLINE.question('Are you sure? (yes or no)')
  		if(flashlight = 'yes'){
  			player.intellect-4
  		    flashlight = READLINE.question('Are you sure? (yes or no)')
  		    if(flashlight = 'yes'){
  		    	player.intellect-4
  		        flashlight = READLINE.question('Are you sure? (yes or no)')
  		        if(flashlight = 'yes'){
  		        	player.intelect = 1
  		        	console.log(`hmm. ${player.name}'s intellect seems to be too low to make an adaqate decision, so i'll help you out.`)
  		        } else{}
  		    } else{}
  		} else{}
  	} else{ 

  	 }
  }
} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However, you remember that you forgot to pick up your pizza order. You hurry home.`);
  // continue the story

}
console.log("Thanks for playing!");