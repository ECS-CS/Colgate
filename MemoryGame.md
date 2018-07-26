# CAPSTONE PROJECT

### DEMO: https://codepen.io/GainorB/full/yqXNYx/

# OBJECTIVE

1.  Create HTML structure for game board
2.  Create CSS for game board
3.  Start building game logic
4.  Develop a basic understanding regarding the logic in our game

# DO NOW

Log into CodePen. If you remember your login information, GREAT! If not, give us a second to help you!

# HTML

The structure of our webpage.

**REVIEW:**

1.  Does anyone remember the difference between giving our HTML elements classes vs. ids?

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Wire+One" rel="stylesheet">
  <title>Memory Game</title>
</head>

<body>
  <div id="info">
    <h1>Memory Game</h1>
    <button id="start">Start Game</button>
    <div id="gameover">
      <h1 class="gameover">Gameover!</h1>
      <p class="tryAgain">You ended with a score of
        <span class="finalScore"></span>.
        <br>
        <button id="reset">New Game</button>
      </p>
    </div>
    <div id="scoreTime">
      <div id="score"></div>
      <div id="time"></div>
    </div>
    <div id="status"></div>
    <div id="desc">Matching games are games that require players to match similar elements.
      <br> As the name implies, participants need to find a match for a picture.</div>
  </div>
  <div id="app"></div>
</body>

</html>
```

# CSS (15-30 MINUTES)

Here's my code below. Spend some time making my code, yours! **REMEMBER**, CSS gives us the power to transform plain HTML elements and make them look unique. I know there are CSS attributes below we haven't learned, but it doesn't hurt to change a value to see what happens! Explore for the next 20 minutes, make changes!

**Great Resources:**

1.  Discover new CSS attributes: https://www.w3schools.com/css/default.asp
2.  Not sure if your color exists? Use a HEX code instead: https://www.w3schools.com/colors/colors_picker.asp

**Suggestions for making this CSS yours!:**

- Change Font Colors
- Change Background Colors
- Change Button Colors
- Change Card Sizes
- Change the Gameover screen
- Maybe add a background image to our webpage?
- Change Font Sizes
- Change the Font Family
- Change Border Colors
- Change Border Sizes
- Change Border Styles
- Change Anything else! If you don't know how to change something, please ASK US! **We got you.**
- If you are uncertain about changing an attribute, ask us first!

```css
body {
  font-size: 40px;
  letter-spacing: 2px;
  font-style: italic;
  font-family: "Wire One", sans-serif;
}

h1 {
  font-family: "Pacifico", cursive;
  font-size: 75px;
  margin: 0;
  padding: 0;
}

/*
* GAMEOVER
*/

#gameover {
  display: none;
  text-align: center;
  border: 10px dashed #f44336;
  background-color: white;
  width: 50%;
  margin: 0 auto;
  transition: 0.4s;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#gameover:hover {
  cursor: crosshair;
  border: 10px dashed #008cba;
}

.gameover {
  color: #f44336;
  font-size: 120px;
}

.gameover:hover {
  color: #008cba;
}

.tryAgain {
  font-size: 60px;
}

.finalScore {
  font-weight: 700;
  margin: 0;
  padding: 0;
}

button {
  background-color: #f44336;
  border: none;
  border-radius: 8px;
  padding: 14px 40px;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  text-transform: uppercase;
  transition-duration: 0.4s;
}

button:hover {
  background-color: #008cba;
  color: white;
  cursor: pointer;
}

/*
* GAME DESCRIPTION
*/

#desc {
  width: 75%;
  margin: 20px auto;
}

#score,
#time {
  font-weight: 700;
  font-style: italic;
}

#score {
  font-size: 90px;
}

#time {
  font-size: 22px;
  font-weight: 300;
  padding: 20px;
}

#status {
  font-size: 30px;
  text-transform: uppercase;
  font-style: italic;
  margin-bottom: 20px;
}

#scoreTime {
  display: none;
  grid-template-columns: 1fr 1fr;
  margin: 15px;
  height: 80px;
}

#score {
  justify-self: end;
}

#time {
  justify-self: start;
  align-self: center;
  margin: 10px;
}

/*
* SCORE
*/

.badScore {
  color: firebrick;
}

.goodScore {
  color: green;
}

#app {
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 10px;
  align-content: center;
  justify-content: center;
}

#info {
  text-align: center;
}

.fade {
  animation-name: fadeOut;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

/*
* CARD
*/

.scene {
  width: 150px;
  height: 210px;
  perspective: 600px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card__face--back {
  transform: rotateY(180deg);
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

.card img:hover {
  cursor: crosshair;
}

/*
* ANIMATIONS
*/

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
```

# JS

# CAPSTONE PROJECT DEVELOPMENT

**FULL DISCLOSURE:** There are pieces of code you won't understand. Truthfully, explaining everything at this point may make you more confused. So you will touch the important topics. 🤦🏾‍ 🤬 😶 🤓 😢 😎 🙈 💀

**OBSERVE THE COMMENTS. WHENEVER YOU SEE A LINE WITH `//` PRECEDING, IS CONSIDERED A COMMENT. THESE LINES ARE SKIPPED WHEN OUR CODE COMPILES.**

**YOU WILL WRITE CODE WHEREVER YOU SEE `.........`**

**THESE STEPS NEED TO BE FOLLOWED IN ORDER. EVERYTHING WE PASTE INTO THE `JS` SECTION IN CODEPEN MUST BE PASTED IN ORDER UNDERNEATH EACH OTHER.**

# THE DOM

1.  **Document Object Model (DOM)**
2.  The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
3.  Every element in a document: the document as a whole, the head, tables within the document, table headers, text within the table cells—is part of the document object model for that document, so they can all be accessed and manipulated using the DOM and a scripting language like JavaScript.

**DEMO:** https://www.nytimes.com/

# STEP 1

1.  In the example below, we are selecting various HTML elements.
2.  The DOM exposes several methods that allow us to grab elements. For example: `getElementById` will get a HTML element by it's `id`. Likewise, `querySelector` allows us to select elements by `class` or `id`.

# 🚨 CHALLENGE 🚨

1.  Inside the `()` for `getElementById` we need to grab our HTML elements. The `variable` names should indicate which elements we want to grab. If you have to, checkout your HTML structure to find the correct `id`'s for our elements.
    - Remove the **...............** and insert the appropriate values.
2.  `Invoke` the `createBoard` function.

```javascript
// #1
const app = document.getElementById("...............");
const status = document.getElementById("...............");
const desc = document.getElementById("...............");
const time = document.getElementById("...............");
const scoreDiv = document.getElementById("...............");
const scoreTime = document.getElementById("...............");
const gameoverDiv = document.getElementById("...............");
const startBTN = document.getElementById("...............");
const reset = document.getElementById("...............");

// #2
startBTN.addEventListener("click", () => ..............);

// DO NOT TOUCH
const finalScore = document.querySelector(".finalScore");
reset.addEventListener("click", () => window.location.reload());
```

# STEP 2

1.  As we learned yesterday, we are creating an `array` that will store our cards.
2.  An object is another example of a `datatype`. Objects store collections of data, in `key/value pairs`. Most of the time, the data is related, but it doesn't have to be.
    - In our example, the objects, have a `key` of `match` and `src`, and our values are `' '` and the links to our images.

# 🚨 CHALLENGE 🚨

1.  Spend the next 5-15 minutes finding images on the internet. Remember you are copying the `image address` **NOT** the `link address`. Once you find your image, you will **PASTE** the link inside the `" "` for the `src` key.
2.  Regarding the `value` for the `match` key, use a one word description of your image. **REMEMBER** these values must be **UNIQUE**.
3.  **REMEMBER:** Elements inside of an array are separated by commas.
4.  Our objects will have this shape:

```javascript
  {
    match: "",
    src: ""
  }
```

```javascript
// CREATE AN ARRAY NAMED cards AND INSERT OBJECTS INTO OUR ARRAY
```

# STEP 3

1.  Above, we created an array to store our cards.
2.  In order to play our game, we need to duplicate our array. In other words, we are making an exact copy of the array above to form pairs of `objects`.

```javascript
const dupCards = cards.map(c => c).concat(cards);
```

# STEP 4: VARIABLES

# 🚨 CHALLENGE 🚨

1.  Declare an empty array named `selectedCards`.
2.  Declare a variable named `score` and assign `0` to it.
3.  Declare an array named `colors` and insert `Strings` with color names or HEX values.
    - The `colors` array manages the colors for the background of our page. Not a necessary component but it gives our game some flare.
      - Spend the next 5 minutes adding colors to this array. You can use hex values as well. Checkout: https://www.w3schools.com/colors/colors_picker.asp, to find the HEX values for other colors.
4.  Declare a variable named `timer` and set it equal to (a Number) how long you want your game to be.

```javascript
// #1
.........

// #2
.........

// #3
.........

// #4
.........
```

# STEP 5

1.  A helper function responsible for choosing a random color from the `colors` array we defined above.
2.  Below we created a random number and store it in a variable named `random`.

# 🚨 CHALLENGE 🚨

1.  Return the `arr` from our parameters and access a random index from that array.
    - How do we use this variable? We need to use this variable to access a random index in our array.

```javascript
function randomColor(arr) {
  const random = Math.floor(Math.random() * arr.length);

  // #1
  ..............
}
```

# STEP 6

1.  This function is responsible for shuffling the `cards` array we created above.

```javascript
/*
* Fisher-Yates Algorithm 
* Source: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
*/
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
```

# STEP 7

1.  This function controls the flow of our game, by managing the time remaining.
2.  Notice, I am using an `if` statement to control my game.
    - `if` time is `0` the game will end.
    - in the `else if` statement, I am using the `modulus` operator to change the background colors, by checking for values that return no remainder.
3.  When the game ends, I remove all the cards from the screen and remove other HTML elements as well.

# 🚨 CHALLENGE 🚨

1.  Decrement the `timer` variable you declared above by 1.
2.  User the `timer` variable you declared above to check if its equal to 0.
3.  Lastly, `invoke` the `randomColor` function and pass the `colors` array as an `argument`.

```javascript
function gameTimer() {
  window.myMatchingGameInterval = setInterval(() => {
    // #1
    .........

    time.textContent = `${timer} seconds left`;

    // #2
    if (..........) {
      status.textContent = "";
      clearInterval(window.myMatchingGameInterval);

      // DO NOT TOUCH
      [...document.body.querySelectorAll(".scene")].forEach(image => {
        image.removeEventListener("click", flipCard);
        image.classList.add("fade");
        setTimeout(() => image.remove(), 2000);
      });

      // DO NOT TOUCH
      scoreTime.remove();
      status.remove();
      scoreDiv.remove();

      // DO NOT TOUCH
      setTimeout(() => {
        gameoverDiv.style.display = "block";
        finalScore.textContent = score;
      }, 500);
      // DO NOT TOUCH
    } else if (timer % 10 === 0) {

      // #3
      document.body.style.background = ............;
    }
  }, 1000);
}
```

# STEP 8

1.  This function is the center piece of our application, this is where we match our cards.

# 🚨 CHALLENGE 🚨

1.  Notice we are using an `if` statement to check the indexes in our array for a match.
    - Inside the **()** we need to develop a condition that returns either a true or false.
      - HINT: We are going to use the `selectedCards` array to compare the first 2 indexes.
      - We are then using the `match` key to compare our values
        - **HINT:** `.card.match`
2.  Increment `score` variable by 1.
3.  Give our users some feedback! Here we will give our users affirming that they found a match!
4.  Decrement `score` variable by 1.
5.  Give our users some feedback! Here we will display a message telling our users the cards they chose were wrong.
6.  `Invoke` the `gameOver` function.
7.  Reset the `selectedCards` array by assigned an empty array to it.
    - **HINT:** `selectedCards = [];`

```javascript
function checkForMatch() {
  // #1
  if(...................................){

    // #2
    .........

    // #3
    status.textContent = '';

    // DON'T TOUCH BELOW
    updateClass('goodScore', 'badScore');
    selectedCards.forEach(card => {
      card.element.classList.add('match');
      setTimeout(() => card.element.classList.add('fade'), 300);
    });
  } else {
    // #4
    .........

    // #5
    status.textContent = '';

    // DON'T TOUCH BELOW
    updateClass('badScore', 'goodScore');
    flipBack(selectedCards);
  }

  // #6
  .........

  // #7
  .........

  // DON'T TOUCH BELOW
  scoreDiv.textContent = score;
}
```

# STEP 9

1.  This is a helper function, that updates the styling of our game, by adding and removing classes from our HTML elements.
2.  The element we are updating in this example is our `<div>` with an id of `score`.

```javascript
function updateClass(newClass, oldClass) {
  scoreDiv.classList.remove(oldClass);
  scoreDiv.classList.add(newClass);
}
```

# STEP 10

1.  A helper function responsible for flipping the cards back when a match is wrong.
2.  In this function we are looping through our cards array and flipping our cards back by removing the `is-flipped` class.

```javascript
function flipBack(cards) {
  cards.forEach(({ element }) =>
    setTimeout(
      () => element.querySelector(".card").classList.remove("is-flipped"),
      1000
    )
  );
}
```

# STEP 11

1.  Every time we click on a card we run this function.

# 🚨 CHALLENGE 🚨

1.  Inside our `if statement` we need to create a condition: that uses the `selectedCards` array. Inside the `()` check that the length of the array is equal to 2.
2.  At this point, we want to develop a condition that checks if our cards are `NOT` equal, because we only want this line to execute `setTimeout(() => checkForMatch(), 300);` when our cards don't match.
    - **HINT:** We will be using the `.element` key in our comparison.
3.  `Invoke` the `flipBack` function and pass in `selectedCards` as an `argument`.

```javascript
function flipCard() {

  // DON'T TOUCH BELOW
  const card = this;
  const index = card.dataset.index;
  card.querySelector(".card").classList.add("is-flipped");
  card
    .querySelector(".card__face--back")
    .querySelector("img")
    .setAttribute("src", dupCards[index].src);
  selectedCards.push({ card: dupCards[index], element: card });

  // #1
  if (...............) {

    // #2
    if (................) {
      // DON'T TOUCH BELOW
      setTimeout(() => checkForMatch(), 300);
    } else {

      // DON'T TOUCH BELOW
      status.textContent = "Can't choose the same card twice! Try again!";

      // #3
      .........

      // DON'T TOUCH BELOW
      selectedCards = [];
    }
  }
}
```

# STEP 12

1.  In `Step 8` this is the function we `invoked`.
2.  Notice we are using an `if statement` to determine when our game is over.

# 🚨 CHALLENGE 🚨

1.  Develop a condition that compares the length of our arrays. The arrays in question are `chosen` and `dupCards`.
    - **HINT:** What properties on arrays can we use to get the lengths. Use this in your comparison.
2.  Give our users some feedback! Here we will give our users affirming that the game is over!

```javascript
function gameOver(){
  const chosen = [...document.querySelectorAll('.match')];

  // #1
  if(..................){

    // #2
    status.textContent = '';

    // DON'T TOUCH BELOW
    time.textContent = '';
    clearInterval(window.myMatchingGameInterval);
    setTimeout(() => chosen.forEach(image => image.remove()), 2000);

    // DON'T TOUCH BELOW
    setTimeout(() => {
      gameoverDiv.style.display = 'block';
      finalScore.textContent = score;
   }, 3000);
  }
}
```

# STEP 13

1.  This function creates our game board by adding the elements from our `cards` array to the DOM.
2.  We are creating HTML elements using Javascript vs. manually creating them in our HTML.

# 🚨 CHALLENGE 🚨

1.  Create the an `img` tag.
2.  Create 4 `div` tags.
3.  The value between the `" "` will be the image on the back of your card.

```javascript
function createBoard() {
  startBTN.style.display = "none";
  desc.style.display = "none";
  scoreTime.style.display = "grid";

  // START THE GAME TIMER AFTER 4 SECONDS
  setTimeout(() => gameTimer(), 4000);

  return shuffle(dupCards).forEach((card, idx) => {
    // AN EXAMPLE OF HOW TO USE createElement TO CREATE AN 'img'
    const imgFront = document.createElement("img");

    // #1
    const imgBack = document.createElement();

    // #2
    const scene = document.createElement();
    const cardDiv = document.createElement();
    const cardFace = document.createElement();
    const cardBack = document.createElement();

    // DON'T TOUCH BELOW
    imgFront.setAttribute("src", dupCards[idx].src);
    cardFace.appendChild(imgFront);
    cardBack.appendChild(imgBack);

    // DON'T TOUCH BELOW
    scene.classList.add("scene");
    cardDiv.classList.add("card");
    cardFace.classList.add("card__face", "card__face--front");
    cardBack.classList.add("card__face", "card__face--back");

    // DON'T TOUCH BELOW
    scene.dataset.match = card.match;
    scene.dataset.index = idx;

    // DON'T TOUCH BELOW
    setTimeout(() => {
      imgFront.setAttribute(
        "src",
        // #3
        ""
      );
      scene.addEventListener("click", flipCard);
    }, 4000);

    // DON'T TOUCH BELOW
    cardDiv.appendChild(cardFace);
    cardDiv.appendChild(cardBack);
    scene.appendChild(cardDiv);
    app.appendChild(scene);
  });
}
```
