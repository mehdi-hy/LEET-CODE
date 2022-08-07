var maxArea = function (height) {
  let right = height.length - 1;
  let left = 0;
  let water = 0;
  let max = 0;
  while (right > left) {
    let lineHeight = Math.min(height[left], height[right]);
    let lineLength = right - left;
    water = lineHeight * lineLength;
    console.log(height[left]);
    console.log(height[left]);
    if (max < water) {
      max = water;
    }
    if (height[right - 1] > lineHeight && height[right] === lineHeight) {
      right--;
      continue;
    }
    if (height[left + 1] > lineHeight && height[left] === lineHeight) {
      left++;
      continue;
    }
    return max;
  }
  return max;
};
console.log(maxArea([1, 3, 2, 5, 25, 24, 1, 5]));
