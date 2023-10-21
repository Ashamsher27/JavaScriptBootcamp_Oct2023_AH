
//count up 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//count down 10 to 1 
for (let i = 10; i >= 1; i--) {
   console.log(i);
}

//count up 1 to 10
{let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}}

//count down 10 to 1 
{let i = 11;
while (i > 1) {
  i--;
  console.log(i);
}}

//count up 1 to 10
{
let i = 0;
do {
    i++;
    console.log(i);
  }
  while (i < 10);
}

//count down 10 to 1
{
let i = 11;
do {
    i--;
    console.log(i);
  }
  while (i > 1);
}


{const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const element of numbers) {
    console.log(element);
}}

{const extendedChallenge = ["planet", "headlamp"];
    for (let element of extendedChallenge) {
        while (element.length < 10) {
            element = " " + element;
        }
            console.log(element);
    }
}