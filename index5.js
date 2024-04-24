//5

function remove(str){
    let result = '';
    for (let i = 0; i <str.length; i++){
        if (str[i] !== '!'){
            result += str[i];
        }
    }
    return result;
}

let string = "Hello! World!"
console.log(remove(string));