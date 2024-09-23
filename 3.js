// a
let myTasks = []; // Declare an empty array to store tasks

// b
let addTasks = (task) => {
    // Arrow function to add a task to the myTasks array
    myTasks.push(task); // Add the provided task to the array
    console.log(task + " has been added to my Tasks"); // Output confirmation that the task has been added
    return myTasks.length; // Return the updated total number of tasks
}

// c
let listAllTasks = () => {
    // Arrow function to list all tasks in the myTasks array
    myTasks.forEach((item) => {
        // Iterate through each task in the array
        console.log(item); // Output each task
    });
}

// d
let deleteTask = (task) => {
    // Arrow function to delete a task from the myTasks array
    let index = myTasks.indexOf(task); // Find the index of the task
    if (index > -1) {
        // Check if the task exists in the array
        myTasks.splice(index, 1); // Remove the task if found
        console.log(task + " has been deleted"); // Output confirmation of deletion
    } else {
        console.log(task + " not found in my Tasks"); // Output message if task not found
    }
    return myTasks.length; // Return the updated number of tasks
}

// Test the functions
addTasks("Work"); // Add "Work" to the tasks
addTasks("Eat"); // Add "Eat" to the tasks
addTasks("Sleep"); // Add "Sleep" to the tasks
listAllTasks(); // List all tasks
deleteTask("Work"); // Delete the task "Work"
deleteTask("Run"); // Attempt to delete "Run" (which doesn't exist in the list)
