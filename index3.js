//3

function array(a) {
    if (a <= 0){
    return [];
    } else {
        let arr = array(a -1);
        arr.push(a);
        return arr
    }
}

let a = 5;
console.log(array(a));