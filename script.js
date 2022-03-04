let options= Array ('rock','paper','scisors');
        
function random (a,b){
    return 0.5 - Math.random();
}

function computerplay () {
    let mixedarray= options.sort(random);
    let optioncomputer = options[0];
    return optioncomputer
}

let cscore = 0
let pscore = 0


function playRound (a,b){
    if ((a == 'rock') && (b == 'paper')) {
        cscore += 0;
        pscore += 1;
        console.log ('You win, paper beats rock');
        return
    }
    else if (a == 'rock' && b == 'scisors'){
        cscore += 1;
        pscore += 0;
        console.log ('You lose, rock beats scisors');
        return
    }
    else if (a == 'rock' && b == 'rock'){
        cscore += 1;
        pscore += 1;
        console.log ('Tie Game');
        return
    }
    else if (a == 'paper' && b == 'rock'){
        cscore += 1;
        pscore += 0;
        console.log ('You lose, paper beats rock');
        return 
    }
    else if (a == 'paper' && b == 'scisors'){
        cscore += 0;
        pscore += 1;
        console.log ('You win, scisors beats paper');
        return 
    }
    else if (a == 'paper' && b == 'paper'){
        cscore += 1;
        pscore += 1;
        console.log ('Tie Game')
        return
    }
    else if (a == 'scisors' && b == 'paper'){
        cscore += 1;
        pscore += 0;
        console.log ('You lose, scisors beats paper');
        return 
    }
    else if (a == 'scisors' && b == 'rock'){
        cscore += 0;
        pscore += 1;
        console.log ('You win, rock beats scisors');
        return
    }
    else if (a == 'scisors' && b == 'scisors'){
        cscore += 1;
        pscore += 1;
        console.log ('Tie Game')
        return
    }
    else {
        console.log ('Not rock, paper or scisors written')
    }
    
}

function game (){
    for (let i=0;i<5;i++){
        computerplay ()
        let computer = computerplay();
        let optionplayer = prompt('Choose rock, paper or scisors:')
        let playerchoice = optionplayer.toLowerCase();
        console.log ('Computer chose ' + computer)
        playRound(computer,playerchoice)
    }
}

function winner (){
    if (pscore > cscore) {
        console.log ('You winn');
    }
    else {
        console.log ('You lose');
    }
}
game ()
winner ()

        