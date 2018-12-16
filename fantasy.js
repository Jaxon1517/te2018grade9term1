// Author: FirstName LastName
const READLINE = require("readline-sync");


/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName(firstName, lastName) {
  let newFirstName = firstName.substring(0,3) + lastName.substring(0,2).toLowerCase();
  return newFirstName;

}

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName(momMaidenName, cityBorn) {
  let newLastName = momMaidenName.substring(0,2) + cityBorn.substring(0,3).toLowerCase()
  return newLastName
}

/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle(lastName, dreamCar) {
  let lastnum = lastName.length-1
  let lastlet = lastName.charAt(lastnum)
  let seclet = lastName.charAt(lastnum-1)
  let trilet = lastName.charAt(lastnum-2)
  let titleFirst = lastlet + seclet + trilet
  let titleW = titleFirst + dreamCar.toLowerCase()
  return titleW


}

/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific(titleW, street) {
  let honorific = titleW + ` of ` + street
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

  console.log(`Thank you for answering every question! Please wait one moment.`)
  console.log(` `)
  console.log(`CALCULATING, PLEASE WAIT...`)

  let newFirstName = getNewFirstName(firstName, lastName)
  let newLastName = getNewLastName(momMaidenName, cityBorn)
  let titleW = getTitle(lastName, dreamCar)
  let honorific = getHonorific(titleW, street)
  let fantasyName = newFirstName + " " + newLastName

  console.log(`**************************************************************`)
  console.log(`All hail ${fantasyName}, ${honorific}!`)
  console.log(`**************************************************************`)
}

// Run the program!
run();
