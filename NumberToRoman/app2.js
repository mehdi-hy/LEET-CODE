var intToRoman = function (num) {
  let roman1 = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman2 = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  let string = '';
  let i = 0;
  for (let j = 0; i < roman1.length; i++) {
    while (num >= roman1[i]) {
      num -= roman1[i];
      string += roman2[i];
    }
  }

  i++;

  return string;
};
console.log(intToRoman(1994));
