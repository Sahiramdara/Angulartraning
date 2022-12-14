class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    area() {
        console.log("Rectangle area is " + this.length * this.width);
    }
}
class Sphere {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        console.log("Area of Sphere is " + 4 * 3.14 * this.radius * this.radius);
    }
}
class Cone {
    constructor(radius, slantHeight) {
        this.radius = radius;
        this.slantHeight = slantHeight;
    }
    area() {
        console.log("Area of Cone is " + 3.14 * this.radius * this.radius + 3.14 * this.radius * this.slantHeight);
    }
}
let a = new Rectangle(5, 8);
a.area();
let b = new Sphere(8);
b.area();
let c = new Cone(5, 12);
c.area();
//# sourceMappingURL=Question5Script.js.map