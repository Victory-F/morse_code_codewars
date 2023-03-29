var decodeMorse = function (morseCode) {
  
  const morseDecoded = morseCode
    .trim() // remove leading and trailing spaces
    .split("   ") // split into array of words
    .map((word) => word.split(" ")) // split words into arrays of letters
    .map((word) => word.map((letter) => MORSE_CODE[letter]).join("")) // decode and join letters
    .join(" "); // join words with a space

  return morseDecoded;
};
