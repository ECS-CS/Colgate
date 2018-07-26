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
  margin: 20px auto;
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

I PROVIDED COMMENTS TO GUIDE YOU THROUGH THE LESSON. MAKE SURE YOU READ ALL THE COMMENTS TO UNDERSTAND WHAT YOU NEED TO DO.

**OBSERVE THE COMMENTS. WHENEVER YOU SEE A LINE WITH `//` PRECEDING, IS CONSIDERED A COMMENT. THESE LINES ARE SKIPPED WHEN OUR CODE COMPILES.**

**THESE STEPS NEED TO BE FOLLOWED IN ORDER. EVERYTHING WE PASTE INTO THE `JS` SECTION IN CODEPEN MUST BE PASTED IN ORDER UNDERNEATH EACH OTHER.**

**UNDERNEATH THE COMMENTS YOU INSERT YOUR CODE. WE WILL GO OVER IT AS A CLASS.**

**YOU WILL WRITE CODE WHEREVER YOU SEE `.........`**

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

```javascript
// INSIDE THE PARENTHESIS PUT THE ID OF THE ELEMENT WE ARE TARGETTING
const app = document.getElementById("...............");
const status = document.getElementById("...............");
const desc = document.getElementById("...............");
const time = document.getElementById("...............");
const scoreDiv = document.getElementById("...............");
const scoreTime = document.getElementById("...............");
const gameoverDiv = document.getElementById("...............");
const startBTN = document.getElementById("...............");
const reset = document.getElementById("...............");

// INVOKE THE createBoard() FUNCTION
startBTN.addEventListener("click", () => ..............);

// DO NOT TOUCH
const finalScore = document.querySelector(".finalScore");
reset.addEventListener("click", () => window.location.reload());
```

# STEP 2

1.  As we learned yesterday, we are creating an `array` that will store our cards.
2.  An object is another example of a `datatype`. Objects store collections of data, in `key/value pairs`. Most of the time, the data is related, but it doesn't have to be.
    - In our example, the objects, have a `key` of `match` and `src`, and our values are `''` and the links to our images.

# 🚨 CHALLENGE 🚨

1.  Spend the next 5-15 minutes finding images on the internet. Remember you are copying the `image address` **NOT** the `link address`. Once you find your image, you will **PASTE** the link inside the `""` for the `src` key.
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

1.  We are defining an array named `selectedCards` which will store the cards our user clicks on.
2.  We also need a variable to store our score, so we define a variable named `score` and set it equal to 0, because our score starts off at zero.
3.  The `colors` array manages the colors for the background of our page. Not a necessary component but it gives our game some flare.
    - Spend the next 5 minutes adding colors to this array. You can use hex values as well. Checkout: https://www.w3schools.com/colors/colors_picker.asp, to find the HEX values for other colors.
4.  Lastly, the `timer` variable will store how long our game is.

```javascript
// DECLARE AN EMPTY ARRAY NAMED selectedCards
.........

// DECLARE A VARIABLE NAMED score
// SET IT EQUAL TO 0
.........

// DECLARE AN ARRAY NAMED colors
// INSERT COLORS AS STRINGS INTO THIS ARRAY
.........

// DECLARE A VARIABLE NAMED timer
// SET IT EQUAL TO HOW LONG YOU WANT YOUR GAME TO BE (JUST A NUMBER)
.........
```

# STEP 5

1.  A helper function responsible for choosing a random color from the `colors` array we defined above.

# 🚨 CHALLENGE 🚨

1.  Below we created a random number and store it in a variable named `random`.
2.  How do we use this variable? We need to use this variable to access a random index in our array.

```javascript
function randomColor(arr) {
  const random = Math.floor(Math.random() * arr.length);

  // ADJUST THIS RETURN STATEMENT
  // RETURN THE PASSED IN ARRAY WITH THE RANDOM INDEX
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

```javascript
function gameTimer() {
  window.myMatchingGameInterval = setInterval(() => {
    // DECREMENT timer by 1
    .........

    time.textContent = `${timer} seconds left`;

    // USE THE timer VARIABLE AND CHECK IF ITS EQUAL TO 0
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

      setTimeout(() => {
        gameoverDiv.style.display = "block";
        finalScore.textContent = score;
      }, 500);
    } else if (timer % 10 === 0) {
      document.body.style.background = randomColor(colors);
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

```javascript
function checkForMatch() {
  // IF THE CARDS MATCH
  if(...................................){
    // INCREMENT SCORE VARIABLE BY 1
    .........

    // ON THIS LINE WE ARE UPDATING THE STATUS OF OUR PROGRAM
    // WHATEVER WE STORE INSIDE OUR QUOTES WILL TELL OUR USER HOW HE/SHE IS DOING
    status.textContent = '';

    // DON'T TOUCH BELOW
    updateClass('goodScore', 'badScore');
    selectedCards.forEach(card => {
      card.element.classList.add('match');
      setTimeout(() => card.element.classList.add('fade'), 300);
    });
  } else {
    // DECREMENT SCORE VARIABLE
    .........

    // ON THIS LINE WE ARE UPDATING THE STATUS OF OUR PROGRAM
    // WHATEVER WE STORE INSIDE OUR QUOTES WILL TELL OUR USER HOW HE/SHE IS DOING
    status.textContent = '';

    // DON'T TOUCH BELOW
    updateClass('badScore', 'goodScore');
    flipBack(selectedCards);
  }

  // INVOKE OUR gameOver FUNCTION
  .........


  // RESET OUR selectedCards ARRAY
  // HOW DO WE ERASE THE VALUES?
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

1.  Inside our `if statement` we need to create a condition: create a condition that uses the `selectedCards` array. Inside the `()` check that the length of the array is equal to 2.

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

  // CHECK THAT THE LENGTH OF THE ARRAY IS EQUAL TO 2
  if (...............) {

    // DON'T TOUCH BELOW
    if (selectedCards[0].element !== selectedCards[1].element) {
      setTimeout(() => checkForMatch(), 300);
    } else {

      // DON'T TOUCH BELOW
      status.textContent = "Can't choose the same card twice! Try again!";

      // INVOKE OUR flipBack FUNCTION AND ADD selectedCards AS AN ARGUMENT
      .........


      // DON'T TOUCH BELOW
      selectedCards = [];
    }
  }
}
```

# STEP 12

1.  In `Step 8` this is the function we invoked.
2.  Notice we are using an `if statement` to determine when our game is over.

# 🚨 CHALLENGE 🚨

1.  Develop a condition that compares the length of our arrays. The arrays in question are `chosen` and `dupCards`.
    - **HINT:** What properties on array can we use to get the lengths. Use this in your comparison.

```javascript
function gameOver(){
  const chosen = [...document.querySelectorAll('.match')];

  // COMPARE THE LENGTHS OF THE chosen AND dupCards ARRAY
  if(..................){

    // ON THIS LINE WE ARE UPDATING THE STATUS OF OUR PROGRAM
    // WHATEVER WE STORE INSIDE OUR QUOTES WILL TELL OUR USER HOW HE/SHE IS DOING
    status.textContent = '';

    // DON'T TOUCH BELOW
    time.textContent = '';
    clearInterval(window.myMatchingGameInterval);
    setTimeout(() => chosen.forEach(image => image.remove()), 2000);
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

1.  Create the remaining 5 elements. Read the comments to assist you.

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

    // USING createElement, create an 'img'
    const imgBack = document.createElement();

    // USING createElement, create a 'div' for each variable.
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
        // THIS VALUE IS THE BACK OF YOUR CARD
        // INSERT YOUR OWN IMAGE BETWEEN THE QUOTES
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
