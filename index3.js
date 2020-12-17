//divide and conquer
const sortedArray=[1,2,3,5,36,666,6667,7776]
const targetValue=666


function findTarget(arr,target){

//set up a pointer at beginning and end
let min=0
let max=arr.length -1


//while the pointer at beginning is less or equal to end pointer
while (min <= max){

 //create middle pointer and set a variable equal to the element at that index   
let middlePointer=Math.floor((min + max)/2)
let currentElement=arr[middlePointer]

//if the array at middle index is less than target set min pointer to middle index + 1
if(currentElement < target){
    min=middlePointer +1

    //set end pointer to middle target minus 1 if value is greater
}else if(currentElement > target){
    max=middlePointer-1
}else{
    return middlePointer
}
}

//return -1 if target value is not inside array
return -1

}

console.log(findTarget(sortedArray, targetValue))