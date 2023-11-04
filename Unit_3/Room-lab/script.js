class Room {
    constructor (name, length, width, capacity = 15) {
        this.name = name; //string 
        this.length = length; //number
        this.width = width; //number
        this.capacity = capacity;
        this.available = true;
        
    } 
    getArea() {
        return this.length * this.width; 
    }
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
    getAvailability() {
        return this.available;
    }

    setAvailability(value) {
        return this.available = value;
    }
}

const room1 = new Room("Sun", 30, 20); 
console.log(room1);
console.log(room1.getArea()); //600
console.log(room1.getPerimeter()); //100
console.log(room1.getAvailability()); //true 
console.log(room1.capacity); //15

const room2 = new Room("Green", 15, 20, 18);
room2.setAvailability(false);
console.log(room2);
console.log(room2.getArea()); //300
console.log(room2.getPerimeter()); //70
console.log(room2.getAvailability()); //false 
console.log(room2.capacity); //18











