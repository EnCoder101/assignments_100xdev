/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
let sort_str = (string) =>{
  return string.split("").sort().join();
 }

function isAnagram(str1, str2) {
  if(sort_str(str1.toLowerCase()) == sort_str(str2.toLowerCase())){
    return true;
  }else{
    return false;
  }
}

module.exports = isAnagram;
