// 12. Integer to Roman
// Seven different symbols represent Roman numerals with the following values:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

// Example 1:

// Input: num = 3749

// Output: "MMMDCCXLIX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

// Constraints: 1 <= num <= 3999;

var intToRoman = function (num) {
  // 1 = "I",
  // 5 = "V",
  // 10 = "X",
  // 50 = "L",
  // 100 = "C",
  // 500 = "D",
  // 1000 = "M",

  const thousands = Math.floor(num / 1000);
  const hundreds = Math.floor((num % 1000) / 100);
  const tens = Math.floor((num % 100) / 10);
  const ones = num % 10;

  const convertedInt = [];

  if (thousands === 1) {
    convertedInt.push("M");
  } else if (thousands === 2) {
    convertedInt.push("M" + "M");
  } else if (thousands === 3) {
    convertedInt.push("M" + "M" + "M");
  }

  if (hundreds === 1) {
    convertedInt.push("C");
  } else if (hundreds === 2) {
    convertedInt.push("C" + "C");
  } else if (hundreds === 3) {
    convertedInt.push("C" + "C" + "C");
  } else if (hundreds === 4) {
    convertedInt.push("CD");
  } else if (hundreds === 5) {
    convertedInt.push("D");
  } else if (hundreds === 6) {
    convertedInt.push("DC");
  } else if (hundreds === 7) {
    convertedInt.push("DCC");
  } else if (hundreds === 8) {
    convertedInt.push("DCCC");
  } else if (hundreds === 9) {
    convertedInt.push("CM");
  }

  if (tens === 1) {
    convertedInt.push("X");
  } else if (tens === 2) {
    convertedInt.push("X" + "X");
  } else if (tens === 3) {
    convertedInt.push("X" + "X" + "X");
  } else if (tens === 4) {
    convertedInt.push("XL");
  } else if (tens === 5) {
    convertedInt.push("L");
  } else if (tens === 6) {
    convertedInt.push("LX");
  } else if (tens === 7) {
    convertedInt.push("LXX");
  } else if (tens === 8) {
    convertedInt.push("LXXX");
  } else if (tens === 9) {
    convertedInt.push("XC");
  }

  if (ones === 1) {
    convertedInt.push("I");
  } else if (ones === 2) {
    convertedInt.push("I" + "I");
  } else if (ones === 3) {
    convertedInt.push("I" + "I" + "I");
  } else if (ones === 4) {
    convertedInt.push("IV");
  } else if (ones === 5) {
    convertedInt.push("V");
  } else if (ones === 6) {
    convertedInt.push("VI");
  } else if (ones === 7) {
    convertedInt.push("VII");
  } else if (ones === 8) {
    convertedInt.push("VIII");
  } else if (ones === 9) {
    convertedInt.push("IX");
  }

  const romanValue = convertedInt.join("");

  console.log(romanValue);
  return romanValue;
};

intToRoman(3749);
