class Animal {
    constructor(name){
        this.name=name;
    }

    greet(){
        return `Hello this is my ${this.name}`
    }
 }

 let myName= new Animal("bull")
 console.log(myName.greet())