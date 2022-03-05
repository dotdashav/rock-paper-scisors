const cScoreNumber= document.querySelector('.cScoreNumber');
const pScoreNumber= document.querySelector('.pScoreNumber');
const r = document.getElementById('r'); 
const p = document.getElementById ('p'); 
const s = document.getElementById ('s');
const feedback = document.querySelector('.feedback');





//r is for rock, p is for paper and s is for scissors
let options= ['r','p','s'];

function random (a,b){
    return 0.5 - Math.random();
}

function computerplay () {
    let mixedarray= options.sort(random);
    let computerchoice = options[0];
    return computerChoice = computerchoice;
}    

let cscore = 0
let pscore = 0

function choicePlayer( ) {
        r.addEventListener('click',  function (){return playRound ('r', computerplay())});
        p.addEventListener('click',  function (){return playRound ('p', computerplay())});
        s.addEventListener('click',  function (){return playRound ('s', computerplay())});
}




function playRound ( playerchoice , computerchoice){
    let option = playerchoice + computerchoice; 
    if (option === 'pr') {
        pscore += 1;
        pScoreNumber.textContent = `${pscore}`;
        feedback.textContent ='You win, paper beats rock';
    }
    else if (option === 'sr'){
        cscore += 1;
        cScoreNumber.textContent = `${cscore}`;
        feedback.textContent = 'You lose, rock beats scissors';
    }
    else if (option === 'rr'){
        cscore += 1;
        pscore += 1;
        pScoreNumber.textContent = `${pscore}`;
        cScoreNumber.textContent = `${cscore}`;
        feedback.textContent  = 'Tie Game';
    }
    else if (option === 'rp'){
        cscore += 1;
        cScoreNumber.textContent = `${cscore}`;
        feedback.textContent  = 'You lose, paper beats rock';
    }
    else if (option ==='sp'){
        pscore += 1;  
        pScoreNumber.textContent = `${pscore}`;
        feedback.textContent= 'You win, scissors beats paper';
    }
    else if (option ==='pp'){
        cscore += 1;
        pscore += 1;
        pScoreNumber.textContent = `${pscore}`;
        cScoreNumber.textContent = `${cscore}`;
        feedback.textContent  = 'Tie Game'
    }
    else if (option === 'ps'){
        cscore += 1;
        cScoreNumber.textContent = `${cscore}`;
        feedback.textContent  = 'You lose, scissors beats paper';
    }
    else if (option ==='rs'){
        pscore += 1;
        pScoreNumber.textContent = `${pscore}`;
        feedback.textContent  = 'You win, rock beats scissors';
    }
    else if (option === 'ss'){
        cscore += 1;
        pscore += 1;
        pScoreNumber.textContent = `${pscore}`;
        cScoreNumber.textContent = `${cscore}`;
        feedback.textContent  = 'Tie Game'
    }   
}

function fiveRounds (){ 
    if ( cscore >=5 || pscore>=5 ) {alert('Stop');}
    else {choicePlayer(), console.log (cscore)};
}

fiveRounds();