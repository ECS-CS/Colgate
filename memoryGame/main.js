// DOM ELEMENTS
const app = document.getElementById('app');
const status = document.getElementById('status');
const time = document.getElementById('time');
const scoreDiv = document.getElementById('score');

// ARRAY CONTAINING THE OBJECTS WE WILL RENDER ON THE DOM
// THE KEY 'MATCH' IS USED TO TO COMPARE OUR CARDS
// THE KEY 'SRC' IS USED TO MAKE OUR IMAGES DISPLAY
const cards = [
  {
    "match": "Name1",
    "src": "./images/201519_1.jpg"
  },
  {
    "match": "Name2",
    "src": "./images/800514_1.jpg"
  },
  {
    "match": "Name3",
    "src": "./images/802390_01.jpg"
  },
  {
    "match": "Name4",
    "src": "./images/804276_01.jpg"
  }
];

// IN ORDER TO MATCH CARDS, WE NEED TO DUPLICATE THE ARRAY WE DEFINED ABOVE
// IN OTHER WORDS WE ARE DOUBLING ALL THE CARDS IN OUR ARRAY
const dupCards = cards.map(c => c).concat(cards).sort(() => Math.random() - 0.5);

// WHEN A USER CHOOSES A CARD WE WILL INSERT IT INTO THIS ARRAY
let selectedCards = [];
// WHEN THE GAME STARTS YOUR SCORE IS 0
let score = 0;
// RANDOM COLORS FOR BACKGROUND
const colors = [
  'lightblue',
  'yellow',
  'blue',
  'pink',
  'purple',
  'orange',
  'grey',
  'burgundy'
];

// TIMER
let timer = 30;

function randomBGC(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

function gameTimer(){
  window.myMatchingGameInterval = setInterval(() => {
      timer--;
      time.textContent = `${timer} seconds left`;
      if(timer === 0){
        clearInterval(window.myMatchingGameInterval);
        // GAMEOVER
        const images = [...document.body.querySelectorAll('.card')];
        images.forEach(image => {
          image.removeEventListener('click', flipCard);
          image.classList.add('fade');
          setTimeout(() => image.remove(), 2000);
        });
        status.textContent = 'Gameover!';
        time.remove();
      } else if(timer % 10 === 0){
        document.body.style.background = randomBGC(colors);
      }
  }, 1000);
}

// THIS FUNCTION COMPARES THE CARDS THE USER SELECTED
function checkForMatch() {
  // IF THE CARDS MATCH
  if(selectedCards[0].card.match === selectedCards[1].card.match){
    score++;
    status.textContent = 'Found a match!';
    updateClass('goodScore', 'badScore');
    selectedCards.forEach(card => {
      card.element.classList.add('match');
      setTimeout(() => card.element.classList.add('fade'), 300);
    });
  } else {
  // IF THE CARD DOESN'T MATCH
    score--;
    status.textContent = 'Try again!';
    updateClass('badScore', 'goodScore');
    flipBack(selectedCards);
  }
  gameOver();
  // AFTER WE CHOOSE OUR CARDS, WE RESET OUR ARRAY SO IT NO LONGER CONTAINS OUR PREVIOUS CARDS
  selectedCards = [];
  // WE UPDATE THE HTML TO SHOW THE CURRENT SCORE
  scoreDiv.textContent = score;
}

// HELPER FUNCTION
// THIS FUNCTION ADDS/REMOVES A CLASS TO THE STATUS TEXT WE SHOW THE USER
function updateClass(newClass, oldClass){
  scoreDiv.classList.remove(oldClass);
  scoreDiv.classList.add(newClass);
}

// HELPER FUNCTION
// IF THE CARDS DON'T MATCH FLIP THE CARDS
function flipBack(cards){
  cards.forEach(({ element }) => {
    const image = element.querySelector('img');
    setTimeout(() => image.setAttribute('src', './images/pokemonCard.png'), 500);
    image.removeAttribute('class');
  });
}

// WHEN WE CLICK ON A CARD WE RUN THIS FUNCTION EVERY TIME
// THIS FUNCTION REVEALS THE IMAGE TO THE USER
function flipCard(){
  const card = this;
  const index = card.dataset.index;
  const image = card.querySelector('img');
  image.setAttribute('src', dupCards[index].src);
  selectedCards.push({ card: dupCards[index], element: card });
  if(selectedCards.length === 2){
    setTimeout(() => checkForMatch(), 300);
  }
}

// HELPER FUNCTION
// DETERMINES WHEN THE GAME IS OVER
function gameOver(){
  const chosen = [...document.querySelectorAll('.match')];
  if(chosen.length === dupCards.length){
    status.textContent = 'Congrats! You won!';
    time.textContent = '';
    clearInterval(window.myMatchingGameInterval);
    setTimeout(() => chosen.forEach(image => image.remove()), 2000);
  }
}

// ADDS ALL THE CARDS TO THE HTML
function createBoard (){
  return dupCards.forEach((card, idx) => {
    const img = document.createElement('img');
    const div = document.createElement('div');
    img.setAttribute('src', './images/pokemonCard.png');
    div.classList.add('card');
    div.dataset.match = card.match;
    div.dataset.index = idx;
    div.addEventListener('click', flipCard);
    div.appendChild(img);
    app.appendChild(div);
  });
}

createBoard();
// START THE TIMER AFTER 1 SECOND
setTimeout(() => gameTimer(), 1000);