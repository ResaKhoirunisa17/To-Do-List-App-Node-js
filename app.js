const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todos = [
    "Study Human and Computer Interaction",
    "Work on group project"
];

console.log("My To-Do List");
todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`);
});

rl.question("\nAdd a new task: ", (task) => {
    todos.push(task);

    console.log("\nUpdate To-Do List:");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });

    rl.question("\nEnter task number to delete (or press Enter to skip): ", (number) => {
        if (number.trim() !== "") {
            todos.splice(number - 1, 1);
        }

        console.log("\nFinal To-Do List:");

        todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`);
        });

        rl.close();
    });
});