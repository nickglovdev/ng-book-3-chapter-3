import doctor from "./practice/doctors.js"
import createPet from "./practice/pets.js"

//Bringing them in one by one. Forgot how to bring them in a group.
import  { createJumpStop } from "./practice/musicRow.js"
import { createChatten } from "./practice/musicRow.js"
import  { createPolar } from "./practice/musicRow.js"

//Doctors
doctor
console.log(doctor)


//Pets
let petList = []
const newPetOne = petList.push(createPet("Jack", "Jack Russel"))
const newPetTwo = petList.push(createPet("Puddles", "Cat"))
const newPetThree = petList.push(createPet("Zeek", "Mutt"))
console.log(petList)

//Music Row
let jumpStopList = []
let chattenList = []
let polarList = []

const newArtistOne = chattenList.push(createChatten("Bruce Atikins", "Country", 23)) 
const newArtistTwo = polarList.push(createPolar("Jensen Brown", "Pop", 20))
const newArtistThree = jumpStopList.push(createJumpStop("Dre Funkz", "Funk", 25))
const newArtistFour = jumpStopList.push(createJumpStop("Dusta Grimes", "Rap", 21))
const newArstistFive = chattenList.push(createChatten("Barthalomew Danielson", "Bluegrass", 23))
const newArtistSix = chattenList.push(createChatten("Avilee Dallas", "Country", 19))
const newArstistSeven = polarList.push(createPolar("Aust Kinkaid", "Pop", 22))
const newArtistEight = jumpStopList.push(createJumpStop("Loyonce Branis", "Rap", 27))

console.log("Chatten: Country or Bluegrass", chattenList)
console.log("JumpStop: Funk and Rap, jumpStopList", jumpStopList)
console.log("Polar: Pop", polarList)


