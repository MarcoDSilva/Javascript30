const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 
  'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 
  'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 
  'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filteredInventors = inventors.filter(a => a.year <= 1599 && a.year >= 1500);
console.table(filteredInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const completeNames = inventors.map(item => `${item.first} ${item.last}`);
console.table(completeNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedBday = inventors.sort((person1,person2) => person1.year > person2.year);
console.table(sortedBday);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((sum, item) => sum + (item.passed - item.year), 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const livedYears = inventors.sort((p1,p2) => (p1.passed - p1.year) > (p2.passed - p2.year) ? -1 : 1);
console.table(livedYears);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const categories = document.querySelector('.mw-category');
// let links = categories.querySelectorAll('a');

// const arrayOfLinks = [...links];

// //elements with De are true in this new array
// const elementHasDe = arrayOfLinks.map(element => element.textContent.includes("de"));  

// //only the elements with DE ih the name show up
// const elementWithDe = arrayOfLinks.filter(element => element.textContent.includes("de"));


// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleOrderByLastName = people.sort((firstPerson,secondPerson) => {
    const [firstPersonlastName, firstPersonfirstName] = firstPerson.split(', ');
    const [secondPersonLastName, secondPersonFirstName] = secondPerson.split(', ');
    return firstPersonlastName > secondPersonLastName ? 1 : -1;
});

console.table(peopleOrderByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];  

const numberOfInstances = data.reduce((obj, transport) => {
  if(!obj[transport]) {
    obj[transport] = 0;
  }

  obj[transport]++;
  return obj;
},{});

console.log(numberOfInstances);