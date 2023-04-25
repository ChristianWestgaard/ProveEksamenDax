
var numb = 0
let peopleArray = []
var sepreator = "<br>"

function saveData(){
  var input = document.getElementById("saveNavn").value;
  // localStorage.setItem("DittNavn" + numb, input);
  peopleArray.push(input)
  localStorage.setItem("names",JSON.stringify(peopleArray))

  var finishedList = peopleArray.join(sepreator)
  visitorList.innerHTML = finishedList

  // if (input = localStorage.getItem("DittNavn"+ numb)){
  //     textVelkommen.innerHTML = "Velkommen,vi ønsker deg alt som er godt, " + input + "!"
  //     console.log("Text, finished");
  // console.log(numb);
  // }
}
// var peps = localStorage.getItem("names")

// function getTime(){
//   var now    = new Date();
//   var second = now.getSeconds();
//   console.log(second);
//   if (second === 0){
//     console.log("Now")
//   }
// }

// async function init() {
//   var today = new Date(); 
//   var time = today. getHours() + ":" + today

//   getClockTime();
//   setInterval(getClockTime,1000);

//   if (today.getSeconds() === 00){
//     console.log("NOW")
//     clockrandom.innerHTML = randomInt
//   }

//   console.log(time);
// }
