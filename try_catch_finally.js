function reverseString(s) {
    try{
        var sp = s.split("");
        var re = sp.reverse();
        var jo = re.join("");
        console.log(jo)
    }
    catch(err) {
        console.log("s.split is not a function")
        console.log(s)
    } 
    finally{
        return s;
    }

}
reverseString("1234")
