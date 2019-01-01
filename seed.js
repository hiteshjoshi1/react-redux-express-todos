// get the schema first 

var Todos = require('./models/todoModels');
var config = require('./config');
var seed = config.seedDB;

var starterTodos = [
    {
      "userName": "Hitesh",
      "todo": "ipsum nisi",
      "isDone": false,
      "hasAttachment": true
    },
    {
      "userName": "Michael",
      "todo": "velit irure",
      "isDone": false,
      "hasAttachment": true
    },
    {
      "userName": "Calvin",
      "todo": "id veniam",
      "isDone": false,
      "hasAttachment": false
    },
    {
      "userName": "Wei Jie",
      "todo": "ad occaecat",
      "isDone": true,
      "hasAttachment": false
    },
    {
      "userName": "Doreen",
      "todo": "amet ipsum",
      "isDone": false,
      "hasAttachment": true
    },
    {
      "userName": "Park",
      "todo": "enim eiusmod",
      "isDone": true,
      "hasAttachment": true
    },
    {
      "userName": "Dickson",
      "todo": "ea culpa",
      "isDone": true,
      "hasAttachment": true
    },
    {
      "userName": "Vang",
      "todo": "aliqua sit",
      "isDone": true,
      "hasAttachment": false
    },
    {
      "userName": "Compton",
      "todo": "duis elit",
      "isDone": false,
      "hasAttachment": false
    },
    {
      "userName": "Guy",
      "todo": "aliqua mollit",
      "isDone": false,
      "hasAttachment": true
    }
  ];

Todos.find({}).then((users) =>{
    if(users.length>0 && seed){
        // data is there delete and re-seed
        Todos.deleteMany({}).then(
            () => {
                console.log('Data deleted, recreating');
                createData();
            }
        )
    }
    // Seed data for first time
    else{
         console.log("First time seed data genration");
         // Creating the data, accepts an array
          createData();
    }
})


function createData(){
    Todos.create(starterTodos).then(()=> {
        console.log('Todos Generation Finished');
     },(err)=> {
         console.log('Seeding Failed');
     } );
}
