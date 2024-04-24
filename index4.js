//4

function toqyokijuft(arr){
    let toqyigindi = arr.filter(num => num %2 !==0).reduce((a,b) => a + b, 0);
    let juftyigindi =  arr.filter(num => num %2 ===0).reduce((a,b) => a + b, 0);
    return [toqyigindi, juftyigindi]
}

let raqam = [10,30]
console.log(toqyokijuft(raqam));
