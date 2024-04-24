//8

function reverse(arr){
    let reverseArr = [];
    for (let i= arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i]);
    }
    return reverseArr
}

let array = [1, 2, 3, 4, 5]
console.log(reverse(array));