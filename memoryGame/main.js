// DOM ELEMENTS
const app = document.getElementById('app');
const status = document.getElementById('status');
const desc = document.getElementById('desc');
const time = document.getElementById('time');
const scoreDiv = document.getElementById('score');
const scoreTime = document.getElementById('scoreTime');
const gameoverDiv = document.getElementById('gameover');
const finalScore = document.querySelector('.finalScore');
const startBTN = document.getElementById('start');
startBTN.addEventListener('click', () => createBoard());
const reset = document.getElementById('reset').addEventListener('click', () => window.location.reload());

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
let timer = 60;

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
        const images = [...document.body.querySelectorAll('.scene')];
        images.forEach(image => {
          image.removeEventListener('click', flipCard);
          image.classList.add('fade');
          setTimeout(() => image.remove(), 2000);
        });
        status.textContent = '';
        setTimeout(() => { 
          gameoverDiv.style.display = 'block';
          finalScore.textContent = score; 
        }, 300);
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
  cards.forEach(({ element }) => setTimeout(() => element.querySelector('.card').classList.remove('is-flipped'), 1000));
}

// WHEN WE CLICK ON A CARD WE RUN THIS FUNCTION EVERY TIME
// THIS FUNCTION REVEALS THE IMAGE TO THE USER
function flipCard(){
  const card = this;
  const index = card.dataset.index;
  card.querySelector('.card').classList.add('is-flipped');
  card.querySelector('.card__face--back').querySelector('img').setAttribute('src', dupCards[index].src);
  selectedCards.push({ card: dupCards[index], element: card });
  if(selectedCards.length === 2){
    if(selectedCards[0].element !== selectedCards[1].element){
      setTimeout(() => checkForMatch(), 300);
    } else {
      status.textContent = "Can't choose the same card twice! Try again!";
      flipBack(selectedCards);
      selectedCards = [];
    }
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
    setTimeout(() => { 
      gameoverDiv.style.display = 'block';
      finalScore.textContent = score;
   }, 3000);
  }
}

// ADDS ALL THE CARDS TO THE HTML
function createBoard (){
  // START THE TIMER AFTER 1 SECOND
  setTimeout(() => gameTimer(), 1000);
  startBTN.style.display = "none";
  desc.style.display = "none";
  scoreTime.style.display = 'grid';

  return dupCards.forEach((card, idx) => {
    // CREATE DOM ELEMENTS
    const imgFront = document.createElement('img');
    const imgBack = document.createElement('img');
    const scene = document.createElement('div');
    const cardDiv = document.createElement('div');
    const cardFace = document.createElement('div');
    const cardBack = document.createElement('div');

    imgFront.setAttribute('src', 'https://i.pinimg.com/736x/c9/e5/61/c9e561d61fc50771ece1255125f7fb1a.jpg');
    cardFace.appendChild(imgFront);
    cardBack.appendChild(imgBack);

    scene.classList.add('scene');
    cardDiv.classList.add('card');
    cardFace.classList.add('card__face', 'card__face--front');
    cardBack.classList.add('card__face', 'card__face--back');

    // ATTRIBUTES THAT HELP US IDENTIFY OUR ELEMENTS
    scene.dataset.match = card.match;
    scene.dataset.index = idx;

    // ADD A CLICK EVENT TO EVERY CARD
    scene.addEventListener('click', flipCard);

    // ADD EACH CREATED ELEMENT TO THE DOM
    cardDiv.appendChild(cardFace);
    cardDiv.appendChild(cardBack);
    scene.appendChild(cardDiv);
    app.appendChild(scene);
  });
}