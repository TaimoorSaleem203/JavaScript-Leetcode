// Logic 01

const nums = [2,7,11,15] ; const target = 9 ;

// var twoSum = function(nums,target){
//     for(let i=0 ; i<nums.length ; i++){
//         for(let j=i+1 ; j<nums.length ; j++){
//              if(nums[i]+nums[j]==target){
//                 return [i,j]
//              }
//         }
//     }

//     return -1

// }

// console.log(twoSum(nums,target)) // hoisting not allowed

function twoSum(){
    
    const pairIndx = {}
    
    for(let i=0 ; i<nums.length ; i++){
        const num = nums[i]
        let complement = target - num
    
        if(complement in pairIndx){
            return ([pairIndx[complement],i]);
        }
    
        pairIndx[num] = i
    }
}

console.log(twoSum());

