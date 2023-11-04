const submissions = [    //array
    { //object
        name: "Jane",
        score: 95,
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        passed: true
    },
]

function addSubmission(array, newName, newScore) {     //the "array" is referring to submissions! 
    const newSubmission = {         //specify the object as a new const in order to send it to submissions
        name: newName,
        score: newScore,
        passed: newScore >= 60 ? true: false, //is listed once true
    } 
    array.push(newSubmission)
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
    //The splice method takes two arguments: the index at which to start changing the array and the number of elements to remove. 
}

function deleteSubmissionByName(array, name) {
    const nameToDelete = 
    array.findIndex(submissions => submissions.name === name);
    if (nameToDelete !== -1) {  
        //The findIndex method requires a callback function that returns true. 
        // The !== means that it will return the index of the first element in the array that satisfies what I asked for. If no element is found, it returns -1.
     array.splice(nameToDelete, 1);   //the one refers to how many elements need to be deleted 
    }
}

function editSubmission(array, index, score) {
    if (index >= 0 && index < array.length) {
        array[index].score = score;
        array[index].passed = score >= 60;
    }
}

function findSubmissionByName(array, name) {
    const findName = array.find(submissions => submissions.name === name);
    return findName;
}

function findLowestScore(array) {
    let lowestScore = array[0].score;   //ensure that the arrays exists, so initalize it to the first score
    for (let i = 1; i < array.length; i++) { //i is equal to 1 because we want to compare it with the score of the next index, not the first index again 
        if (array[i].score < lowestScore) {
            lowestScore = array[i].score;
        }
    }
    return lowestScore;
}

function findAverageScore(array) {
    let averageScore = array[0].score; //ensure that the arrays exists, so initalize it to the first score
    let total = 0;
    for (let i = 0; i < array.length; i++) { //I still want to include the score at the zero index, so I set the i at zero like the average score. 
        total += array[i].score; //adds the score of each indexes 
    }
    return averageScore = total / array.length; 
}

function filterPassing(array) {
    const passingScore = array.filter((submissions) => submissions.score >= 60);
    return passingScore; 
}

function filter90AndAbove(array) {
    const passing90Score = array.filter((submissions) => submissions.score >= 90);
    return passing90Score;  
}



addSubmission(submissions, "Ayesha", 66);
deleteSubmissionByIndex(submissions, 0);
deleteSubmissionByName(submissions, "Jill");
editSubmission(submissions, 1, 70);
findSubmissionByName(submissions, "Jack"); 
console.log(submissions);
const findName = findSubmissionByName(submissions, "Jack");
console.log("Found Name:", findName);
const lowestScore = findLowestScore(submissions);
console.log("Lowest Score:", lowestScore);
const averageScore = findAverageScore(submissions);
console.log("Average Score:", averageScore);
const passingScore = filterPassing(submissions);
console.log("Passing Score(s):", passingScore);
const passing90Score = filter90AndAbove(submissions);
console.log("Passing Score(s) of 90 or higher:", passing90Score);


