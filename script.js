class Animal {
  constructor(species) {
    this._species = species; // Use a private variable with an underscore
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log a sound the animal makes
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
