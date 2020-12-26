
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

function uniqueValues(arr){
   let reduce= arr.reduce(function (accumulator, currentValue) {
        if (accumulator.indexOf(currentValue) === -1) {
          accumulator.push(currentValue)
        }
        return accumulator
      }, [])
      console.log(reduce.length)
}
console.log(uniqueValues([-1,-1,2,3,3,5,6,7,8,8]))
