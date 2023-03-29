var decodeBits = function (bits) {
  
  const bitsArray = bits
    .replace(/^0+|0+$/g, "") // remove leading and trailing zeros
    .replace(/10/g, "1 0") // add space between 1 and 0
    .replace(/01/g, "0 1") // add space between 0 and 1
    .split(" "); // split into array of bits

  // find a bit sequence with minimum length
  const minBits = Math.min(...bitsArray.map((b) => b.length));

  // map over all bit sequences
  const morseCode = bitsArray
    .map((b) => {
      // find bits' original length
      // divide bits' length by minimum bits
      switch (b.substring(0, b.length / minBits)) {
        case "0":
          return "";
        case "1":
          return ".";
        case "111":
          return "-";
        case "000":
          return " ";
        default:
          return "   ";
      }
    })
    .join(""); // join into Morse code string

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
