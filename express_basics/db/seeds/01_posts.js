const faker=require('faker')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts')
  .del() // Delete ALL EXISTING Data from Posts
    .then(function () {
      // Generate an Array of 1000 posts from faker
      const posts=Array.from({length:1000}).map(()=>{
        return {
          title: faker.company.catchPhrase(),
          content:faker.lorem.paragraph(),
          imageUrl:faker.image.imageUrl(),
          viewCount: faker.random.number(100),
          createAt: faker.date.past()
        }
      })
      // Inserts seed entries
      return knex('posts').insert(posts);
    });
};
