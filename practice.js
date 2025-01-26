class Animal{
    constructor(name){
        this.name=name;
    }

    greet(){
        return `hello my name is  ${this.name}`
    }
}

const myPet= new Animal("buddy");

console.log(myPet.greet());