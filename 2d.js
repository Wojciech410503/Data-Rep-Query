const ages = [25, 31, 42, 77]; // Array of ages

let a = ages.map(  // Use map to create a new array by processing each element in the original array
    (item) => {    // Arrow function that takes each element (item) as a parameter
        if(item < 70)   // If the item (age) is less than 70
            return item * 2;    // Multiply the item by 2
        else
            return item;    // Otherwise, return the item as is
    }
);

console.log(a); // Log the resulting array to the console
