import doctor from "./practice/doctors.js"
import createPet from "./practice/pets.js"

doctor
console.log(doctor)

let petList = []
const newPetOne = petList.push(createPet("Jack", "Jack Russel"))
const newPetTwo = petList.push(createPet("Puddles", "Cat"))
const newPetThree = petList.push(createPet("Zeek", "Mutt"))
console.log(petList)


