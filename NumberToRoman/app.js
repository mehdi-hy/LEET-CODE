var intToRoman = function (num) {
  let roman = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];
  let string = '';
  let i = 0;
  while (num > 0) {
    if (num - roman[i][1] >= 0) {
      num -= roman[i][1];
      string += roman[i][0];
      continue;
    }

    i++;
  }
  return string;
};
console.log(intToRoman(1994));
