let randomizeNumberOne = Math.ceil(Math.random() * 6);

let randomizeNumberTwo = Math.ceil(Math.random() * 6);

let imgSource = "./images/dice";

document.querySelectorAll("img")[0].setAttribute("src", imgSource + randomizeNumberOne + ".png");
document.querySelectorAll("img")[1].setAttribute("src", imgSource + randomizeNumberTwo + ".png");

if (randomizeNumberOne > randomizeNumberTwo){
    document.querySelector("h1").textContent = "🚩 Player 1 wins!"
}else if (randomizeNumberOne < randomizeNumberTwo){
    document.querySelector("h1").textContent = "Player 2 wins! 🚩"
}else{
    document.querySelector("h1").textContent = "Draw!"
}

setTimeout(() => {document.querySelector("h1").textContent = "Refresh me"}, 5000);