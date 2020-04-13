// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// this passes the reference and not a cpoy
const team = players;

console.log(players,team);

//changes both because it's passing a ref and not a copy
team[3] = "Lux";

//we can copy array with slice, concat, arg param
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

team2[2] = "captain";
team5[3] = "el bandido";
console.table(team2);
console.table(team4);
console.table(team5);


// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Tweety Yellow',
    age: 80
};

//passes by ref instead of copy
const newPerson = person;
newPerson.age = 90;

//to copy
const anotherPerson = Object.assign({}, person, { number: 199});
console.log(person, anotherPerson); 
//it only works one level deep, we need to clone deep to clone the other levels?
//JSON.parse(JSON.stringify(obj))