let s = prompt("Enter s: ").toUpperCase()

let roman={
    "I":(1),
    "V":(5),
    "X":(10),
    "L":(50),
    "C":(100),
    "D":(500),
    "M":(1000),
}

let res = 0

// Logic 01

for(let i=0 ; i<s.length ; i++){
    if(roman[s[i]]<roman[s[i+1]] && i+1<s.length){
        res -= roman[s[i]]
    }else{
        res += roman[s[i]]
    }
}

// Logic 02

let first = "I"
for(let numeral of s.split("").reverse().join("")){
    if(roman[numeral] < roman[first]){
        res -= roman[numeral]
    }else{
        res += roman[numeral]
    }

    numeral = first
}

console.log(res);
