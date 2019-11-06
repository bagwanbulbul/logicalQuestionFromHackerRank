function compareTriplets(a, b) {
    var newArr = [0,0];
    var countA = 0;
    var countB = 0;
    for (var i=0; i<a.length; i++){
        if (a[i]>b[i]){
            countA = countA +1
            newArr[0]=countA
        }
        else if (a[i]<b[i]){
            countB = countB+1
            newArr[1]=countB
        }
    }
    return newArr
}
compareTriplets([17,28,30], [99,16,8])