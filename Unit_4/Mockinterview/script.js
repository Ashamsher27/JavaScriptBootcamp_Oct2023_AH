function acceptString (mystring) {
    let newString = ""
    for (i = mystring.length - 1; i >= 0; i--) {
        newString += mystring[i];
    }
    console.log(newString)
}

acceptString("giraffe");