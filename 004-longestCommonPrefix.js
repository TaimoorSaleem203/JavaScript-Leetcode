
//Logic 01
function commonPrefix(){
    let strs = ["flower","flow","flight"]

    pref = strs[0]
    plen = pref.length

    for(let s of strs.slice(1,)){
        while(!s.startsWith(pref)){
            pref = pref.slice(0,plen)
            plen-=1
        }
    }

    if(plen==0){
        return '""'
    }else{
        return pref
    }
}
    
console.log(commonPrefix());

//Logic 02

function commonPrefix(){
    let strs = ["flow","flower","flight"]
    let res = ""
    
    pref = strs[0]
    plen = pref.length
    
    for(let i=0 ; i<plen ; i++){
        for(let s of strs.slice(1,)){
            if(s[i]!==pref[i] && i<plen){
                return res
            }
        }
        res += pref[i]
    }

    return res

}
console.log(commonPrefix());
