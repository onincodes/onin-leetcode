// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  if (strs.length === 1) return strs[0];

  strs = strs.map((str) => str.toLowerCase());

  const firstWord = strs[0];
  const commonPrefix = [];

  for (let a = 0; a < firstWord.length; a++) {
    for (let b = 1; b < strs.length; b++) {
      if (strs[b][a] !== firstWord[a]) {
        return commonPrefix.join("");
      }
    }
    commonPrefix.push(firstWord[a]);
  }

  return commonPrefix.join("");
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
