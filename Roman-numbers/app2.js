const romanToInt = (letter) => {
  let newArray = [...letter];
  newArray.reverse();

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
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900,
    };

    if (s[s.length - 1] === 'M') {
      s.pop();

      return 1000 + toArray(s);
    }
    if (
      s[s.length - 1] === 'I' &&
      (s[s.length - 2] === 'V' || s[s.length - 2] === 'X')
    ) {
      number = roman[s[s.length - 1] + s[s.length - 2]];
      s.pop();
      s.pop();
      return number + toArray(s);
    }
    if (
      s[s.length - 1] === 'X' &&
      (s[s.length - 2] === 'L' || s[s.length - 2] === 'C')
    ) {
      number = roman[s[s.length - 1] + s[s.length - 2]];
      s.pop();
      s.pop();
      return number + toArray(s);
    }
    if (
      s[s.length - 1] === 'C' &&
      (s[s.length - 2] === 'D' || s[s.length - 2] === 'M')
    ) {
      number = roman[s[s.length - 1] + s[s.length - 2]];
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

// if (
//   (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) ||
//   (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) ||
//   (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M'))
// ) {
//   console.log(s[i] + s[i + 1]);
//   console.log(roman[s[i] + s[i + 1]]);
//   number += roman[s[i] + s[i + 1]] - roman[s[i + 1]];
//   continue;
// }
// number += roman[s[i]];
