// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => { 
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5be1b2d122101a0086b8aa6f')
    // },
    // {
    //     $set: {
    //         completed: true
    //     }
    // },
    // {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        name: 'Carl'
    },
    {
        $set: {
            name: 'Wadi'
        },
        $inc: {
            age: 1
        }
    },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // client.close();
});