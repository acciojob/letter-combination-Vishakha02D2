function letterCombinations(input_digit) {
  //Complete the function
	// Mapping of digits to letters
  const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  // Base case: if input is empty, return an empty array
  if (input_digit.length === 0) {
    return [];
  }

  // Initialize the combinations array with an empty string
  let combinations = [''];

  // Iterate through each digit in the input string
  for (let digit of input_digit) {
    // Get the corresponding letters for the current digit
    const letters = mapping[digit];

    // Create a temporary array to store the updated combinations
    let temp = [];

    // Iterate through each existing combination and append each letter
    // from the current digit to generate new combinations
    for (let combination of combinations) {
      for (let letter of letters) {
        temp.push(combination + letter);
      }
    }

    // Update the combinations array with the new combinations
    combinations = temp;
  }

  // Sort the combinations lexicographically
  combinations.sort();

  // Return the resulting combinations array
  return combinations;
}

module.exports = letterCombinations;