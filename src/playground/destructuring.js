//
// Object destructuring
//

// const person = {
//   name: "Victor",
//   age: 30,
//   location: {
//     city: "Moscow",
//     temp: 30
//   }
// };
//
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`I'ts ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };
//
// const { name: publisherName = "self-published" } = book.publisher;
//
// if (publisherName) {
//   console.log(publisherName);
// }

//
// Array destructuring
//

const address = ["1299 S Juniper Street", "Moscow", "Uusimaa", "02210"];
const [, city, state = "NY"] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2", "$2.50", "$3"];
const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
