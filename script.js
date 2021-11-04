/**
 * Game Rules:
 * The game has 2 players, playing in rounds
 * In each turn, a player rolls a dice as many time as he wishes.Each result get added to his round score
 * But, if the player rolls a 1, all his round score gets lost.After that, it's the next player's turn
 * the play can choose to 'Hold', which mean that his round score gets added to his GLABL score.After that, it's the next player's turn
 * The first player to reach 100 points on GLOBAL score wins the game
 */

// let scores,roundScore,activePlayer;

//  scores = [0,0];
//  roundScore = 0;
//  activePlayer = 0;


// let dice = Math.floor(Math.random()*6)+1;
// console.log(dice);

let scores, roundScore, activePlayer,globalScore;

scores = [0,0]
roundScore=0;
activePlayer = 0;

document.getElementById('score--0').textContent='0';
document.getElementById('score--1').textContent='0';

document.querySelector('#current--0').textContent='0';
document.querySelector('#current--1').textContent='0';

document.querySelector('.dice').style.display="none";

document.querySelector(".btn--roll").addEventListener('click',function(){
    let dice = Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').style.display="block";

    const domDice = document.querySelector('.dice');
    domDice.src= "dice-" +dice+".png";


    if(dice !== 1){
        roundScore = roundScore+dice;
        document.getElementById('current--' + activePlayer).textContent= roundScore;
    }else{
        activePlayer===0? activePlayer =1: activePlayer=0;
        roundScore=0;

        document.querySelector('#current--0').textContent="0";
        document.querySelector('#current--1').textContent="0";

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display="none";
        nextPlayer();
    }
});

document.querySelector('.btn--hold').addEcentListener('click', function(){
    scores[activePlayer] += roundScore;

    document.getElementById('score--'+ activePlayer).textContent = scores[activePlayer]; 

    if(scores[activePlayer]>= 20){
        document.querySelector("#name--"+activePlayer).textContent="Winner";
        document.querySelector('.dice').style.display="none";
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        gamePlaying =false;
    }else{
        nextPlayer();
    }
});
function nextPlayer(){
    activePlayer===0? activePlayer =1: activePlayer =0;
    roundScore =0;

    document.querySelector('#current--0').textContent="0";
        document.querySelector('#current--1').textContent="0";

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display="none";
}
document.querySelector('.btn--new').addEventListener('click',init) //what

function init(){

    scores= [0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    document.querySelector('#score--0').textContent='0';
    document.querySelector('#score--1').textContent='0';
    document.querySelector('#current--0').textContent='0';
    document.querySelector('#current--1').textContent='0';

    document.querySelector('.dice').style.display="none";
    document.getElementById('name--0').textContent="Player 1";
    document.getElementById('name--1').textContent="Player 2";

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}



