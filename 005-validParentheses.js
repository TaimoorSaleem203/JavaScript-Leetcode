// Logic 01
function validParentheses(){
    let brackets = ['{}', '()', '[]']
    let s = '[]'
    let replace = true
    
    while (replace) {
        let startLen = s.length
    
        for (let inner of brackets) {
            s = s.replace(inner, "")
    
            if (startLen == s.length) {
                replace = false
            }
        }
    
    
    }
    
    console.log(s === "");
}

validParentheses()