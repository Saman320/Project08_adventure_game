#! usr/bin/env node



import chalk from "chalk";
import inquirer from "inquirer";

// classess player & opponent.
class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelincrease() {
        this.fuel = 100

    }
}

class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

// let Name & opponent select.
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your name:",
});

let opponent = await inquirer.prompt({
    type: "list",
    name: "oppo",
    message: "Select your opponent name:",
    choices: ["Shredder", "Tom", "Buddy"],
});



// together Data.
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.oppo);



do {
    if (opponent.oppo == "Shredder") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your move:",
            choices: ["Attack", "Drink fuel", "Run for save your life..."],
        });
        if (ask.option == "Attack") {
            console.log("Attack")
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."))
                    process.exit()
                }


                if (num <= 0) {
                    o1.fuelDecrease()
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))

                    if (o1.fuel <= 0) {
                        console.log(chalk.green.bold.italic("You Win!"))
                        process.exit()
                    }

                }
            }



            if (ask.option == "Drink fuel") {
                p1.fuelincrease()
                console.log(chalk.bold.italic.green(`You Drink fuel, Your fuel is ${p1.fuel}`))
            }





            if (ask.option == "Run for save your life...") {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."))
                process.exit()
            }
        }
    }





    if (opponent.oppo == "Tom") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your move:",
            choices: ["Attack", "Drink fuel", "Run for save your life..."],
        });
        if (ask.option == "Attack") {
            console.log("Attack")
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."))
                    process.exit()
                }


                if (num <= 0) {
                    o1.fuelDecrease()
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))

                    if (o1.fuel <= 0) {
                        console.log(chalk.green.bold.italic("You Win!"))
                        process.exit()
                    }

                }
            }



            if (ask.option == "Drink fuel") {
                p1.fuelincrease()
                console.log(chalk.bold.italic.green(`You Drink fuel, Your fuel is ${p1.fuel}`))
            }





            if (ask.option == "Run for save your life...") {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."))
                process.exit()
            }
        }
    }




    if (opponent.oppo == "Buddy") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your move:",
            choices: ["Attack", "Drink fuel", "Run for save your life..."],
        });
        if (ask.option == "Attack") {
            console.log("Attack")
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."))
                    process.exit()
                }


                if (num <= 0) {
                    o1.fuelDecrease()
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))

                    if (o1.fuel <= 0) {
                        console.log(chalk.green.bold.italic("You Win!"))
                        process.exit()
                    }

                }
            }



            if (ask.option == "Drink fuel") {
                p1.fuelincrease()
                console.log(chalk.bold.italic.green(`You Drink fuel, Your fuel is ${p1.fuel}`))
            }





            if (ask.option == "Run for save your life...") {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."))
                process.exit()
            }
        }
    }
}
while (true)
