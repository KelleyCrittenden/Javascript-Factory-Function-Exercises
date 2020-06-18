const createPet = (petName, petBreed) => {
    return {
        "petName": petName,
        "petBreed": petBreed
    }
}

const bishop = createPet("Bishop", "Miniature Schnauzer")
const remy = createPet("Remy", "Giant Schnauzer")
const mya = createPet("Mya", "Siberian Husky")


let bowWowKennels = [bishop, remy, mya];

export default bowWowKennels


