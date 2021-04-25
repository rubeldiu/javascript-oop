///Hide Something 
class Tiger{
    #speed =100;
    location='Sundarban';
    constructor(name){
        this.name=name
    }
    run(){
        console.log(`I am ${this.name}. I am running at ${this.#speed} mph. I live in ${this.location}`);
    }
}

const royal = new Tiger('Royal Bengal');
royal.location='Borishal'
royal.run();