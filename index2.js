prereqs_courses1 = [
    ["Data Structures", "Algorithms"],
    ["Foundations of Computer Science", "Operating Systems"],
    ["Computer Networks", "Computer Architecture"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Computer Architecture", "Data Structures"],
    ["Software Design", "Computer Networks"]
  ]

  prereqs_courses2 = [
    ["Data Structures", "Algorithms"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Foundations of Computer Science", "Logic"]
  ]

  
const prereqs_courses3 = [
    ["Data Structures", "Algorithms"]
  ];

  const prereqs_course4=[
      [
          ["puppy", "dog"],
          ["cat", 'kitten'],
          ["hamster", 'ham']
      ]
  ]
  
  

//   Software Design
//   Computer Networks
//   Computer Architecture
//   Data Structures
//   Algorithms
//   Foundations of Computer Science
//   Operating Systems


// Sample output 1:++
//   "Data Structures"

//6 prerequisites
//6 class 

function findCourse(arr){
    let preReqObj={}
    let courseOb ={}
    let list=[]
    let temp=""
    let iterator=0

   
//   for(let i =0 ; i<arr.length; i++){
//    preReqObj[arr[i][0]] ? preReqObj[arr[i][0]] +=1 : preReqObj[arr[i][0]] =1
//    courseOb[arr[i][1]] ? courseOb[arr[i][1]] +=1 : courseOb[arr[i][1]] =1
// }

    arr.forEach((course)=>{
       let preReq=course[0]
       let singCourse=course[1]
       preReqObj[preReq] ? preReqObj[preReq] += 1 : preReqObj[preReq] = 1
       courseOb[singCourse] ? courseOb[singCourse] += 1 : courseOb[singCourse] =1
     })

    //  console.log(preReqObj)
    //  console.log(courseOb)


    //check to see if any of the prereqs are not listed in the course obj. make that prereq
    //the number one course 
  for (var i in preReqObj){
      if(!courseOb.hasOwnProperty(i)){
        list.push(i)
        temp=i
        
      }
  }

  
//   while(iterator<(arr[0].length * arr.length)){
//    arr.forEach((course)=>{
//        let preReq=course[0]
//        let singleCourse=course[1]
//         if(preReq===temp){
//           list.push(singleCourse)
//           temp=singleCourse
//         }
//    })
//    iterator++
// }



   let length=arr.length
    while(length > 0){
        for(let i in arr){
            if(arr[i][0]===temp){
                list.push(arr[i][1])
                temp=arr[i][1]
            }
    }
    length--
}       

     
 let middleIndex= list.length % 2===0 ? Math.floor(list.length/2)-1 : Math.floor(list.length/2)


 console.log(Object.values(courseOb))
 return  list[middleIndex] 

}


console.log(findCourse(prereqs_courses1))