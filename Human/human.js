function Human(name,age,skills = []){
    this.name = name;
    this.age = age;
    this.stomach = 0;
    this.energy = 100;
    this.skills = skills;
    this.eat = (meal) => {
        this.stomach += meal;
        if(this.stomach > 100){
            this.stomach = 100;
        }
        this.energy += meal/2;
        if(this.energy > 100){
            this.energy = 100;
        }

    }
    this.move = (distance, type) => {
        if(type == "run") {
            this.energy -= distance*10;
            this.stomach -= distance*2;
        }else if(type == "walk") {
            this.energy -= distance*2.5;
            this.stomach -= distance/2;
        }
        if(this.stomach < 0){
            this.stomach = 0;
        }
        if(this.energy < 0) {
            this.energy = 0;
        }
    }
}

module.exports = Human;