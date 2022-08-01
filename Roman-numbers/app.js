var romanToInt = function (s) {
  s = [...letter];
  s.reverse();
  console.log(s);
  let roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
  };
  let number = 0;
  for (let i = s.length - 1; i >= 0 && s.length > 0; i--) {
    if (
      (s[i] === 'I' && (s[i - 1] === 'V' || s[i - 1] === 'X')) ||
      (s[i] === 'X' && (s[i - 1] === 'L' || s[i - 1] === 'C')) ||
      (s[i] === 'C' && (s[i - 1] === 'D' || s[i - 1] === 'M'))
    ) {
      number += roman[s[i] + s[i - 1]];

      s.pop();
      i--;
      s.pop();

      continue;
    }

    number += roman[s[i]];

    s.pop();
  }
  return number;
};
console.log(romanToInt('MCMXCIV'));
