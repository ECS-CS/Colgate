// DOM Elements
const app = document.getElementById('app');
const status = document.getElementById('status');
const scoreDiv = document.getElementById('score');

const cards = [
  {
    "name": "Name1",
    "src": "./images/201519_1.jpg"
  },
  {
    "name": "Name1",
    "src": "./images/201519_1.jpg"
  },
  {
    "name": "Name2",
    "src": "./images/800514_1.jpg"
  },
  {
    "name": "Name2",
    "src": "./images/800514_1.jpg"
  },
  {
    "name": "Name3",
    "src": "./images/802390_01.jpg"
  },
  {
    "name": "Name3",
    "src": "./images/802390_01.jpg"
  },
  {
    "name": "Name4",
    "src": "./images/804276_01.jpg"
  },
  {
    "name": "Name4",
    "src": "./images/804276_01.jpg"
  }
];

let selectedCards = [];
let score = 0;

function checkForMatch() {
  if(selectedCards[0].name === selectedCards[1].name){
    score++;
    status.textContent = 'Found a match!';
    scoreDiv.classList.remove('badScore');
    scoreDiv.classList.add('goodScore');
    selectedCards.forEach(({ card }) => setTimeout(() => card.classList.add('fade'), 300));
  } else {
    score--;
    status.textContent = 'Try again!';
    scoreDiv.classList.remove('goodScore');
    scoreDiv.classList.add('badScore');
    flipBack(selectedCards);
  }
  selectedCards = [];
  scoreDiv.textContent = score;
}

function flipBack(cards){
  cards.forEach(({ card }) => {
    card.classList.add('card');
    card.querySelector('img').setAttribute('src', './images/pokemonCard.png');
    card.querySelector('img').removeAttribute('class');
  });
}

function flipCard(){
  const card = this;
  const index = card.dataset.index;
  const image = card.querySelector('img');
  card.classList.remove('card');
  image.classList.add('myImage');
  image.setAttribute('src', cards[index].src);
  selectedCards.push({ name: card.dataset.name, card });
  if(selectedCards.length === 2){
    setTimeout(() => checkForMatch(), 300);
  }
}

function createBoard (){
  cards.sort(() => Math.random() - 0.5).forEach((card, idx) => {
    const img = document.createElement('img');
    const div = document.createElement('div');
    div.classList.add('card');
    img.setAttribute('src', './images/pokemonCard.png');
    div.dataset.name = card.name;
    div.dataset.index = idx;
    div.addEventListener('click', flipCard);
    div.appendChild(img);
    app.appendChild(div);
  });
}

createBoard();