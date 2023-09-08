let count = 0;

function showFact(){
    let fact;
    const facts = ["The driest place on Earth is in Antarctica",
        "The tongue is the strongest muscle in the human body",
        "Rubik's cube is the most sold product in the world"];

    count++;

    if(facts[count-1]){
        fact = facts[count-1];
    }
    else{
        fact = "Facts ended";
    }

    document.getElementById("fact").innerHTML = fact;
}
