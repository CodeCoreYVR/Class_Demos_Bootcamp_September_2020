var faker = require('faker');

let createRecord = (knex, id) => {
  return knex('countries').insert({
    name: faker.address.country(),
    code: faker.address.countryCode()
  })
}

exports.seed = (knex, Promise) => {
  return knex('countries').del()
    .then(() => {
      let records = [];

      for (let i = 1; i < 10; i++) {
        records.push(createRecord(knex, i))
      }

      // return Promise.all(records);
    });
};