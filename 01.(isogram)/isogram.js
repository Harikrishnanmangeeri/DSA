
function isIsogram(str){
    const text = str.toUpperCase()
    return new Set(text).size === str.length
}

 console.log(isIsogram('aple'));
