var longestCommonPrefix = function (strs) {
  let prefix = [...strs[0]];
  for (let i = 1; i < strs.length; i++) {
    for (let j = prefix.length - 1; j >= 0; j--) {
      console.log(strs[i][j], prefix[j]);
      if (prefix[j] === strs[i][j]) {
        continue;
      }
      prefix = prefix.slice(0, j);

      if (prefix.length === 0) {
        return '';
      }
    }
  }
  return prefix.join('');
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
