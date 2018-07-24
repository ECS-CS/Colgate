// DOM Elements
const app = document.getElementById('app');
const status = document.getElementById('status');
const scoreDiv = document.getElementById('score');

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

let selectedCards = [];
let score = 0;

function checkForMatch() {
  if(selectedCards[0].card.match === selectedCards[1].card.match){
    score++;
    status.textContent = 'Found a match!';
    updateClass('goodScore', 'badScore');
    selectedCards.forEach(card => setTimeout(() => card.element.classList.add('fade'), 300));
  } else {
    score--;
    status.textContent = 'Try again!';
    updateClass('badScore', 'goodScore');
    flipBack(selectedCards);
  }
  selectedCards = [];
  scoreDiv.textContent = score;
}

function updateClass(newClass, oldClass){
  scoreDiv.classList.remove(oldClass);
  scoreDiv.classList.add(newClass);
}

function flipBack(cards){
  cards.forEach(({ element }) => {
    element.classList.add('card');
    element.querySelector('img').setAttribute('src', './images/pokemonCard.png');
    element.querySelector('img').removeAttribute('class');
  });
}

function flipCard(){
  const card = this;
  const index = card.dataset.index;
  const image = card.querySelector('img');
  card.classList.remove('card');
  image.classList.add('myImage');
  image.setAttribute('src', cards[index].src);
  selectedCards.push({ card: cards[index], element: card });
  if(selectedCards.length === 2){
    setTimeout(() => checkForMatch(), 300);
  }
}

function createBoard (){
  const dupCards = cards.map(c => c).concat(cards);
  dupCards.sort(() => Math.random() - 0.5).forEach((card, idx) => {
    console.log(card);
    const img = document.createElement('img');
    const div = document.createElement('div');
    div.classList.add('card');
    img.setAttribute('src', './images/pokemonCard.png');
    div.dataset.match = card.match;
    div.dataset.index = idx;
    div.addEventListener('click', flipCard);
    div.appendChild(img);
    app.appendChild(div);
  });
}

createBoard();