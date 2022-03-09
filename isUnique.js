const isUnique = function(astr) {
    if(astr === null){
        return null;
    }
    if(astr.length <=1){
        return true;
    }
    for(let i=0;i<astr.length-1;i++){
        // console.log(astr[i])
        for(let j = i+1;j<astr.length;j++){
            // console.log(astr[i],astr[j])
            if(astr[i] === astr[j])
                return false;
        }
    }
    return true;
};
console.log(isUnique('maxxz'))