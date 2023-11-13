document.getElementById("make-money-button").addEventListener("click", function makeMoney() {
    // Hide ALL coins
    document.getElementById("penny-container").style.display = "none";
    document.getElementById("nickel-container").style.display = "none";
    document.getElementById("dime-container").style.display = "none";
    document.getElementById("quarter-container").style.display = "none";

    // Get values
    const whichCoinValue = document.getElementById("whichCoin").value;

    if (whichCoinValue === "Penny") {
        let pennyImage = document.getElementById("penny-coin");
        let duplicatePenny = pennyImage.cloneNode(true);
        
    }










//     if (whichCoinValue === "Penny") {
//         document.getElementById("penny-container").style.display = "inline";
//         const pennyImage = document.getElementById("penny-coin");
//         const duplicatePenny = parseInt(document.getElementById('howMany').value);

//         if (duplicatePenny > 0) { 
//             for (let i = 0; i < duplicatePenny; i++) { 
//                 const newPenny = document.createElement('img');
//                 newPenny.src = pennyImage.src;
//                 newPenny.alt = pennyImage.alt;
//                 document.getElementById("penny-container").appendChild(newPenny);
//             }
//         }
//     }

//     if (whichCoinValue === "Nickel") {
//         document.getElementById("nickel-container").style.display = "inline";
//         const nickelImage = document.getElementById("nickel-coin");
//         const duplicateNickel = parseInt(document.getElementById('howMany').value);

//         if (duplicateNickel > 0) { 
//             for (let i = 0; i < duplicateNickel; i++) { 
//                 const newNickel = document.createElement('img');
//                 newNickel.src = nickelImage.src;
//                 newNickel.alt = nickelImage.alt;
//                 document.getElementById("nickel-container").appendChild(newNickel);
//             }
//         }
//     }
// });