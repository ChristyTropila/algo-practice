
// function areThereDuplicates(...args){
//     let sorted= args.sort((a,b)=> a-b)
//    let firstPointer=0
//     for(let i=firstPointer+1; i<args.length; i++){
//         console.log(firstPointer)
//      if(args[firstPointer]===args[i]){
//         return [args[firstPointer], args[i]]
//         }
//         firstPointer++
//     }
//      return false
// }

// console.log(areThereDuplicates(1,3,4,3))



//multiple pointers practice

// function sumZero(arr){
//   let sortedArray=arr.sort((a,b)=> a-b)
//   let firstPointer=0
//   let lastPointer=sortedArray.length-1

//   while(firstPointer<lastPointer){
//       let sum=sortedArray[firstPointer] + sortedArray[lastPointer]
//       if(sum===0){
//           return [sortedArray[firstPointer], sortedArray[lastPointer]]
//       }else if(sum > 0){
//           lastPointer--
//       }else{
//           firstPointer++
//       }
//   }
// }

// console.log(sumZero([0,2,11,3,5,-3,-1]))


//multiple pointers count unique values

// function uniqueValues(arr){
//    let reduce= arr.reduce(function (accumulator, currentValue) {
//         if (accumulator.indexOf(currentValue) === -1) {
//           accumulator.push(currentValue)
//         }
//         return accumulator
//       }, [])
//       console.log(reduce.length)
// }
// console.log(uniqueValues([-1,-1,2,3,3,5,6,7,8,8]))





//sliding window
//max sub array sum

// function maxSubarraySum(arr, num){
//     let maxSum=0
//     let tempSum=0
//     if(arr.length < num) return null
//     for(let i =0; i<num; i++){
//         maxSum+=arr[i]
//     }
//     tempSum=maxSum;
//     for(let i=num; i< arr.length; i++){
//     console.log(tempSum=tempSum-arr[i-num] + arr[i])
//       maxSum=Math.max(maxSum, tempSum)
//     }
//     return maxSum

// }

// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],4))




//divide and conquer find index of given number

// function search(arr, val){
//     let sorted =arr.sort((a,b)=> a-b)
//     console.log(sorted)
//     let left=0
//     let right=sorted.length -1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2)
//         let currentValue=sorted[middle]
//         if(currentValue<val){
//             left=middle+1
//         }else if(currentValue > val){
//             right=middle-1
//         }else{
//             return middle
//         }
//     }
//     return -1


// }

// console.log(search([3,2,1,1,3,5],2))



// //selection sort
// function selectionSort(arr){
// for(let i =0; i< arr.length; i++){
//     let lowest=i
//     for(let j=i+1; j< arr.length; j++){
//         if(arr[j] < arr[lowest]){
//             lowest=j
//         }
//     }
//         let temp = arr[i]
//         arr[i] = arr[lowest]
//         arr[lowest] = temp
// }
//     return arr
// }

// console.log(selectionSort([0, 1, 34, 22, 10, 19, 17]))





//merge sort
//part 1 create the merge helper function

function merge(arr1, arr2){
 let mergedArray=[]
 let left=0
 let right=0


 //compare the two values at the start of both arrays
 //if the value on in first array is smaller, push that number
 //increase the pointer on the left
 //do same for other side if that value is smaller
 while(left<arr1.length && right<arr2.length){
     if(arr2[right] > arr1[left]){
         mergedArray.push(arr1[left])
         left++
     }else{
         mergedArray.push(arr2[right])
         right++
     }
 }


 //push any remaining values into the array 
 while(left < arr1.length){
     mergedArray.push(arr1[left])
     left++
 }
 while(right < arr2.length){
    mergedArray.push(arr2[right])
    right++
}

 return mergedArray
}



//break up array into halves until you have arrays that are
//less that or equal to 1
//once you have smaller sorted arrays, merge using the merge
//helper funtion

function mergeSort(arr){
    //base case
    if(arr.length <=1) return arr
    let middle=Math.floor(arr.length/2)

    //split array into 2 pieces
    let left=mergeSort(arr.slice(0,middle))
    let right=mergeSort(arr.slice(middle))
    return merge(left, right)
}

console.log(mergeSort([10,84,76,73]))