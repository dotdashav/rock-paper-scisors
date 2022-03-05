const cScoreNumber= document.querySelector('.cScoreNumber');
const pScoreNumber= document.querySelector('.pScoreNumber');
const r = document.getElementById('r'); 
const p = document.getElementById ('p'); 
const s = document.getElementById ('s');
const feedback = document.querySelector('.feedback');




function userChoice (option){
   let playerChoice = option;
   return playerChoice;
}
 
function clickSelection () {
    r.addEventListener('click', ()=> {return userChoice('r');});
    s.addEventListener('click', ()=>{return userChoice('s');});
    p.addEventListener('click', ()=>{return userChoice('p');});
}

const playerElection =clickSelection();
playerElection();

const posibilities = {
    rp : 'lose',
    rs : 'win',
    rr: 'tie',
    pp:'tie',
    ps:'lose',
    sp:'win',
    ss:'tie',
    sr:'lose'
};