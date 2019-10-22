const delay = 50;
const sentence = "hello there from lighthouse labs";
const stdOut = process.stdout;
const strLength = sentence.length;

for (let i = 0; i < strLength; i++) {
  setTimeout(() => {
    stdOut.write(`${sentence[i]}`);
    if (i === strLength - 1) {
      stdOut.write("\n");
    }
  }, delay * i);
}

//Alternative (harder to understand but holds more functionality as we can call typeSentence)
// const printLettersStartingAtIndex = function(i) {
//   setTimeout(() => {
//     stdOut.write(sentence[i]);
//     if (i + 1 < strLength) {
//       printLettersStartingAtIndex(i + 1);
//     }
//     if (i === strLength - 1) {
//       stdOut.write("\n");
//     }
//   }, delay);
// };

// const typeSentence = () => {
//   printLettersStartingAtIndex(0);
// };

// typeSentence();
