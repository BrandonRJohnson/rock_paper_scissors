function computerPlay() {
let choiceArray = ['rock', 'paper', 'scissors'];
const random = Math.floor(Math.random() * choiceArray.length)

console.log(random, choiceArray[random]);
}
    //compare the two values to determine the winner

function playRound(userWeapon, cpuWeapon) {
    switch(userWeapon) {
        case userWeapon == "rock":
            if cpuWeapon == "rock" {
                    return "Draw! Go again";
                    // Going to have to loop back to user choice on draws
            }
            else if cpuWeapon  == "paper" {
                    return "You lose";
                    break;
            }
            else {
                    return "You win";
                    break;
            }
        case userWeapon == "paper":
            if cpuWeapon == "rock" {
                return "You win!";
                break;
            }
            else if cpuWeapon  == "paper" {
                return "Draw! Go Again";
            }
            else {
                return "You lose";
                break;
            }
        case userWeapon == "scissors":
            if cpuWeapon == "rock" {
                return "You lose";
                break;
            }
            else if cpuWeapon  == "paper" {
                return "You win!";
                break;
            }
            else {
                return "Draw! Go again";
            }
        default:
            return "input error";
    }
}
    console.log(playRound(userWeapon, cpuWeapon));                       .