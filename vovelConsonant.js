function vowelsAndConsonants(s) {
    var v = ["a","e","i","o","u"];
        for (var j=0; j<s.length;j++){
            if (v.includes(s[j])){
                console.log(s[j])
            }
        }
        for (var k=0; k<s.length; k++){
            if (!v.includes(s[k])){
                console.log(s[k])
            }
        }
    
}
vowelsAndConsonants("javascriptloops")