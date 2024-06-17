// Selecting the database to use (implicitly used in the collection methods).

// creating and/or Inserting a few documents into the users collection.
db.getCollection("users").insertMany([
  {
    email: "torben@test.dk",
    phone: "01010101",
    username: "Torben",
  },
  {
    email: "testexample@test.dk",
    phone: "12345678",
    username: "TestDummy",
  },
]);

// query for Finding users with the name "Torben"
const userByName = db
  .getCollection("users")
  .find({
    Name: "Torben",
  })
  .toArray();

// Print the found users
console.log(userByName);

// Aggregation example
const aggregationResult = db
  .getCollection("users")
  .aggregate([
    {
      $match: {
        username: "Torben",
      },
    },
    // Add more stages if needed
  ])
  .toArray();

// Print the aggregation result
console.log(aggregationResult);
