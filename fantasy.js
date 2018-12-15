// Author: FirstName LastName
const READLINE = require("readline-sync");

// global variables
let firstName;
let lastName;
let momMaidenName;
let cityBorn;
let dreamCar;
let street;
let fantasyName;

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName(firstName, lastName) {
  first1 = this.firstName.substring(0,3);
  first2 = this.lastName.substring(0,2);
  newFirstName = first1 + first2.toLowerCase();
  return newFirstName;

}

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName(momMaidenName, cityBorn) {
  last1 = this.momMaidenName.substring(0,2)
  last2 = this.cityBorn.substring(0,3)
  newLastName = last1 + last2.toLowerCase()
  return newLastName
}

/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle(lastName, dreamCar) {
  lastnum = this.lastName.length-1
  lastlet = this.lastName.charAt(lastnum)
  seclet = this.lastName.charAt(lastnum-1)
  trilet = this.lastName.charAt(lastnum-2)
  titleFirst = lastlet + seclet + trilet
  titleW = titleFirst + this.dreamCar.toLowerCase()
  return titleW


}

/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific(titleW, street) {
  honorific = this.titleW + `of` + this.street
  return honorific
}

/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run() {
  console.log(`--------------------------------------------------------------`)
  console.log(`                        Fantasy Name`)
  console.log(`--------------------------------------------------------------`)
  console.log(`By: James Hartley`)
  console.log(`To generate your fantasy name, please answer these questions.`)
let firstName = READLINE.question(`Your First Name:`)
let lastName = READLINE.question(`Your Last Name:`)
let momMaidenName = READLINE.question(`Your mom's maiden name:`)
let cityBorn = READLINE.question(`The city you were born in:`)
let dreamCar = READLINE.question(`The model of your dream car:`)
let street = READLINE.question(`The name of the street you live on:`)
let fantasyName = newFirstName + " " + newLastName
console.log(`Thank you for answering every question! Please wait one moment.`)
console.log(` `)
console.log(`CALCULATING, PLEASE WAIT...`)
getNewFirstName(firstName, lastName)
getNewLastName(momMaidenName, cityBorn)
getTitle(lastName, dreamCar)
getHonorific(titleW, street)
let fantasyName = newFirstName + " " + newLastName
console.log(`**************************************************************`)
console.log(`All hail ${fantasyName}, ${honorific}!`)
console.log(`**************************************************************`)


}

// Run the program!
run();
