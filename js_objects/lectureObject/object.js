// Dog
let firstName='Tommy';
let lastName='Tommy';
let age=10;
let hobbies=['Like to Play','Play with boxes'];

// console.log(`${firstName} - ${lastName}`);

function walk1(){
    return 'My dog walks'
}
// {} 👈🏻 Object
const dog={
    firstName:'Tommy',
    age:10,
    hobbies:['like to play','play with boxes'],
    // Style 1
    bark:function(){
        return 'bark';
    },
    //Style 2
    walk:walk1,
    //Style 3 - Sugar Syntax
    playing(){
        return 'My dog loves playing'
    }

}


// Car object, Properties(Key): name, brand, makeYear, model

const car={
    name: 'lisa',
    brand: "Tesla",
    makeYear: 2020,
    model:"roadster",
    "number of wheels":4,
    description:function(){
        return `${this.name} is a from ${this.brand}`
    }
}

// Access Values from Object
// Method 1: (with Dot notation)

// console.log(car.name); // 👈🏻 Displaying this line
// console.log(car.brand);
// console.log(`${car.name} - ${car.makeYear}`);

// Method 2:(Square Braket [] method)

// console.log(`Accessing value of object: ${car['model']}`);
//numberOfWheels
// console.log(car.numberOfWheels);
// console.log(car['numberOfWheels']);

// Reason 1 for []
// let prop1='name';

// console.log(car[prop1]);
// car['name']

// Reason 2 for []

// console.log(car["number of wheels"]);
// console.log(car["makeYear"]);

// console.log(car.name + "  ::::::: " + car.brand);
// console.log(`${car.name} ::::::: ${car.brand}`);

// console.log(car.makeYear);
car.makeYear=2021
// console.log(car.makeYear);

// console.log(car.owner);
car.owner='Naveed';
// console.log(car.owner);

car["secondOwner"]='John'
// console.log(car.secondOwner);

// console.log(Object.keys(car));
// console.log(Object.values(car));

const parts={
    doors:4,
    airConditioning:true
}
const mergedObject=Object.assign(car,parts);

// console.log(mergedObject);

// for(key in car ){
//     console.log(`Key:${key} , values:${car[key]}`);
// }


// console.log(dog.bark());

// console.log(dog.walk());
// console.log(dog.playing());
//Style 4: 
// function running(){
//     return 'My dog runs very fast';
// }
// dog.run=running;

// console.log(dog.run());


console.log(car.description());
