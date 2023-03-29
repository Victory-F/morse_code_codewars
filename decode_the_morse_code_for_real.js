var decodeBitsAdvanced = function (bits) {
  const bitsArray = bits
    .replace(/^0+|0+$/g, "") // remove leading and trailing zeros
    .replace(/10/g, "1 0") // add space between 1 and 0
    .replace(/01/g, "0 1") // add space between 0 and 1
    .split(" "); // split into array of bits

  //find a bit sequence of ones with maximum length
  const maxOnesBits = Math.max(
    ...bitsArray.filter((b) => b.includes("1")).map((b) => b.length)
  );

  // find a bit sequence with minimum length
  const minBits = Math.min(...bitsArray.map((b) => b.length));

  /* if a bit sequence of ones with maximum length equals a bit sequence with minimum length
     that means that there are no three time unit long bit sequences
     multiply by 2 because we are going divide by 2 later, so we get the original sequence length
  */
  const maxOnes = maxOnesBits === minBits ? maxOnesBits * 2 : maxOnesBits;

  // map over all bit sequences
  const morseCode = bitsArray
    .map((b) => {
      // bits grater than maxOnes are 7 time units long
      // add 2 to take into account variations
      if (b.length > maxOnes + 2) {
        return "   ";
        // bits grater than maxOnes/2 are 3 time units long
      } else if (b.length > maxOnes / 2) {
        return b.includes("1") ? "-" : " ";
      } else {
        return b.includes("1") ? "." : "";
      }
    })
    .join(""); // join bits array into string of morse code

  return morseCode;
};

var decodeMorse = function (morseCode) {
  const morseDecoded = morseCode
    .trim() // remove leading and trailing spaces
    .split("   ") // split into array of words
    .map((word) => word.split(" ")) // split words into arrays of letters
    .map((word) => word.map((letter) => MORSE_CODE[letter]).join("")) // decode and join letters
    .join(" "); // join words with a space

  return morseDecoded;
};
