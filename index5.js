//frequency counter same frequency

function turnNumToString(num){
    return num.toString()
}

function sameFrequency(nums1, nums2){
     let num1ToString=turnNumToString(nums1)
     let num2ToString= turnNumToString(nums2)
     let freqObject={}
     console.log(num1ToString)

      if(num1ToString.length !== num2ToString.length){
          return false
      }
 
      for(let i=0; i<num1ToString.length; i++){
          freqObject[num1ToString[i]] ?  freqObject[num1ToString[i]] +=1 :  freqObject[num1ToString[i]] = 1
      }

   

      for(let i =0; i<num2ToString.length; i++){
        if(!freqObject[num2ToString[i]]){
            return false
        }else{
            freqObject[num2ToString[i]] -=1
        }

      }
      return true
  }



  console.log(sameFrequency(265,564))