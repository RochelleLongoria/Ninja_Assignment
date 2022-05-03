

    class Ninja {
        constructor(name, health, speed, strength) {
            this.name = name;
            this.health = 0;
            this.speed = 3;
            this.strength = 3;
        }
        
        
        //  methods
        // This should log that Ninja's name to the console
        sayName() {
            console.log(`Hi, my name is ${this.name}`);
        }
        // This should show the Ninja's name, strength, speed, and health.
        showStats() {
            console.log(`Hi, my name is ${this.name}, my strength is ${this.strength}, my speed is ${this.speed}, and my health is ${this.health}`);
        }
        // This should add +10 Health to the Ninja
        saySake() {
            this.health += 10;
            console.log(`Hi, my name is ${this.health}`);
        }

        
    }

    const ninja1 = new Ninja("Hyabusa");
    ninja1.sayName();
    ninja1.saySake();
    ninja1.showStats();

    class Sensei extends Ninja {
        constructor(name, health, speed, strength){
            super("Master Splinter", 210, 10, 10, wisdom)
            this.wisdom = 10;
        }
          //  methods
        // This should log that Ninja's name to the console
        speakWisdom() {
            const speak = super.saySake();
            console.log(`${speak}`);
        }

    }

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
