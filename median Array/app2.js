var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let newArray = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      newArray.push(nums1[i]);
      i++;
    } else {
      newArray.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    newArray.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    newArray.push(nums2[j]);
    j++;
  }
  mid = newArray.length;
  if (mid % 2 === 0) {
    return (newArray[mid / 2 - 1] + newArray[mid / 2]) / 2;
  } else {
    return newArray[(mid - 1) / 2];
  }
};
console.log(findMedianSortedArrays([3], [-2, -1]));
