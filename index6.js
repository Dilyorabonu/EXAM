//6

function yigindi(arr1, arr2){
    let totalSum = 0;
    arr1.forEach(son => totalSum += son);
    arr2.forEach(son => totalSum += son);
    return totalSum;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6]

console.log(yigindi(array1, array2));