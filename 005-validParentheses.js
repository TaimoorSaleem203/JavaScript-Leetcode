// Logic 01
function validParentheses() {
    let brackets = ['{}', '()', '[]'];
    let s = '{[)}';
    let replace = true;

    while (replace) {
        let startLen = s.length //4

        for (let inner of brackets) {
            s = s.replace(inner, "")
            console.log("start:", startLen);
            console.log("s.len:", s.length);
        }
        // s.length = 0
        if (startLen == s.length) //0 == 0 {
            replace = false
    }



    console.log(s === "");

}


validParentheses()