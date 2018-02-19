/* 
    Bubble sort, sometimes referred to as sinking sort,
    is a simple sorting algorithm that repeatedly steps 
    through the list to be sorted,
    compares each pair of adjacent items and swaps them 
    if they are in the wrong order. 

    How it works:

    step-1: you compare the first item with the second. 
            If the first item is bigger than the second item. 
            you swap them so that the bigger one 
            stays in the second position.

    step-2: And then compare second with third item. 
            if second item is bigger than the third, 
            we swap them. otherwise, they stayed in their position. 
            Hence, the biggest among first three is in the third position.

    step-3: we keep doing it. until we hit the last element of the array. 
            In that way we bubble up the biggest 
            item of the array to the right most position of the array.

*/

const BubbleSort = (arr) => {
    let lengthOfInputArray = arr.length;
    for (let i = 0; i < lengthOfInputArray - 1; i++) {
        for (let j = 1; j <= i; j++) {
            // swapping logic
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

export default BubbleSort

