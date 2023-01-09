function playrockpaperscissors(Playerselection, computerselection){
    if (computerselection===Playerselection){
        return "Its tie!";
    } else if(computerselection === "rock")  {
        if (Playerselection === "paper"){
        return "paper covers rock you win";
   
    }
    else if(computerselection=== "scissors")
    {
        if (playerSelection=== "rock" ){
            return "rock beats scissors you win";
        }
        else if(computerselection=== "paper"){
            if(playerSelection === "scissors"){
                return "scissors beats paper you win";
    }
    else if(computerselection === "rock"){
        if(playerSelection === " scissor"){
            return "you lose!Rock beats scissor";
        } 
        else if(playerselection === "scissor"){
            if (computerselection === "paper"){
                return " scissor cuts paper you win";
            }
        }
    }

    }
}

const playerselection = "scissor";
const computerselection = "rock";
 console.log(playrockpaperscissors(playerselection,computerselection));
 
 for (i=1 ; i<=5 ; i++){
    playgame();
 }