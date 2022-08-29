// Constructor "What it is to be a player?"
class Player {
    constructor(name) {
        this.name = name;
        this.totalCoins = 0;
        this.status = 'Small';
        this.hasStar = false;
        this.gameActive = true;
    }

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        if (this.hasStar) {
            this.hasStar = false;
            console.log('Your star protected you!')
        } else if (this.status === 'Powered Up') {
            this.status = 'Big';
        } else if (this.status === 'Big') {
            this.status = 'Small';
        } else {
            this.status = 'Dead';
            this.gameActive = false;
        }
    }

    gotPowerup() {
        if (this.status === 'Big') {
            this.status = 'Powered Up';
        } else if (this.status === 'Small') {
            this.status = 'Big';
        } else if (this.status === 'Powered Up') {
            console.log('You got a Star!')
            this.hasStar = true;
        }
    }

    addCoin() {
        this.totalCoins += 1;
    }

    print() {
        console.log(`Name: ${this.name}\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}\n`)
    }
}

const user = new Player('Mario');


// console.log(user);
const savePrincess = (user) => {
    let random = Math.ceil(Math.random()*3);
    if (user.status === 'Dead') {
        clearInterval(start);
    } else if (random === 1) {
        user.gotHit();
        user.print();
    } else if (random === 2) {
        user.gotPowerup();
        user.print();
    } else if (random === 3) {
        user.addCoin();
        user.print();
    } 
}

const start = setInterval(() => savePrincess(user), 1500);