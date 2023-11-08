// Create and link a JavaScript file. Create a function named “main”. The HTML is already set up to call this function when the “Action!!!” button is clicked.

// Within the main function:
// Add the "big" class to the "grow-me" paragraph. <p id="grow-me">I will grow.</p>
    const bigGrow = document.getElementById("grow-me");
    bigGrow.classList.add("big");

// Remove the "big" class from the "shrink-me" paragraph.<p id="shrink-me" class="big">I will shrink.</p>
    const smallMake = document.getElementById("shrink-me");
    smallMake.classList.remove("big");

// Find all the <li>s and log their text content to the console.
    const list = document.querySelector(`ol`);
    console.log(list.innerHTML);

// Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
    const setLink = document.getElementsByClassName("link");
    if (setLink.length > 0) {
        setLink[0].setAttribute("href", "https://www.example.com");
        }
    
    if (setLink.length > 0) {
        setLink[0].innerText = "somewhere";
        }

// Set the "display" CSS property of the "hide-me" paragraph to "none". <p id="hide-me">I will be hidden.</p>
    const pleaseHideMe = document.getElementById("hide-me");
    pleaseHideMe.style.display = "none";

// Set the "display" CSS property of the "show-me" paragraph to "block". <p id="show-me" style="display: none;">I will be shown.</p>
    const pleaseShowMe = document.getElementById("show-me");
    pleaseShowMe.style.display = "block";

// Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".   
// * <h1>Welcome _______</h1>
// <p>
//     <label for="name">Your name: </label>
//     <input id="name" placeholder="Enter your name" />

//     <button onclick="main()">Action!!!</button>
// </p> *

   const inputName = document.getElementById("name");
   const outputName = document.querySelector("h1");

   function main() {
    outputName.textContent = "Welcome " + inputName.value;
   }

// Test it by clicking the Action!!! button.


