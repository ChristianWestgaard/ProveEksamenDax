function saveData(){
    var input = document.getElementById("saveNavn").value;
    localStorage.setItem("DittNavn", input);

    if (input = localStorage.getItem("DittNavn")){
        textVelkommen.innerHTML = "Velkommen,vi ønsker deg alt som er godt, " + input + "!"
    }
}



const { AsyncLocalStorage } = require('async_hooks');
const { log } = require('console');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user1:Password1@visitorname.t4qyvrp.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await listDatabases(client);
  } finally {
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

