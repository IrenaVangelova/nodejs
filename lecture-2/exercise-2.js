
const faker = require('faker');

let arr = []

for(let i = 0; i< 100; i++) {
    arr.push({
        name: faker.name.findName(),
        workpos: faker.name.title(),
        address: faker.address.streetAddress(),
        town: faker.address.city(),
        state: faker.address.state(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email()
    })
}

console.log(arr)

