const romanToInt = (letter) => {
  let newArray = [...letter];

  const toArray = (s) => {
    if (s.length === 0) {
      return 0;
    }
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

    if (
      s[s.length - 2] === 'I' &&
      (s[s.length - 1] === 'V' || s[s.length - 1] === 'X')
    ) {
      number = roman[s[s.length - 2] + s[s.length - 1]];
      s.pop();
      s.pop();
      return number + toArray(s);
    }
    if (
      s[s.length - 2] === 'X' &&
      (s[s.length - 1] === 'L' || s[s.length - 1] === 'C')
    ) {
      number = roman[s[s.length - 2] + s[s.length - 1]];
      s.pop();
      s.pop();
      return number + toArray(s);
    }
    if (
      s[s.length - 2] === 'C' &&
      (s[s.length - 1] === 'D' || s[s.length - 1] === 'M')
    ) {
      number = roman[s[s.length - 2] + s[s.length - 1]];
      s.pop();
      s.pop();
      return number + toArray(s);
    } else {
      number = roman[s[s.length - 1]];
      s.pop();
      return number + toArray(s);
    }
  };
  return toArray(newArray);
};

console.log(romanToInt('MCMXCIV'));
