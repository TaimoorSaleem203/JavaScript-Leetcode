// Logic 01
// function validParentheses() {
//     let brackets = ['{}', '()', '[]'];
//     let s = '((((((((()))))))))';
//     let replace = true;

//     while (replace) {
//         let startLen = s.length //4

//         for (let inner of brackets) {
//             s = s.replaceAll(inner, "")
//         }
  
//         if (startLen == s.length) {
//             replace = false
//         }
//     }
    
//     console.log(s === "");
// }


// validParentheses()

//Logic 02
function validParentheses() {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    let s = '[]()'

    for(let char of s){
        if(char in map){
            let top = stack.pop()

            if(top!==map[char]){
                return false
            }
        }else{
            stack.push(char)
        }
    }

    return stack.length == 0
}

console.log(validParentheses());
