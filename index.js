// import chalk from "chalk";
// import inquirer from "inquirer";
// // classess player & opponent.
// class Player {
//     name: string;
//     fuel: number = 100;
//     constructor(name: string) {
//         this.name = name;
//     }
//     fuelDecrease() {
//         let fuel = this.fuel - 25
//         this.fuel = fuel
//     }
//     fuelincrease() {
//         let fuel = this.fuel + 25
//         this.fuel = fuel
//     }
// }
// class Opponent {
//     name: string;
//     fuel: number = 100;
//     constructor(name: string) {
//         this.name = name;
//     }
//     fuelDecrease() {
//         let fuel = this.fuel - 25
//         this.fuel = fuel
//     }
// }
// // let Name & opponent select.
// let player = await inquirer.prompt({
//     type: "input",
//     name: "name",
//     message: "Enter your name:",
// });
// let opponent = await inquirer.prompt({
//     type: "list",
//     name: "oppo",
//     message: "Select your opponent name:",
//     choices: ["Shredder", "Tom", "Buddy"],
// });
// // together Data.
// let p1 = new Player(player.name);
// let o1 = new Opponent(opponent.oppo);
// do {
//     if (opponent.oppo == "Shredder") {
//         // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
//         let ask = await inquirer.prompt({
//             type: "list",
//             name: "option",
//             message: "Select your move:",
//             choices: ["Attack", "Drink fuel", "Run for save your life..."],
//         });
//         if (ask.option == "Attack") {
//             console.log("Attack")
//             let num = Math.floor(Math.random() * 2)
//             if (num > 0) {
//                 p1.fuelDecrease()
//                 console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
//                 console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
//                 if (p1.fuel <= 0) {
//                     console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."))
//                     process.exit()
//                 }
//                 if (num <= 0) {
//                     o1.fuelDecrease()
//                     console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
//                     console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
//                     if (o1.fuel <= 0) {
//                         console.log(chalk.green.bold.italic("You Win!"))
//                         process.exit()
//                     }
//                 }
//             }
//             if (ask.option == "Drink fuel") {
//                 p1.fuelincrease()
//                 console.log(chalk.bold.italic.green(`You Drink fuel, Your fuel is ${p1.fuel}`))
//             }
//             if (ask.option == "Run for save your life...") {
//                 console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."))
//                 process.exit()
//             }
//         }
//     }
// }
// while (true)
import chalk from "chalk";
import inquirer from "inquirer";
// Classes for Player and Opponent
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel += 25;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
// Function to start the game
async function startGame() {
    // Ask for player's name
    let player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Enter your name:",
    });
    // Ask to select opponent
    let opponent = await inquirer.prompt({
        type: "list",
        name: "oppo",
        message: "Select your opponent name:",
        choices: ["Shredder", "Tom", "Buddy"],
    });
    // Create player and opponent instances
    let p1 = new Player(player.name);
    let o1 = new Opponent(opponent.oppo);
    // Start battle
    startBattle(p1, o1);
}
// Function to perform battle
async function startBattle(player, opponent) {
    console.log(`${chalk.bold.green(player.name)} VS ${chalk.bold.red(opponent.name)}`);
    while (true) {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your move:",
            choices: ["Attack", "Drink fuel", "Run for save your life..."],
        });
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player.fuelDecrease();
                console.log(chalk.bold.red(`${player.name} fuel is ${player.fuel}`));
                console.log(chalk.bold.green(`${opponent.name} fuel is ${opponent.fuel}`));
                if (player.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time."));
                    break;
                }
            }
            else {
                opponent.fuelDecrease();
                console.log(chalk.bold.green(`${player.name} fuel is ${player.fuel}`));
                console.log(chalk.bold.red(`${opponent.name} fuel is ${opponent.fuel}`));
                if (opponent.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                    break;
                }
            }
        }
        else if (ask.option === "Drink fuel") {
            player.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink fuel, Your fuel is ${player.fuel}`));
        }
        else if (ask.option === "Run for save your life...") {
            console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time."));
            break;
        }
    }
}
// Start the game
startGame();
