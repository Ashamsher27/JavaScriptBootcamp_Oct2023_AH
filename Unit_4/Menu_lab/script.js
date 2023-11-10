
const menuLink = document.getElementById('menu-link');
const menuContent = document.querySelector('.dropdown-content');

menuLink.addEventListener('dblclick', function menuClick() {
 // toggles the show of the dropdown menu
    menuContent.classList.toggle('show');
});

//SHOW/HIDE numbers or letters: 
 
 const showNumbers = document.getElementById('numbers-link');
 const pNumbers = document.getElementById('numbers');
 const showLetters = document.getElementById('letters-link');
 const pLetters = document.getElementById('letters');

 showNumbers.addEventListener('click', function numbersClick() {
    // Toggles the show and hide classes for numbers and letters
    pNumbers.classList.toggle('show');
    pLetters.classList.toggle('hide');
});

showLetters.addEventListener('click', function lettersClick() {
    // Toggles the show and hide classes for letters and numbers
    pLetters.classList.toggle('show');
    pNumbers.classList.toggle('hide');
});


