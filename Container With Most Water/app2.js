var maxArea = function (height) {
  let right = height.length - 1;
  let left = 0;
  let water = 0;
  let i = 1;
  let max = 0;
  while (right > left) {
    let lineHeight = Math.min(height[left], height[right]);
    let lineLength = right - left;
    water = lineHeight * lineLength;
    if (max < water) {
      max = water;
    }
    console.log(right, 'right');
    if (lineHeight === height[left]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

console.log(maxArea([1, 3, 2, 5, 25, 24, 1, 5]));

// console.log(height[left], 'left');
// console.log(height[right], 'right');
// console.log(i, 'i');
// [1, 8, 6, 2, 5, 4, 8, 3, 7];
// [1, 3, 2, 5, 25, 24, 1, 5];
