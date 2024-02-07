class Animal {
    constructor(species, habitat) {
        this.species = species;
        this.habitat = habitat;
    }
}

class Mammal extends Animal {
    constructor(species, habitat, dietType, reproductionMethod) {
        super(species, habitat);
        this.dietType = dietType;
        this.reproductionMethod = reproductionMethod;

    }
}

class Bird extends Animal {
    constructor(species, habitat, locomotion, nestingPlaces) {
        super(species, habitat);
        this.locomotion = locomotion;
        this.nestingPlaces = nestingPlaces;
    }
}

const mammal = new Mammal("Lion", "Savannah", "Carnivore", "Viviparous");
const bird = new Bird("Eagle", "Mountains", "Flight", "Cliffs");
console.log(mammal);
console.log(bird);