function saveData(){
    var input = document.getElementById("saveNavn").value;
    localStorage.setItem("DittNavn", input);

    if (input = localStorage.getItem("DittNavn")){
        textVelkommen.innerHTML = "Velkommen,vi ønsker deg alt som er godt, " + input + "!"
    }
}



// const { AsyncLocalStorage } = require('async_hooks');
// const { log } = require('console');
// const { randomInt } = require('crypto');

const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://user1:Password1@visitorname.t4qyvrp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);


const dbName = "test";
const DataB = "DataBase"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version


async function run() {
  try {
       await client.connect();
       console.log("Connected correctly to server");
       const db = client.db(dbName);
       // Use the collection "people"
       const col = db.collection("people");
       // Construct a document                                                                                                                                                              
       let personDocument = {
           "name": { "first": "Alan", "last": "Turing" },
           "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
           "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
           "contribs": [ "Turing machine", "Turing test", "Turingery" ],
           "views": 1250000
       }
       // Insert a single document, wait for promise so we can read it back
       const p = await col.insertOne(personDocument);
       // Find one document
       const myDoc = await col.findOne();
       // Print to the console
       console.log(myDoc);
      } catch (err) {
       console.log(err.stack);
   }

   finally {
      await client.close();
  }
}

async function listDB(client) {
    const databasesList = await client.db().admin().listDB();

    console.log("Databases");
    databasesList.databases.forEach(db => {
        console.log("- ${db.name}");
    })
} 

// async function checklist() {
//   try {

//     await client.connect();

//     if (localStorage.getItem("DittNavn") == document.getElementById("saveNavn").value) {
//         visitorList.innerHTML =
//     }

//   } finally {

//     await client.close();
//   }
// }

function getTime(){
  var now    = new Date();
  var second = now.getSeconds();
  console.log(second);
  if (second === 0){
    console.log("Now")
  }
}

async function init() {
  var today = new Date(); 
  var time = today. getHours() + ":" + today

  getClockTime();
  setInterval(getClockTime,1000);

  if (today.getSeconds() === 00){
    console.log("NOW")
    clockrandom.innerHTML = randomInt
  }

  console.log(time);
}
