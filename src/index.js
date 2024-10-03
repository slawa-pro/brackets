module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '{']; 
  const pairBrackets = {
    [')']: '(',
    ['}']: '{',
  };

  function isBracketsOk(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      
      if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];

        if (pairBrackets[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  return isBracketsOk(str);
}
