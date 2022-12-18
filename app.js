//General Class
class Animalia {
  constructor() {
    if (this.constructor === Animalia) {
      throw new Error("Can't Initialize The Base Class");
    }
  }
  eat() {
    throw new Error("This is a Base method, it cannot be initialized");
  }
  move() {
    throw new Error("This is a Base method, it cannot be initialized");
  }
}
class withOutBackBone extends Animalia {
  constructor() {
    super();
    if (this.constructor === withOutBackBone) {
      throw new Error("This Is A Base Class");
    }
  }
  bones = false;
  eat() {
    console.log("We can eat.");
  }
  move() {
    console.log("We can move about.");
  }
  reproduction() {
    console.log("We can give birth to our young ones.");
  }
  pollination() {
    console.log("We help plants to reproduce.");
  }
}
class Arthropoda extends withOutBackBone {
  constructor() {
    super();
    if (this.constructor === Arthropoda) {
      throw new Error("This Is The Base Class For Arthropods");
    }
  }
  coldBlooded = true;
  sexes() {
    console.log("Most of us have separate sexes");
  }
}
class Butterfly extends Arthropoda {
  hasAnthenna = true;
  numberOfAnthenna = 2;
  lifeCycle = 4;
  feed() {
    console.log("We feed on nectar of flowers and many fruits as well.");
  }
  #fly() {
    console.log("We fly, because we have wings.");
  }
  movement() {
    this.#fly();
  }
}
const butterfly = new Butterfly();
console.log(butterfly);
butterfly.movement(); //Calling the Encapsulated Method.

class withBackBone extends Animalia {
  constructor() {
    super();
    if (this.constructor === withBackBone) {
      throw new Error("This Is A Base Class");
    }
  }
  bones = true;
  presenceOfEyes = true;
  eat() {
    console.log("We can eat.");
  }
  move() {
    console.log("We can move about.");
  }
  digestion() {
    console.log(
      "Complete digestive system of mouth, esophagus, stomach,intestines and anus"
    );
  }
  sexualReproduction() {
    console.log("We give birth to our young ones sexually.");
  }
}

class Fish extends withBackBone {
  constructor(name) {
    super();
    this.name = name;
  }
  coldBlooded = true;
  presenceOfScales = true;
  presenceOfFins = true;
  numberOfEyes = 2;
  #swim() {
    console.log("We swim.");
  }
  movement() {
    this.#swim();
  }
}
const fish = new Fish("Tilapia");
console.log(fish);
fish.movement(); //Calling the Encapsulated Method.

class Amphibian extends withBackBone {
  constructor(name) {
    super();
    this.name = name;
  }
  coldBlooded = true;
  carnivores = true;
  numberOfEyes = 2;
  #hopping() {
    console.log("We hop.");
  }
  movement() {
    this.#hopping();
  }
}
const frog = new Amphibian("Frog");
console.log(frog);
frog.movement(); //Calling the Encapsulated Method

class Reptile extends withBackBone {
  constructor(name) {
    super();
    this.name = name;
  }
  coldBlooded = true;
  oviparous = true;
  numberOfEyes = 2;
  numberOfLegs = 4;
  #creeping() {
    console.log("We creep, this actual gave us our name.");
  }
  movement() {
    this.#creeping();
  }
}
const tortoise = new Reptile("Tortoise");
console.log(tortoise);
tortoise.movement(); //Calling the Encapsulated Method

class Aves extends withBackBone {
  constructor(name) {
    super();
    this.name = name;
  }
  warmBlooded = true;
  presenceOfFeathers = true;
  numberOfEyes = 2;
  skinGland = false;
  #fly() {
    console.log("We fly, our wings and hollow enables us to do that.");
  }
  movement() {
    this.#fly();
  }
}
const bird = new Aves("Eagle");
console.log(bird);
bird.movement(); //Calling the Encapsulated Method

class Mammal extends withBackBone {
  constructor(name) {
    super();
    this.name = name;
  }
  warmBlooded = true;
  presenceOfMammaryGlands = true;
  numberOfEyes = 2;
  presenceOfHairAndFur = true;
  chambersOfHeart = 4;
  #walk() {
    console.log("We walk.");
  }
  movement() {
    this.#walk();
  }
}
const mammal = new Mammal("Cat");
console.log(mammal);
mammal.movement(); //Calling the Encapsulated Method
