// TO-DO APP

//Prompt User "What would you like to-do? (new, list, delete, quit)"
//While loop not equal to quit, keep loopoing
//Array for to-do items
//Add options based on possibities:
    //new - Add a To-To - if input = new
    //list - List all to-Dos - iterate over all todos and print out
    //delete - Remove a specific to-do - splice with index
    //quit - Quit app

let toDoEntry = prompt('To-Do List Options: new, list, delete, quit');

const toDoItems = [];

while (toDoEntry !== 'quit') {

    if (toDoEntry === 'new') {
        toDoEntry = prompt('Add New Item');
        toDoEntry = toDoItems.push(toDoEntry);
        for (let i = 0; i < toDoItems.length; i++) {
            console.log(i, toDoItems[i]);
        }

    } else if (toDoEntry === 'list') {
        for (let i = 0; i < toDoItems.length; i++) {
            console.log(i, toDoItems[i]);
        }
        toDoEntry = prompt('To-Do List Options: new, list, delete, quit');

    } else if (toDoEntry === 'delete') {
        for (let i = 0; i < toDoItems.length; i++) {
            console.log(i, toDoItems[i]);
        }
        toDoEntry = prompt('Select an item to delete');
        let DeletedItem = toDoItems.splice(toDoEntry, 1);
        for (let i = 0; i < toDoItems.length; i++) {
            console.log(i, toDoItems[i]);
        }
        toDoEntry = prompt('To-Do List Options: new, list, delete, quit');

    } else if (toDoEntry === 'quit') {
        console.log('Quit app');
        break;

    } else {
        toDoEntry = prompt('Enter a valid option: new, list, delete, quit');
    }
} 

console.log('You have quit the app');