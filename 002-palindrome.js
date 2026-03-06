let x = 121

//Logic 01
const palindrome = function(){
    return x.toString() === x.toString().split("").reverse().join("")
}

//Logic 02
const isPalindrome = function(){
    let copy = x 
    let rev = 0

    while(x>0){
        rev = rev * 10 + x % 10
        x = Math.floor(x/10)
    }

    return copy==rev
}

console.log(palindrome())
