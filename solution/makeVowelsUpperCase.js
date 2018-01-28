const isVowel = char => ['a', 'e', 'i', 'o', 'u', ...['á', 'é', 'í', 'ó', 'ú']].indexOf(char) > -1;

const makeVowelsUpperCase = string => {
  let result = '';
  let longString = string.length;

  for (let i = 0; i < longString; i++) {
    if (isVowel(string[i])) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
};
