const readlineSync = require('readline-sync');

let genNumInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let playerStatus = function (playerName, hp, inv) {
    this.playerName = playerName;
    this.hp = hp || 100;
    this.inv = inv || [];
    this.printPlayer = function () {
        console.log("Farmer:" + this.playerName + " , Hp: " + this.hp);
        console.log("Inventory");
        for (i = 0; i < this.inv; i++) {
            console.log(inv[i]);
        }
    }
}


let enemy = function (type, hitPoints) {
    this.type = type
    this.hitPoints = hitPoints
    this.printEnemy = function () {
        console.log("\nOh no! You encounter the " + this.type + " and it has " + this.hitPoints + " hp.")
    }
}


let enemies = function () {
    enemyType = ['🚜 Possessed Tractor', '🐓 Evil Chicken', '🪴 Giant Venus-Fly-Trap'];
    randomEnemy = enemyType[genNumInRange(0, enemyType.length)];
    randomHitpoints = 0;
    if (randomEnemy === "🚜 Possessed Tractor") {
        randomHitpoints = genNumInRange(80, 100);
    } else if (randomEnemy === "🐓 Evil Chicken") {
        randomHitpoints = genNumInRange(50, 79);
    } else {
        randomHitpoints = genNumInRange(20, 49);
    }
    randomEnemy = new enemy(randomEnemy, randomHitpoints);
    return randomEnemy;
};


//1. Console must greet player with a fun message
console.log('\nWelcome to Colossal Adventure RPG' + '! \n')

//2. Console must ask for the player's name and store it
playerName = readlineSync.question('\nMay I have your name? \n');
console.log('\nHi Farmer ' + playerName + '!\n' + 'I hope you are brave enough to continue...\n');
player = new playerStatus(playerName);

console.log('\nYou are in a Cursed☠️Farm full of monsters. You only have 100hp. There are two weapons: a Hoe and a Shovel. You can only choose one to start this Cursed Farm Adventure. ')

//Choosing a weapon
const weapon = readlineSync.question("\nWhich weapon would you like to use? Type (h) for Hoe, (s) for Shovel': ");
    if (weapon === "h"){
        console.log("\nYou have chosen the Hoe!")
    } else if (weapon === "s"){
        console.log("\nYou have chosen the Shovel!")
    }
        console.log("\nLet's carefully proceed with the adventure" + ' Farmer ' + playerName + '...\n')


//3. Walking 
while (true) {
    pressKey = readlineSync.keyIn("Enter 'w' to walk: \n"); 
        if (pressKey = "w") {
            chance = genNumInRange(0, 100);
            if (chance >= 50) {
                farmEnemy = enemies();
                farmEnemy.printEnemy();

//If a wild enemy appears:
// - The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// - The player can decide to attack or run
// - If attacking, a random amount of damage will be dealt between a min and max
// - If running, there will be a 50% chance of escaping
// - After the player attacks or runs the enemy attacks back for a random damage amount
// - The player and enemy will attack each other in a loop until one of them passes out or dies.
// - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking.
while (true, player.hp > 0 && farmEnemy.hitPoints > 0) {
    pressKey = readlineSync.question("Do you want to fight or runaway?" + "\n Type 'f' to fight or 'r' to runaway: ");
    if (pressKey == "f") {
        damage = genNumInRange(20, 50);
        farmEnemy.hitPoints -= damage;
        console.log("\nYou hit " + farmEnemy.type + " for " + damage + " points");

        if (farmEnemy.hitPoints < 0) {
            console.log("\nYou killed the " + farmEnemy.type);
            upgrade = genNumInRange(20, 40);
            player.hp += upgrade;
            console.log("\nYou now have " + player.hp + " hp.");
            break;
        }

        damage2 = genNumInRange(20, 50);
        player.hp -= damage2;
        console.log("\nThe " + farmEnemy.type + " hit you for " + damage2 + " points.");
        console.log("\nYou have " + player.hp + " hp left.");

    } else {
        fiftyFifty = genNumInRange(0, 10);
        if (fiftyFifty < 5) {
            losePoints = genNumInRange(20, 40);
            player.hp -= losePoints;
            console.log("\nYou succesfully escaped from the " + farmEnemy.type + ", but you now have " + player.hp + " hp.");
            break;


        } else {
            console.log("\nYou did not escape from the " + farmEnemy.type);
            losePoints = genNumInRange(20, 40);
            player.hp -= losePoints;
            console.log("\nThe " + farmEnemy.type + " hit you. You lost " + losePoints + " hp.");
            console.log("\nYou have " + player.hp + " hp.");

        }

    }
}

} else {
console.log("\nThere are no visible enemies.");

}
if (player.hp < 0) {
console.log("\nThe " + farmEnemy.type + " has killed you.")
console.log("\nFarmer " + playerName + " you have died 🪦 ." + " Your adventure in the ☠️Cursed ☠️ Farm☠️ is over...")
break


}
} else if (input == "print") {
player.printPlayer();
}
};