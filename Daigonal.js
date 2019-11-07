function diagonalDifference(arr) {
    // Write your code here
    var sum =0;
    for (var i=0; i<arr.length; i++){
      for (var j=i; j<arr.length;j++){
        sum = sum+arr[i][j]
        break;
        }
      }
      var add = 0
    for (var k =0; k<arr.length; k++){
      for(var a =arr.length ; a>0; a--){
        add = add+arr[k][a-1]
        k++
        }
        break;
      }
      if(add>sum){
          return (add-sum);
      }
    return sum-add;

}