let fact;
let count = 0;

const facts = {
    1: "The driest place on Earth is in Antarctica",
    2: "The tongue is the strongest muscle in the human body",
    3: "Rubik's cube is the most sold product in the world"
};

const factsStr = JSON.stringify(facts);

localStorage.setItem("facts", factsStr)

const factObj = JSON.parse(localStorage.getItem("facts"));


function showFact(){
    count++;

    if(factObj[count]){
        fact = factObj[count];
    }
    else{
        fact = "Facts ended";
    }

    document.getElementById("fact").innerHTML = fact;
}
