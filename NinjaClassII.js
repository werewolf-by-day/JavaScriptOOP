
var Ninja = function Ninja(name) {
	var speed = 3;
	var strength = 3;
	this.health = 100;
	this.name = name;

	this.showStats = function() {
		console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
		return this;
	}

	this.kick = function(ninja) {
		var damage = strength * 5;
		ninja.health -= damage;
		console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health! \nIt's super effective!");
	}
}
			
Ninja.prototype.sayName = function() {
	console.log("My name is " + this.name);
	return this;
}

Ninja.prototype.drinkSake= function() {
	this.health += 10;
	console.log("Kanpai!")
	return this;
}

Ninja.prototype.punch = function(ninja) {
	ninja.health -= 5;
	console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
	return this;
}

var blue_ninja = new Ninja("Sub-Zero");
var yellow_ninja = new Ninja("Scorpion");

yellow_ninja.punch(blue_ninja);
blue_ninja.kick(yellow_ninja);

blue_ninja.showStats();
yellow_ninja.showStats();

blue_ninja.drinkSake();
yellow_ninja.drinkSake();

blue_ninja.showStats();
yellow_ninja.showStats();
