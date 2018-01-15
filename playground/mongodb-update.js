const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').findOneAndUpdate(
  // {
  //   _id: new ObjectID('5a5984ab64befae91f2492fa')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a59813c005e7bc6bba40170')
  }, {
    $set: {
      name: "Andrew"
    },
    $inc: {
      age: 1
    },
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});
