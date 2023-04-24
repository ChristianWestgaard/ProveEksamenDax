function saveData(){
    var input = document.getElementById("saveNavn").value;
    localStorage.setItem("DittNavn", input);

    if (input = localStorage.getItem("DittNavn")){
        textVelkommen.innerHTML = "Velkommen,vi ønsker deg alt som er godt, " + input + "!"
        console.log("Text, finished");
    }
    run()
}

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
