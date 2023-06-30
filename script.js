// function letterCombinations(input_digit) {
  //Complete the function
const digitToLetters = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};

function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const combinations = [''];
  
  for (let digit of digits) {
    const letters = digitToLetters[digit];
    const newCombinations = [];
    
    for (let combination of combinations) {
      for (let letter of letters) {
        newCombinations.push(combination + letter);
      }
    }
    
    combinations.length = 0; // Clear the previous combinations
    combinations.push(...newCombinations);
  }
  
  return combinations;
}