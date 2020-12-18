//binary search practice
//search naive string
//loop over long string
//loop over short string
//create a counter to keep track of the amount of times there is match

function naiveSearch(long, short){
    let matchCount=0

}

//console.log(naiveSearch("lorie loled", "lol"))


//bubble sort
function bubbleSort(arr){
  for(var i=arr.length; i>0; i--){
    console.log('complete')

      for(var j=0; j< i -1; j++){
          if(arr[j] > arr[j+1]){
              var temp=arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
          }
      }
  }
  return arr
}

console.log(bubbleSort([37,45,29,8]))