let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

function countNegatives(list){
   let counter=0
  list.forEach((num)=>{
      console.log(num)
     if(Array.isArray(num)){
         countNegatives(num)
     }
     if(num<0){
         counter++
     }
 
      })
    

 return counter

}

console.log(countNegatives(grid))

// function arrayBuilder(obj) {
//     let result=[]
//     for(let key in obj){
//         console.log(obj[key])
//       while(obj[key] > 0){
//         result.push(key)
//         obj[key]--
//       }
//     }
//     console.log(result)
//   }
  


// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']


// function findWaldo(obj){
//     for(let key in obj){
//       if(key==='Waldo'){
//         return obj[key]
//       }
//     }
//     return "Where's Waldo?"
//   }
//   // Uncomment these to check your work!
//   const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
//   const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
//   console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
//   console.log(findWaldo(supernatural)) 