/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newstr = str.toLowerCase()
  let n = newstr.length
  for(let i = 0 ; i < n ; i++){
    if(newstr[i] != newstr[n - i - 1]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
