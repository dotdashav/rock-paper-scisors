const cScoreNumber= document.querySelector('.cScoreNumber');
const pScoreNumber= document.querySelector('.pScoreNumber');
const r = document.getElementById('r'); 
const p = document.getElementById ('p'); 
const s = document.getElementById ('s');
const feedback = document.querySelector('.feedback');
const  buttons = document.querySelectorAll ('button');
const finalResult = document.querySelector ('.finalResult');
let imgPlayer = document.getElementById('player');
let imgComputer = document.getElementById('computer');


let cscore= 0
let pscore = 0
let round = 0

function result () {
    if (cscore > pscore){
        finalResult.textContent = 'You lose'
    } 
    else { 
            finalResult.textContent = 'You win'
        }
}

function clash (game){
   if (game === 'rr' || game === 'pp' || game === 'ss' ){
        cscore += 0
        pscore += 0
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


function play (playerMove){
    let playerChoice =  playerMove;
    let randomNumber = Math.floor((Math.random() * 3));
    let options = ['r','p','s']; 
    let computerChoice = options[randomNumber]
   function playerSelection (){ 
        if (playerChoice == 'r'){
            imgPlayer.src = 'images/rock.png'
        }
        else if (playerChoice == 'p'){
            imgPlayer.src = 'images/paper.png'
        } 
        else if (playerChoice == 's'){
            imgPlayer.src = 'images/scissors.png'
        };
    };
    playerSelection();
    function computerSelection (){ 
        if (computerChoice == 'r'){
            imgComputer.src = 'images/rock.png'
        }
        else if (computerChoice == 'p'){
            imgComputer.src = 'images/paper.png'
        } 
        else if (computerChoice == 's'){
            imgComputer.src = 'images/scissors.png'
        }
    };
    computerSelection();
    let game= playerChoice+computerChoice;
    clash (game);
}

function classAdded (id){
    id.classList.add ('clicked')}

    function removeClass (e){
        if (e.propertyName !== 'background-color'){return}
        this.classList.remove ('clicked')
    } 

function roundCounter (){
    round += 1
    console.log (round);
};

function clickSelection () {
    r.addEventListener('click', ()=> { 
        if (round ==5  ) {result (); return }  
        play('r'), 
        classAdded (r);
        roundCounter(); 
        r.addEventListener('transitionend', removeClass);
    });
    s.addEventListener('click', ()=>{ 
        if (round ==5 ) {result (); return }  
        play('s'), 
        classAdded (s);
        roundCounter ();
        s.addEventListener('transitionend', removeClass);
    });
    p.addEventListener('click', ()=>{ 
        if (round ==5 ) {result (); return }  
        play('p'),  
        classAdded (p);
        roundCounter();
        p.addEventListener('transitionend', removeClass);
    });
}


clickSelection();
