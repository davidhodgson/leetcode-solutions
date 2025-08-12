/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [];
    let currentWords = [];
    let currentWordsLength = 0;

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        if (currentWordsLength + currentWord.length + currentWords.length > maxWidth) {
            let numGaps = currentWords.length - 1; // 2
            let totalSpaces = maxWidth - currentWordsLength; // 16 - 8 = 8
            let spacesPerGap = Math.floor(totalSpaces / numGaps); // 8 / 2 = 4
            let remainder = totalSpaces % numGaps; // 8 % 2 = 0
            let currentLine = "";

            if (numGaps === 0) {
                currentLine += currentWords[0] + " ".repeat(totalSpaces);
            } else {
                for (let j = 0; j < currentWords.length; j++) {
                currentLine += currentWords[j];

                if (j < numGaps) {
                    currentLine += " ".repeat(spacesPerGap);

                    if (j < remainder) {
                        currentLine += " ";
                    }
                }
                }
            }

            result.push(currentLine);
            currentWords = [];
            currentWordsLength = 0;
        }

        currentWords.push(currentWord);
        currentWordsLength += currentWord.length;
    }
    
    let lastLine = currentWords.join(" ");
    lastLine += " ".repeat(maxWidth - lastLine.length);
    result.push(lastLine);

    /*
    for(let line of result) {
        console.log(line);
    }*/
    return result;
    // this // 4 
    // is // 2 6
    // an // 2 8 ['this', 'is', 'an] => "this is an"
    // example // 7 15 ['this', 'is', 'an']

    
    
};

var words = ["This", "is", "an", "example", "of", "text", "justification."];
var maxWidth = 16;

console.log(fullJustify(words, maxWidth));

console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20))