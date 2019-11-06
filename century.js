function centuryFromYear(year) {
    var divide = year/100;
    if (year%100 !=0){
      divide = divide+1
      return parseInt(divide);
      }
    else{
      return divide
      }
}