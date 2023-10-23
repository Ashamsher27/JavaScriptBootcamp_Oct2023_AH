/**this is a description of the getAreaofCircle function 
 * represents the area of a circle 
 * @constructor
 * @param {number} radius - the radius of a circle. 
 * @param {number} side - the side of a square.
 * @param {number} height - the hieght of a triangle. 
 * @param {number} base - the base lenght of a triangle. 
*/

function getAreaofCircle(radius) {
    return Math.PI * (radius * radius);
  }
  console.log(getAreaofCircle(4));

function getCircumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
}
    console.log(getCircumferenceOfCircle(4));

function getAreaofSquare(side) {
    return side * side;
}
console.log(getAreaofSquare(4));

function getAreaofTriangle(height, base) {
    return (height * base)/2; 
}
console.log(getAreaofTriangle(4, 10));


//using arrow function 

{let getAreaofCircle = (radius) => Math.PI * (radius * radius);
    console.log(getAreaofCircle(4));
}

{let getCircumferenceOfCircle = (radius) => 2 * Math.PI * radius;
    console.log(getCircumferenceOfCircle(4));
}

{let getAreaofSquare = (side) => side * side;
    console.log(getAreaofSquare(4));
}

{let getAreaofTriangle = (height, base) => (height * base)/2; 
    console.log(getAreaofTriangle(4, 10));
}

