class Circle{
    constructor(radius){
        this.radius= radius
    }
    area(){
        return Math.PI * this.radius**2;
    }
}
class Rectangle{
    constructor(width,height){
        this.height=height;
        this.width=width;
    }
    area(){
        return this.height* this.width;
    }
}

class Triangle{
    constructor(base,height){
        this.base=base;
        this.height=height;
    }
    area(){
        return this.base * this.height/2;
    }
}

const shapes= [new Circle(10), new Rectangle(10,5), new Triangle(10,10)];

for (let i = 0; i < shapes.length; i++) {
    const element = shapes[i];
    console.log(element.area());
    
}