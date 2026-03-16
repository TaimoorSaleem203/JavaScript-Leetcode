// Logic 01
const removeDuplicates = () => {
    let k = 1
    let nums = [1,1,2,3,4,5,6,6]

    for(let i=0 ; i<nums.length ; i++){
        if(nums[i]!==nums[i+1] && i+1<nums.length){
            nums[k] = nums[i]
            k++
        }
    }

    return k
}

(removeDuplicates());