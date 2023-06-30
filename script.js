function letterCombinations(digits) {
	const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '0': '0',
    '1': '1',
  };

  const combinations = [];

  function backtrack(index, currentCombination) {
    if (index === digits.length) {
      combinations.push(currentCombination);
      return;
    }

    const digit = digits[index];
    const letters = digitToLetters[digit];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(index + 1, currentCombination + letter);
    }
  }

  if (digits.length > 0) {
    backtrack(0, '');
  }

  return combinations;
  //Complete the function
}

module.exports = letterCombinations;
