function isLeapYear(number){
  if ((number % 4 == 0)&&(number % 100 != 0))
  return true

 if((number % 4 == 0)&&(number % 100 == 0)&&(number % 400 != 0))
 return false

 if((number % 4 == 0)&&(number % 400 == 0))
 return true

 else return false
 }
