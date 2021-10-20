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
const swordAndShield= {
    type: 'swordAndShield',
    range: 1.5,
    dps: 250,
    affi: 'str'
};
const staff = {
    type: 'staff',
    range: 30,
    dps: 150,
    affi: 'int'
};
const dagger = {
    rage: 0.5,
    type: 'dagger',
    dps: 300,
    affi: 'agi'
}


const weapons = [swordAndShield, staff, dagger];
const specs = ['Tank', 'Healer', 'DPS'];

// Health

function getHealth (character) {
    // For every 1 strength we get 15 HP
    const strength = character.str;
    const health = strength * 15;
    return health;
}

//Weapon damage 
const getWeaponDMG = function (character) {

    const str = character.str;
    const int = character.int;
    const agi = character.agi;  

    const weapon = character.weapon;
    const weaponAffi = weapon.affi
 
    
    if (weaponAffi === 'str') {
        return weapon.dps * str;
    } else if (weaponAffi === 'int'){
        return weapon.dps * int;
    } else if (weaponAffi === 'agi'){
        return weapon.dps * agi;
    }

 };



const inventory = {
    bagColor: 'Red',
    size: 10,
    rarity: 'Rare',
    items: []
};

const character = {
    //props
    name: 'MetaTank',
    str: 200,
    int: 50,
    agi: 100,
    spec: specs[0],
    weapon: weapons[0],
    inventory: inventory,
    isMale: true,


    //methods
    getHealth: getHealth,
    // getMana,
    // getSpeed,
    getWeaponDMG: getWeaponDMG,
    // dance,
    // printStats,
};
const dmg = character.getWeaponDMG(character);
console.log(dmg);
// const character2 = {
//     //props
//     name: 'MetaTank',
//     str: 201,
//     int: 51,
//     agi: 101,
//     spec: specs[0],
//     weapon: weapons[0],
//     inventory: inventory,
//     isMale: true,


//     //methods
//     getHealth: getHealth,
//     // getMana,
//     // getSpeed,
//     // getWeaponDMG,
//     // dance,
//     // printStats,
// };

// const character3 = {
//     //props
//     name: 'MetaTank',
//     str: 200,
//     int: 50,
//     agi: 100,
//     spec: specs[0],
//     weapon: weapons[0],
//     inventory: inventory,
//     isMale: true,


//     //methods
//     getHealth: getHealth,
//     // getMana,
//     // getSpeed,
//     // getWeaponDMG,
//     // dance,
//     // printStats,
// };
