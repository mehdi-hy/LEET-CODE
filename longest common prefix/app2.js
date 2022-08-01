var longestCommonPrefix = function (strs) {
  let prefix = [...strs[strs.length - 1]];
  if (prefix.length === 0) {
    return '';
  }
  let i = 0;
  let j = 0;
  for (i = 0; i < strs.length; i++) {
    if (strs[i].length === 0) {
      return '';
    }
    let j = 0;
    while (j < prefix.length) {
      if (prefix[j] === [...strs[i]][j]) {
        j++;
        continue;
      }
      prefix = prefix.slice(0, j);
    }
  }

  return prefix.join('');
};
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']));
