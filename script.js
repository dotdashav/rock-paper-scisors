const cScoreNumber= document.querySelector('.cScoreNumber');
const pScoreNumber= document.querySelector('.pScoreNumber');
const r = document.getElementById('r'); 
const p = document.getElementById ('p'); 
const s = document.getElementById ('s');
const feedback = document.querySelector('.feedback');
const  buttons = document.querySelectorAll ('button');
const finalResult = document.querySelector ('.finalResult');

let cscore= 0
let pscore = 0

function result () {
    if (cscore > pscore){
        finalResult.textContent = 'You lose'
    } 
    else { 
            finalResult.textContent = 'You win'
        }
}

function clash (game){
    if (cscore >=4 || pscore>= 4 ) {
        result ()
        return
     }  
    else if (game === 'rr' || game === 'pp' || game === 'ss' ){
        cscore += 1
        pscore += 1
        cScoreNumber.textContent = `${cscore}`
        pScoreNumber.textContent = `${pscore}`
        feedback.textContent = "It's a tied game"
    } 
    else if (game === 'rp'){
                cscore += 1        
                cScoreNumber.textContent = `${cscore}`
                feedback.textContent = 'You lose. Paper beats rock'
            }
    else if (game === 'sr'){
        cscore += 1
        cScoreNumber.textContent = `${cscore}`
        feedback.textContent = 'You lose. Rock beats sicssors'
    }
    else if (game === 'ps'){
        cscore += 1
        cScoreNumber.textContent = `${cscore}`
        feedback.textContent = 'You lose. Scissors beats paper'
    }
    else if (game === 'pr'){
        pscore += 1
        pScoreNumber.textContent = `${pscore}`
        feedback.textContent = 'You win. Paper beats rock'
    } 
    else if (game === 'rs'){
        pscore += 1
        pScoreNumber.textContent = `${pscore}`
        feedback.textContent = 'You win. Rock beats sicssors'
    }            
    else if (game === 'sp'){
        pscore += 1
        pScoreNumber.textContent = `${pscore}`
        feedback.textContent = 'You win. Scissors beats paper'
    }
 };


function play (playerChoice){
    let randomNumber = Math.floor((Math.random() * 3));
    let options = ['r','p','s']; 
    let computerChoice = options[randomNumber]; 
    let game= playerChoice+computerChoice;
    clash (game);
}
 
function classAdded (id){
    id.classList.add ('clicked')}



function clickSelection () {
    r.addEventListener('click', ()=> { 
        play('r'), 
        classAdded (r);
    });
    s.addEventListener('click', ()=>{ 
        play('s'), 
        classAdded (s);
    });
    p.addEventListener('click', ()=>{ 
        play('p'),  
        classAdded (p);
    });
}


clickSelection();
