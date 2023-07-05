function diceGame(){

    makeSound()
    //Two Random Numbers
    let randomNum1 = Math.floor((Math.random()*6)+1);
    let randomNum2 = Math.floor(Math.random()*6)+1;

console.log('randomNum1',randomNum1)
    //Adding random number for different images
    let randomDice1 = `./image/dice${randomNum1}.png`
    let randomDice2 = `./image/dice${randomNum2}.png`

    //Target player 1 and 2 dice
    let diceImage1 = document.getElementById("p1");
    let diceImage2 = document.getElementById("p2");

    //Changing different dice using random dice images
    diceImage1.setAttribute("src", randomDice1)
    diceImage2.setAttribute("src", randomDice2)

    //display result

    let result = document.getElementById("result")
    let p1_box = document.querySelector(".player-1")
    let p2_box = document.querySelector(".player-2")

    if (randomNum1>randomNum2){
        result.innerHTML = "player 1 Win🥇🏆 !"
        result.style.color = "#05bfdb"
        p1_box.style.borderColor = "#05bfdb"
        p2_box.style.borderColor = "#2c2c2c"

    } else if (randomNum1===randomNum2){
        result.innerHTML = "🎈Oops! It's a Draw 🎈"
        result.style.color = "yellowgreen"
        p1_box.style.borderColor = "yellowgreen"
        p2_box.style.borderColor = "yellowgreen"

    } else {
        result.innerHTML = "player 2 Win🥇🏆 !"
        result.style.color = "darkorange"
        p2_box.style.borderColor = "darkorange"
        p1_box.style.borderColor = "#2c2c2c"
    }
}
function makeSound(){
    let audio = new Audio("./image/dice_roll-96878.mp3");
    audio.play();
}