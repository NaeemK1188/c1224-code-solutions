/* exported addSuffixToAll */

function addSuffixToAll(words: string[], suffix: string): string[] {
  const fullWords: string[] = [];
  for (let i = 0; i < words.length; i++) {
    fullWords.push(words[i] + suffix);
  }

  return fullWords;
}

const input3: string[] = addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity');

console.log(input3);
