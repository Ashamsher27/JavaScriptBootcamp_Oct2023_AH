const name1="BJ Clark"; //7
const name2="Olaposi Omishope"; //15
const name3="Jonathon Plumb"; //13


if (Object.keys(name1) > Object.keys(name2) && Object.keys(name3)) {
    console.log(`${name1} has the longest name.`)
} else if (Object.keys(name2) > Object.keys(name1) && Object.keys(name3)) {
    console.log(`${name2} has the longest name.`);
} else if (Object.keys(name3) > Object.keys(name1) && Object.keys(name2)) {
    console.log(`${name3} has the longest name.`);
} else (console.log(`${name1} and ${name2} and ${name3} all have the longest name.`)); {
}


//where 1 & 3 are the same but greater than 2 
//where 2 & 3 are the same but greater than 1 



 