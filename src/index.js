module.exports = function check(str, bracketsConfig) {
  const openBrackets = new Set(bracketsConfig.map(pair => pair[0]));
  const closeBrackets = new Set(bracketsConfig.map(pair => pair[1]));
  const pairBrackets = {};
  bracketsConfig.forEach(pair => {
    pairBrackets[pair[1]] = pair[0];
  });

  const symmetricBrackets = new Set(
    bracketsConfig.filter(pair => pair[0] === pair[1]).map(pair => pair[0])
  );

  let stack = [];

  for (let symbol of str) {
    if (symmetricBrackets.has(symbol)) {
      if (stack.length > 0 && stack[stack.length - 1] === symbol) {
        stack.pop();
      } else {
        stack.push(symbol);
      }
    } else if (openBrackets.has(symbol)) {
      stack.push(symbol);
    } else if (closeBrackets.has(symbol)) {
      if (stack.length === 0 || pairBrackets[symbol] !== stack.pop()) {
        return false;
      }
    } else {
      return false;
    }
  }

  return stack.length === 0;
}
