const faker = require('faker');

var os = require('os');
var url = require('url');
const fs = require('fs');
const { fake } = require('faker');



var adr = new URL('http://localhost:8080/default.htm?year=2017&month=february');

console.log(adr.host);
console.log(adr.pathname); 
console.log(adr.search); 


console.log("Version: " + os.version());
console.log("Memory: " + os.totalmem());
console.log("Architecture: " + os.arch());


// let arr = []

// for(let i = 0; i< 20; i++) {
//     arr.push({
//         name: faker.name.findName(),
//         workpos: faker.name.title(),
//         address: faker.address.streetAddress(),
//         town: faker.address.city(),
//         state: faker.address.state(),
//         phone: faker.phone.phoneNumber(),
//         email: faker.internet.email()
//     })
// }

// console.log(arr)



function generateUsers() {

  let users = []

  for (let id=0; id <20; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let car = faker.vehicle.model();
    let carFuel = faker.vehicle.fuel();
    let amount = faker.finance.amount();

    users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "car" : car,
        "carFuel" : carFuel,
        "amount": amount
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));