const nameOne="1"; 
const nameTwo="124"; 
const nameThree="123";

{   
    let biggestname = Math.max(nameOne.length, nameTwo.length, nameThree.length);
    console.log(biggestname);
    if ((biggestname == nameOne.length) && (biggestname == nameTwo.length) && (biggestname == nameThree.length)) {
            console.log(`All three names: ${nameOne}, ${nameTwo}, and ${nameThree}`);
        } else if ((biggestname == nameOne.length) && (biggestname == nameTwo.length)) {
            console.log(`${nameOne} and ${nameTwo} have the longest names.`);
        } else if ((biggestname == nameOne.length) && (biggestname == nameThree.length)) {
            console.log(`${nameOne} and ${nameThree} have the longest names.`);
        } else if ((biggestname == nameThree.length) && (biggestname == nameTwo.length)) {
            console.log(`${nameThree} and ${nameTwo} have the longest names.`);
        } else if (biggestname == nameOne.length) {
            console.log(`${nameOne} is the longest name.`); 
        } else if (biggestname == nameTwo.length) {
            console.log(`${nameTwo} is the longest name.`);
        } else if (biggestname == nameThree.length) {
            console.log(`${nameThree} is the longest name.`);   
        }
}