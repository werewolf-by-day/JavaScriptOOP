
//Part I
class Ninja{
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.speed = 3;
		this.strength = 3;
	}

	sayName() {
		console.log(`Greetings! My name is ${this.name}`);
	}

	showStats() {
		console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
	}

	drinkSake() {
		this.health += 10;
		if(this.wisdom === undefined) {
			console.log("Kanpai!");
		}
		return this;
	}
}

//Part II
class Sensei extends Ninja {
	constructor(name) {
		super(name);
		this.health = 200;
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
	}

	speakWisdom() {
		super.drinkSake();

		function rng(min=0, max=4) {
			return Math.floor(Math.random() * 5);
		}

		let wiseWords = ["What you know is dangerous to your enemy. \nWhat you think you know is dangerous to yourself.", "We choose what holds us back, \nand what moves us forward.", "Anger clouds the mind. \nTurned inward, it is an unconquerable enemy.", "Practice Patience.", "With self-discipline \nmost anything is possible."];

		console.log(wiseWords[rng()]);
		return this;
	}

	showStats() {
		console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
	}
}

let mikey = new Ninja("Michaelangelo");
mikey.sayName();
mikey.showStats();
mikey.drinkSake();
mikey.showStats();

let super_sensei = new Sensei("Master Splinter");
super_sensei.showStats();
super_sensei.speakWisdom();
super_sensei.showStats();
