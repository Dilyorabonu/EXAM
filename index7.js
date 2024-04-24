//7

function removefirstlast(str){
    if (str.length <= 2){
        return ""
    } else {
        return str.substring(1, str.length - 1)
    }
}

let string = "hello";
console.log(removefirstlast(string));