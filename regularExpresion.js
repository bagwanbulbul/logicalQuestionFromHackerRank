function regexVar(a) {
  var vovels = ["a","e","i","o","u"]
  var j = a.length-1
    for (var i=0; i<vovels.length; i++){
      if (a[0] == vovels[i] && a[j] == vovels[i]){
        return true;
        }
      
      
      }
    return false;
}
regexVar("aca")



function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    let re = /^([aeiou]).*\1$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}
