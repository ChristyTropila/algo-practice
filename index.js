//return a string in reverse order

function reverseString(str){
//method 1
// const strArr=str.split("")
// strArr.reverse();
// return strArr.join('')

// method 2
// return str.split('').reverse().join('')



//method 3 decreasing array
// let revString=""
// for(let i=str.length-1; i>=0; i--){
//    revString=revString + str[i]
// }
// return revString;


//method 4 increasing array
// let revString=''
// for(let i=0; i<=str.length-1; i++){
//     revString=str[i] + revString;
// }
// return revString


//method 5 using for of
// let revString=''
// for(let char of str){
//     revString=char+revString
// }
// return revString


//method 6 using forEach higher order function. remember to turn string into array
// let revString=""
// str.split('').forEach(char=> revString=char+revString)
// return revString


//method 7 reduce higher order function
// return str.split('').reduce((revString, char)=> char + revString, ' ')


}


//validate a palindrome 
function isPalindrome(str){
    const revString=str.split('').reverse().join('');
    return revString === str;

}

//reverse a string
function reverseInt(int){
    const revString=int.toString().split('').reverse().join('')
    return parseInt(revString) * Math.sign(int)

}


function capitalizeLetters(str){
   let lowerStr=str.toLowerCase()
     
}

function addValues(arr){
   return arr.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);

}

function fizzBuzz(){
 for (let i=1; i<=100; i++){
     if(i % 3===0 && i % 5===0){
         console.log("fizzbuzz")
     } else if(i%3===0){
         console.log('fizz')
     }else if(i%5===0){
         console.log('buzz')
     }
       else {
         console.log(i)
     }
 }
}


//longest word of a string, if more than one, put into array
function longestWord(sentence){
    let splitStr=sentence.split(' ')
    let max =0
    let string=""
    for(let i=0; i<splitStr.length; i++){
        if(splitStr[i].length > max){
             max=splitStr[i].length
             string=splitStr[i]
        }
    }
    console.log(max)
    console.log(string)
    return string

}

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let result ={}
    for(let i=0; i< str1.length; i++){
     result[str1[i]] ? result[str1[i]] += 1 : result[str1[i]] =1
    }

    for(let i=0; i<str2.length; i++){
        if(!result[str2[i]]){
            return false
        } else{
            result[str2[i]] -=1
        }
    }
    return true
    
}

//ADD ALL NUMBERS RETURN A SUM Of ALL PARAMETERS ENTERED REGARDLESS OF THE AMOUNT OFN UMBERS
function addAll(...numbers){
    let total=0;
    numbers.forEach(num => {
        total += num
    })
    return total;
}

//sum all prime numbers
function sumAllPrimes(num){
 let total=0;

 function checkForPrime(i){
     for(let j=2; j<i; j++){
         if(i % j ===0){
             return false
         }
     }
     return true
 }
 for(let i=2; i<=num; i++){
     if(checkForPrime(i)){
         total += i
     }
 }
 return total

}


//remove fromo array whatevre is in the following arguments. return
//the leftovers in the array ex. seekAndDestroy([2,3,4,6,6,'hello'], 2, 6) => [3,4,'hello']

let toyArray=['dog', ' cat', 'mouse', 'lizard']

function filterArray(arr){
     return arr.filter((item)=>{
       console.log(item.length)
       return item.length >2
    })

}

//flightLength=duration of the flight in minutes
// //movies- arry of movie times in minutes
// //return true if 2 of the movie times sums up to the length of the flight
// //ex flightLength=160 movies[80,40,110,]


// //create a point at index 0
// //create a pointer at index 1
// //loop through the array to check to see if the sum of the 2 pointers is equal to the flightLength
// //if true, return true

// function calculateMovieArraySum(arr, flightLength){


//  for(let i=0; i<arr.length; i++){e
//      let target=flightLength-arr[i]
//      for(let j=i + 1; j<arr.length; j++){
//          if(arr[j] ===target){
//              return true
//          }
//      }
//  }
//   return false
// }







//am I allowed to mutate the original array or should I return a NEW array?
//You should consider if the original array is empty, if it is empty then I want a message that says "Provide elements"


//return the elements that appear an ODD number of times
//return an array of all the elements that appear an ODD number of times

//1st make a copy of the array using the slice()
//check to see if array is empty, if empty, return "Provide Elements"
//2nd create object to store elements as key and the count as a value 
//check to see if the value is odd by using a modulo
 //if the count is odd, push key into a new array
 //return the new array


// function checkForOddCount(arr){
    
// //1st make a copy of the array using the slice()
//   let copyOfArr=arr.slice()

//   //check to see if array is empty, if empty, return "Provide Elements"
//   if(copyOfArr.length===0){
//       return console.log('provide elements')
//   }

//   let arrObj={}

//   //2nd create object to store elements as key and the count as a value 

//  for(let i=0; i<copyOfArr.length; i++){
//     arrObj[copyOfArr[i]] ? arrObj[copyOfArr[i]] += 1 : arrObj[copyOfArr[i]] =1 
//  }

// return isItOdd(arrObj)

// }
// function isItOdd(obj){
//     let oddArray=[]
//     for(var key in obj){
//         //another array to store
//      if(obj[key] % 2 !== 0){
//            oddArray.push(key)
//      }
//    }
//    return oddArray
// }


// const output = [1, 5, 'A']

// const input = [1,2,2,2,2,3,3,'A','B','B', 5]

// console.log(checkForOddCount(input))



//Set will remove duplicates. unordered pool of unqiue elements
//use set if you want to avoid saving duplicates
const myArray=[1,2,3,4,5,5,6,6];
const mySet= new Set(myArray)

   mySet.forEach((val)=>{
      // console.log(val)
   })
 //transform set into unqiue array
// const uniqueArray=[...mySet]
// console.log(uniqueArray)

//add value to set
mySet.add(8)
mySet.add('9')
mySet.add({channelName: 'javascript'})
mySet.add([99])


//delete an object
mySet.delete(8)

// //clear clears all the elements
// mySet.clear()


//check for a value
// console.log(mySet.has(5))

//size of set
// console.log(mySet.size)



//Map key value pairs

// const myMap=new Map([['name', 'john'], ['surname', 'doe']])

// //add to map
// myMap.set('hello', "chrity")

// //delete
// myMap.delete('name')
// console.log(myMap.size)




//  function averageOfTwo(arr, target){
//      let start=0;
//      let nextInd=arr.length-1
//      while(start<nextInd){
//      let avg=(arr[start] + arr[nextInd])/2;
//        if(avg===target){
//            return true
//        }else if( avg < target){
//            start++
//        }else{
//            nextInd --
//        }
//      }
//      return false
//  }

//  console.log(averageOfTwo([1,2,3,5,6,7,8], 4))

// function maxSubarraySum(arr, num){
//     if(arr.length < num){
//         return null;
//     }
//     let max=0;
//     for(let i=0; i<arr.length; i++){
//        max+=arr[i]
//     }
//     console.log(max)
// }
 
   

// maxSubarraySum([1,2,3,4,5,6],3)


function findMiddleCourse(arr){

    let courseObj={};
  

    let secondIndex=0
    for(let i=0; i<arr.length; i++){
      courseObj[arr[i][0]] = arr[i][1]
    }
    let secondCourses = Object.values(courseObj)
    let firstCourses = Object.keys(courseObj)
     for(let courseKey of firstCourses){
       if(!secondCourses.includes(courseKey)){
         console.log(courseKey)
       }
  }
  }

  const prereqs_courses2 = [
    ["Data Structures", "Algorithms"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Foundations of Computer Science", "Logic"]
  ];

  console.log(findMiddleCourse(prereqs_courses2))
  