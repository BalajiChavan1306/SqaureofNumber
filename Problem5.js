function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr); // Call the callback with the current element, index, and the array
    }
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

forEachCustom(numbers, (element, index, array) => {
    console.log(`Element at index ${index}: ${element}`); // Outputs each element with its index
});
