//9

function removezero(str){
    if (str.endsWith('0')){
        return str.slice(0, -1);
    }
}

let str1 = "7890"
console.log(removezero(str1));