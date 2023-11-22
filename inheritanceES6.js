class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(this.name+'makes a noise');
    }
}

class Dogs extends Animal{
    speak(){
        super.speak();
        console.log(this.name+'barks');
    }
}

let dog = new Dogs('Rex');
dog.speak();