// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Constraints:

// • 2 <= nums.length <= 104
// • -109 <= nums[i] <= 109
// • -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

var twoSum = function (nums, target) {
  let indices = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (indices.has(complement)) {
      return [indices.get(complement), i];
    }

    indices.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([3, 2, 4], 6));
