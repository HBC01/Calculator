#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter the 1st number", type: "number", name: "1st number" },
    { message: "Enter the 2nd number", type: "number", name: "2nd number" },
    { message: "Select the Operator", type: "list", name: "Operator", choices: ["+", "-", "*", "/", "1st square", "2nd square"] }
]);
if (answer.Operator === "+") {
    console.log(answer["1st number"] + answer["2nd number"]);
}
else if (answer.Operator === "-") {
    console.log(answer["1st number"] - answer["2nd number"]);
}
else if (answer.Operator === "*") {
    console.log(answer["1st number"] * answer["2nd number"]);
}
else if (answer.Operator === "/") {
    console.log(answer["1st number"] / answer["2nd number"]);
}
else if (answer.Operator === "1st square") {
    console.log(answer["1st number"] * answer["1st number"]);
}
else if (answer.Operator === "2nd square") {
    console.log(answer["2nd number"] * answer["2nd number"]);
}
else {
    "Option is not correct ,Plz select the Correct Option";
}
