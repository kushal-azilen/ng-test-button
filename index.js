function isInt(str) {
    if(isNaN(str)){
        console.log(str + " is not a number <br/>");
        return false;
     }else{
         console.log(str + " is a number <br/>");
         return true;
     }
}

module.exports = isInt;