const car = {
    make : "ford",
    model : "mustang",
    color : "black",
    type : "sedan",
    tires : "firestone",
    mode : "sport",
    gasoline : "super"
}

function prompt1() {
    console.log(car);
}

function prompt2() {
    const car = {
        make : "ford",
        model : "mustang",
        color : "black",
        type : "sedan",
        tires : "firestone",
        mode : "sport",
        gasoline : "super"
    }
    console.log(car);
}

function prompt3() {
    delete car.gasoline;
    console.log(car);
}

function prompt4() {
    console.log(Object.keys(car));
}

function prompt5() {
    console.log(Object.values(car));
}

function prompt6() {
    car.tints = '33%';
    car.carplay = true;
    console.log(car);
}

car.startEngine = function() {
    console.log('VROOM VROOM');
    let engineOn = true;
}

car.turnOffEngine = function() {
    console.log('car turned off');
    let engineOn = false;
}

function prompt9() {
    for(let prop in car){
        console.log(prop);
    }
}

const duck = {
    favoriteFood: ['bread', 'seeds', 'corn'],
    canfly: true,
    name: 'Donald',
    age: 6,
    wingSize: 'Long',
    chirpSound: function(){
        console.log("Quack");
    },
    birdDiet: function(){
        console.log(this.favoriteFood);
    },
    fly: function(){
        if(this.canfly == true){
            console.log('I live in the sky');
        } else{
            console.log("I'd like to stay on the ground");
        }
    }
}

const house = {
    name: 'Monster House',
    age: 200,
    owner: 'Horace Nebbercracker',
    isMonster: true,
    friendly: false,
    advantages: {run: 'Fast', size: 'Big', mouth: 'Huge'},
    favoriteFood: ['kids', 'animals', 'toys'],
    diet: function(){
        console.log(this.favoriteFood);
    },
    sound: function(){
        console.log('RAWRRRRR');
    },
    whenSold: function(){
        if(this.owner !== 'Horace Nebbercracker'){
            console.log('The house was sold');
        } else{
            console.log('Horace Nebbercracker still owns the house');
        }
    }
}