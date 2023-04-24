function saveData(){
    var input = document.getElementById("saveNavn").value;
    localStorage.setItem("DittNavn", input);

    if (input = localStorage.getItem("DittNavn")){
        textVelkommen.innerHTML = "Velkommen,vi ønsker deg alt som er godt, " + input + "!"
    }
}










const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://christianwestgaard04:ShellProject0904@cluster0.sxqcbo9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// const dbName = "test";
// const DataB = "DataBase"

// async function run() {
//     try {
//          await client.connect();
//          console.log("Connected correctly to server");
//          const db = client.db(dbName);
//          // Use the collection "people"
//          const col = db.collection("people");
         // Construct a document                                                                                                                                                              
        //  let personDocument = {
        //      "name": { "first": "Alan", "last": "Turing" },
        //      "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
        //      "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
        //      "contribs": [ "Turing machine", "Turing test", "Turingery" ],
        //      "views": 1250000
        //  }
         // Insert a single document, wait for promise so we can read it back
        //  const p = await col.insertOne(personDocument);
        //  // Find one document
        //  const myDoc = await col.findOne();
        //  // Print to the console
        //  console.log(myDoc);
        // } catch (err) {
        //  console.log(err.stack);
    //  }
 
    //  finally {
    //     await client.close();
    // }
// }
// run().catch(console.dir);

//     async function logInnFuction(){
        
//     // db.collection('Brukere').get().then((snapshot) => {
//     //   snapshot.docs.forEach(doc => {
//     //     console.log(doc.data());
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");
//         const db = client.db(DataB);
//         // Use the collection "people"
//         const col = db.collection("users");
//         // **__**__**__**__**__**__**__**__**
//         let userInfo ={
//             "username": document.getElementById("useri")
//         }

//         const q = await col.insertOne(userInfo);
//         const user = await col.findOne();
//         var confeirmedUName = doc.data().username
//         console.log(user);
//         console.log(confeirmedUName);
        
//         if (user("username") = document.getElementById("useri")){
//         document.getElementById("maintext") = user
//         }

//     }
//     finally{
//         await client.close();
//     }
// };