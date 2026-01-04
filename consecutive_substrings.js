function consecutiveSubstrings(string) {
  // Array to store all consecutive substrings
  const result = [];

  // Outer loop controls the starting index
  for (let i = 0; i < string.length; i++) {
    // Inner loop controls the ending index
    for (let j = i + 1; j <= string.length; j++) {
      // slice extracts a substring from index i up to (but not including) j
      result.push(string.slice(i, j));
    }
  }

  return result;
}

if (require.main === module) {
  // Test cases
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
}

module.exports = consecutiveSubstrings;
