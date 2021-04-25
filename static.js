class Animal{
    static category='Dog'
    constructor(name,speed){
        this.name=name;
        this.speed=speed;
    }
   static compare(animal1,animal2){
        if(animal1.speed>animal2.speed){
            return `${animal1.name} is faster`;
        }
        return `${animal2.name} is faster`;
    }
}

//static without create new we can use it.

console.log(Animal.category);
const myRat= new Animal('rat',12);
const myDog= new Animal('dog',50);

console.log(Animal.compare(myRat,myDog));
