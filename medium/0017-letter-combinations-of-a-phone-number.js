const letterCombinations = (digits) => {
    if (digits == null || digits.length === 0) return [];
  
    const map = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz',
    };
  
    const result = [];
    const backtrack = (i, currentString) => {
      if (i === digits.length) {
        result.push(currentString);
        return;
      }
  
      for (const c of map[digits[i]]) {
        backtrack(i + 1, currentString + c);
      }
    };
  
    backtrack(0, '');
    return result;
  };

  console.log(letterCombinations("2345"));