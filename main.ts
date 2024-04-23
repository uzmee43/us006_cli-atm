#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";
import chalkanimation from "chalk-animation";
const sleep = () => { return new Promise(resolve => setTimeout(resolve, 2000)); };
  
async function  wellcome(){
  let rainbowTiyle =chalkanimation.rainbow("Welcome Dear customer!");
  await sleep();
  rainbowTiyle.stop();
} 

await wellcome(); 

let myBlance = 50000;
let id = 4444;
let mypin = 123;

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "userId",
    message: chalk.bgBlue("enter your ID pleas:"),
  },

  {
    type: "number",
    name: "userPin",
    message: chalk.green("enter your pin pleas:"),
  },
  
  {
    type: "list",
    name: "accountType",
    message: chalk.bgBlueBright("enter your account type pleas:"),
    choices: ["savings", "current"],
  },
]);
if(answers.id==="userId" && answers.mypin === "mypin"){
    console.log(chalk.bgBlueBright("Welcome to your account"));

}
else{
    console.log(chalk.red("Your ID or pin is incorrect"));
}
let opections = await inquirer.prompt([
  {
    type: "list",
    name: "opection",
    message: chalk.green("enter your account type pleas:"),
    choices: ["withdraw", "fast cash", "chaeck balance"],
  },
]);

if (opections.opection === "withdraw") {
  let amounts = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: chalk.blue("enter your amount pleas:"),
    },
  ]);
  // if user select withdraw. we will check the money in his/her account and ask for how much he want to withdraw,

  if (amounts.amount <= myBlance) {
    let blance: number = myBlance - amounts.amount;
    console.log(chalk.bgRedBright(`The remaining amount is ${blance}`));
  } else {
    console.log(chalk.red("you have insufficient balance"));
  }
}

// if user select fast cash.
else if (opections.opection === "fast cash") {
  let amounts = await inquirer.prompt([
    {
      type: "list",
      name: "amount",
      message: "enter your amount pleas:",
      choices: ["1000", "2000", "5000", "10000", "20000", "50000"],
    },
  ]);
  if (amounts.amount <= myBlance) {
    let blance2: number = myBlance - amounts.amount;
    console.log(chalk.blue(`The remaining amount is ${blance2}`));
  }
}

// if user select chaeck balance.
else if (opections.opection === "chaeck balance") {
  let balance3 = myBlance;
  console.log(chalk.bgBlueBright(`Your balance is ${balance3}`));
}