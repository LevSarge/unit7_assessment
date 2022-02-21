function addToZero(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
        let total = sum += numbers[i]
        if (total === 0){
            return true
        } else return false
    }
}
//The runtime for addToZero would be about O(n), since we're running a single for-loop

function hasUniqueChars(str){
    let charCount = {}
    for (let i = 0; str.length; i++){
        if (charCount[str[i]]){
            return false
        }else return true
    }
}
//The runtime for hasUniqueChars would have to be equal O(n) due to the for-loop and the if-else is not calling any other functions within itself

function isPangram(string){
let regex = /(a-z])(?!.*\1)/gi
return (string.match(regex)).length === 26
}
//Runtime for isPangram would be O(n)

function findLongestWord(str){
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
}
//The runtime for findLongestWord would be O(n) 