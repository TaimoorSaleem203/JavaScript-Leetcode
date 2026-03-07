
//Logic 01
let strs = ["flower","flow","flight"]
let target = "fl"

let pref = strs[0]
let plen = pref.length

for(let s of strs.slice(1,)){
    while(pref !=  s.slice(0,plen)){
        pref = pref.slice(0,plen-1)
        plen-=1
    }
}

if(plen==0){
    console.log("");
}else{
    console.log(pref);
}