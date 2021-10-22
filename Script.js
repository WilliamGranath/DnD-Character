// const printPi = function () {
//     console.log("3.1415926")
// }

// const printSum = function(x, y, myCallback) {
//     const sum = x + y;
//     myCallback();
//     console.log(sum);
// };

// printSum(10,50, printPi);

// const playList = ['Pop', 'Code life', 'Rock'];
// const myArray = new Array(1, 2, 3, 4);
// console.log(myArray);

// const emptyArray = [];
// console.log(emptyArray);
// emptyArray[0] = 1;
// emptyArray[1] = 10002;
// console.log(emptyArray);

// //Arrays indexeras frn 0-n

document.addEventListener('DOMContentLoaded', function () {});

const weaponToString = function () {
	return `
        ${this.type}
        DPS: ${this.dps}
        Range: ${this.range}
        Dmg type: ${this.affi}`;
};

const swordAndShield = {
	type: 'sword and shield',
	range: 1.5,
	dps: 250,
	affi: 'str',
	toString: weaponToString
};
const staff = {
	type: 'staff',
	range: 30,
	dps: 150,
	affi: 'int',
	toString: weaponToString
};
const dagger = {
	rage: 0.5,
	type: 'dagger',
	dps: 300,
	affi: 'agi',
	toString: weaponToString
};

const leather = {
	sellPrice: 10,
	weight: 4,
	rarity: 'Common',
	type: 'Material'
};

const iron = {
	sellPrice: 10,
	weight: 4,
	rarity: 'Common',
	type: 'Material'
};

const potion = {
	sellPrice: 10,
	weight: 4,
	rarity: 'Common',
	type: 'Consumable'
};

const meat = {
	sellPrice: 10,
	weight: 4,
	rarity: 'Common',
	type: 'Material'
};

const weapons = [swordAndShield, staff, dagger];
const specs = ['Tank', 'Healer', 'DPS'];
const items = [leather, iron, potion, meat, ...weapons];

// Health

const calcHealth = function () {
	const strength = this.str;
	const health = strength * 15;
	return health;
};

//Weapon damage
const getWeaponDMG = function (character) {
	const str = character.str;
	const int = character.int;
	const agi = character.agi;

	const weapon = character.weapon;
	const weaponAffi = weapon.affi;

	if (weaponAffi === 'str') {
		return weapon.dps * str;
	} else if (weaponAffi === 'int') {
		return weapon.dps * int;
	} else if (weaponAffi === 'agi') {
		return weapon.dps * agi;
	}
};

const inventory = {
	color: 'Red',
	size: 10,
	rarity: 'Rare',
	items: [],
	toString: function () {
		return `
        Bag size: ${this.size}
        Rarity: ${this.rarity}
        Items: ${this.items.toString()}
        Color: ${this.color}`;
	}
};

function getSpeed() {
	const { str, agi } = this;
	const speed = agi > 100 ? str * 5 : str * 2;
	return speed;
}

function loot(item) {
	const { inventory } = this;
	const { size, items } = inventory;
	const { length } = items;
	if (length === size) {
		return false;
	} else {
		items.push(item);
		return true;
	}
}
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const createCharacter = function (name, spec, weapon, isMale) {
	return {
		//props
		name: name,
		str: getRandomInt(20),
		int: getRandomInt(20),
		agi: getRandomInt(20),
		spec: spec,
		weapon: weapon,
		inventory: inventory,
		isMale: isMale,

		//methods
		loot: loot,
		getHealth: calcHealth,
		getMana: function () {
			// For every int our char gets 8.5 mana;
			const mana = this.int * 8.5;
			return mana;
		},
		getSpeed: getSpeed,
		getWeaponDMG: getWeaponDMG,
		toString: function () {
			const { name, str, int, agi, spec, weapon, inventory, isMale } = this;
			const health = this.getHealth(this);
			const mana = this.getMana();
			const speed = this.getSpeed();
			const string = `
			Name: ${name}<
        	Gender: ${isMale ? 'Man' : 'Woman'}
       		Health = ${health}
        	Mana = ${mana}
        	Speed ${speed}
        	Strength: ${str}
        	Intellect: ${int}
        	Agillity: ${agi}
        	Specialization: ${spec}

        	<li>Main Weapon: ${weapon.toString()}</li>

        	<li>Inventory: ${inventory.toString()}</li>
        `;
			return string;
			console.log(string);
		},

		toHTML_String: function () {
			const { name, str, int, agi, spec, weapon, inventory, isMale } = this;
			const health = this.getHealth(this);
			const mana = this.getMana();
			const speed = this.getSpeed();
			const string = `
			<li>Name: ${name}</li>
        	<li>Gender: ${isMale ? 'Man' : 'Woman'}</li>
       		<li>Health = ${health}</li>
        	<li>Mana = ${mana}</li>
        	<li>Speed ${speed}</li>
        	<li>Strength: ${str}</li>
        	<li>Intellect: ${int}</li>
        	<li>Agillity: ${agi}</li>
        	<li>Specialization: ${spec}</li>
			<br/><br/>
        	<li>Main Weapon: ${weapon.toString()}</li>
			<br/><br/>
        	<li>Inventory: ${inventory.toString()}</li>
        `;
			return string;
			console.log(string);
		}
	};
};

// DOM man
const createButton = document.querySelector('#create-character');
createButton.addEventListener('click', function () {
	const char2 = createCharacter('Wille', specs[0], weapons[0], true, inventory);
	const string = char2.toString();
	console.log(string);
	const unorderedList = document.querySelector('#new-character');
	unorderedList.innerHTML = char2.toHTML_String();
});
