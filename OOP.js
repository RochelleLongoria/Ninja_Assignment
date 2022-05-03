

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