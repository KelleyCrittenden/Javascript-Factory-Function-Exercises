import createDoctor from "./doctorFactory.js"
import createPet from "./petFactory.js"

const drReed = createDoctor("Jim Reed", "Podiatrist", "113 Martin Street")
console.log(drReed)

const bishop = createPet("Bishop", "Miniature Schnauzer")
const remy = createPet("Remy", "Giant Schnauzer")

console.log(bishop)
console.log(remy)