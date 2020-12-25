

//bubble sort
// function bubbleSort(arr){
//   for(var i=arr.length; i>=0; i--){
//     console.log('complete')

//       for(var j=0; j< i -1; j++){
//           if(arr[j] > arr[j+1]){
//               var temp=arr[j]
//               arr[j] = arr[j+1]
//               arr[j+1] = temp
//           }
//       }
//   }
//   return arr
// }
// console.log(bubbleSort([37, 77, -3, 44,29,8]))

//remove element
//  function removeElement(nums,val){
//      let i =0
//      while(i<nums.length){
//         if(nums[i] === val){
//             nums.splice(i,1)
//         }else{
//             i++
//         }
    
//      }
         
//     return nums.length

//  }

//  console.log(removeElement([0,1,2,2,3,0,4,2], 2))


//remove 0's to the end

// function moveZeros(nums){
//     let zeroCount=[]
//     let i =0
//     while(i<nums.length){
//         if(nums[i]===0){
//             zeroCount.push(nums[i])
//             nums.splice(i,1)
//          }else{
//              i++
//          }
         
//     }
//  let newArray= nums.concat(zeroCount)

//     console.log(newArray)

// }

// console.log(moveZeros([3,4,0,2,0,1,0,12]))


//search insert position

// var searchInsert = function(nums, target) {
    
//     let begin=0
//     let end=nums.length-1
//     let middle=0
 
// while(begin<end){
//   middle=Math.floor((begin+end)/2)
//        if(nums[middle]< target){
//             begin=middle +1
//         }else if(nums[middle]>target){
//             end=middle -1
//         }else{
//             return middle
//         }
//     }
//     return (nums[middle] > target) ? middle : (middle +1)

// };

let people=[
    {
        name : 'dylan',
        age: 14
    },
    {
        name : 'sarah',
        age: 100
    },
    {
        name : 'christy',
        age: 35
    }
]

people.sort((a,b)=> a.name > b.name ? 1: -1)


 console.log(people)
