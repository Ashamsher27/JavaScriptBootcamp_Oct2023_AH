function translate(sentence) {
    const listOfConsonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // const listOfConsonantClusters = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
    const words = sentence.split(" ");
    const pigLatinWords = [];

    for (let word of words) {
        const firstLetter = word.charAt(0).toLowerCase();
        const secondLetter = word.charAt(1).toLowerCase();

        if (listOfConsonants.includes(firstLetter) && listOfConsonants.includes(secondLetter)) {
            const consonantCluster = word.substring(0, 2); //takes the first and second characters of the word if they are found to be consonants)
            const restOfWord = word.substring(2);
            const pigLatin = restOfWord + consonantCluster + "ay";
            pigLatinWords.push(pigLatin);
        } else if (listOfConsonants.includes(firstLetter)) {
            const firstConsonant = firstLetter;
            const restOfWord = word.substring(1);
            const pigLatin = restOfWord + firstConsonant + "ay";
            pigLatinWords.push(pigLatin);
        } else {
            const pigLatin = word + "way";
            pigLatinWords.push(pigLatin);
        }
    }

    return pigLatinWords.join(" ");
    //const result = pigLatinWords.join(" ");
    //console.log(result);
}

module.exports = translate;

