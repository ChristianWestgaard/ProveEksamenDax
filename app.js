function saveData(){
    var input = document.getElementById("saveNavn").value;
    localStorage.setItem("DittNavn", input);

    if (input = localStorage.getItem("DittNavn")){
        textVelkommen.innerHTML = "Velkommen,vi ønsker deg alt som er godt, " + input + "!"
    }
}