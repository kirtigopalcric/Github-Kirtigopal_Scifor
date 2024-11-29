function reverseAndSortArray(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== 'string')) {
        throw new Error("Input must be an array of characters.");
    }

    // Reverse the array
    const reversedArray = arr.reverse();

    console.log(reversedArray);
    

    // Sort the reversed array alphabetically
    const sortedArray = reversedArray.sort();

    console.log(sortedArray);

    // sort the input array 

    const arrSort = arr.sort();

    console.log(arrSort);
    
     
}

// Example usage:
const inputArray = ['d', 'b', 'a', 'c', 's','k','c'];
 reverseAndSortArray(inputArray);

