var findMedianSortedArrays = function (nums1, nums2) {
  let newArray;
  if (!nums1) {
    newArray = nums2;
  }
  if (!nums2) {
    newArray = nums1;
  } else {
    newArray = [...nums1, ...nums2].sort(function (a, b) {
      return a - b;
    });
  }

  i = newArray.length;
  console.log(newArray);
  if (i % 2 === 0) {
    return (newArray[i / 2] + newArray[i / 2 - 1]) / 2;
  }
  return newArray[(i - 1) / 2];
};
console.log(findMedianSortedArrays([3], [-2, -1]));
