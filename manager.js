/*"Welcome to your task manager, Press:
1. to see all your tasks
2. to add a task
3. to delete a task
4. to mark a task as done
5. to Exit the task manager"*/

/*
1 display toutes les options
2 creer fonction qui prend un input de 1 à 5 (+else, retourne une phrase et redisplay tout)
3 creer pour chaque input la fonction correspondante
4 */




const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeTask(ToDo, value) {
    var index = ToDo.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
}


const menu = () => {
    console.log("welcome to your task manager, Press:");
    console.log("1. to see all your tasks");
    console.log("2. to add a task");
    console.log("3. to delete a task");
    console.log("4. to mark a task as done");
    console.log("5. to show the tasks that are done");
    console.log("6. to exit the task manager");
}
menu();

var ToDo = ["finish this task manager", "send it to Diogo"]
var Done = ["finish the first objective of the taskmanager"]


rl.question('What do you want to do?', number => {
    if (number == 1) {
        console.log(ToDo);
        menu();

    } else if (number == 2) {
        rl.question("which task would you like to add?", answer => {
            ToDo.push(answer)
            console.log("your task has been added")
            menu();

        })

    } else if (number == 3) {
        rl.question("which task do you want to delete?", answer => {
            removeTask(answer)
            console.log("your task has been deleted");
            menu()
        })
    } else if (number == 4) {

        // déplacer un élément de ma ToDo dans ma Done ?
        // copier un élément de ma ToDo dans ma Done et puis supprimer ce même élément de ma ToDo

    } else if (number == 5) {
        console.log(Done)
        menu()

    } else if (number == 6) {
        console.log("please press CTRL+C to exit the taskmanager")
    } else {
        console.log("your input has to be between 1 and 6.")
        menu()
    }
});