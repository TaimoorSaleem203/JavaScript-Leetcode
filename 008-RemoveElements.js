
function removeElements(){
    let nums = [0,1,2,2,3,0,4,2]
    let k = 0
    let val = 2

    for(let i=0 ; i<nums.length ; i++){
        if(nums[i]!=val){
            nums[k] = nums[i]
            k++
        }
    }

    return k
}

console.log(removeElements())