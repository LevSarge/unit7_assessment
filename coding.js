function addToZero(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
        let total = sum += numbers[i]
        if (total === 0){
            return true
        } else return false
    }
}

function hasUniqueChars(str){
    let charCount = {}
    for (let i = 0; str.length; i++){
        if (charCount[str[i]]){
            return false
        }else return true
    }
}

function isPangram(string){
let regex = /(a-z])(?!.*)
}

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