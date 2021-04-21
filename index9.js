//1) Convert string to array
//2) Loop through array and push into new array
//3) Convert array  to string

const stringToReverse = "Hi My Name is Christy"
function reverse(str){
    if(!str || str.length < 2 || typeof str !== "string"){
        return null;
    }
    const strToArray = str.split(' ')
    let newArray = []
    for(let i = strToArray.length - 1; i >= 0; i--){
        newArray.push(strToArray[i])
    }
    
    newArray =  newArray.join(" ");
    return newArray 
}

reverse(stringToReverse);

