function mergeSort(array) {
    // Base case: If the array has 1 or 0 elements, it's already sorted
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves and return
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare the elements of the left and right arrays and merge them in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements (if one of the arrays was longer)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // [3, 9, 10, 27, 38, 43, 82]