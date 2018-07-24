# CAPSTONE PROJECT

### DEMO: https://codepen.io/GainorB/full/yqXNYx/

# OBJECTIVE

1.  Create HTML structure for game board
2.  Create CSS for game board
3.  Start building game logic
4.  Develop a basic understanding regarding the logic in our game

# DO NOW

Log into CodePen. If you remember your login information, GREAT! If not, give us a second to help you!

# HTML (5-10 MINS)

The structure of our webpage.

**REVIEW:**

1.  Does anyone remember the difference between giving our HTML elements classes vs. ids?

Lets spend the next 5-10 minutes making our HTML document more unique! Use your imagination! Do whatever you like, whatever you think makes sense. Make your game standout. **Add in any additional HTML elements!**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Wire+One" rel="stylesheet">
  <title>Memory Game</title>
</head>

<body>
  <div id="info">
    <h1>Memory Game</h1>
    <div id="scoreTime">
      <div id="score"></div>
      <div id="time"></div>
    </div>
    <div id="status"></div>
    <div id="desc">Matching games are games that require players to match similar elements.
      <br> As the name implies, participants need to find a match for a picture.</div>
  </div>
  <div id="app"></div>
  <div id="gameover">
    <h1 class="gameover">Gameover!</h1>
    <p class="tryAgain">You ended with a score of
      <span class="finalScore"></span>.
      <br>
      <button id="reset">New Game</button>
    </p>
  </div>
</body>

</html>
```

# CSS (5-15 MINUTES)

Here's my code below. Spend some time making my code, yours! **REMEMBER**, CSS gives us the power to transform plain HTML elements and make them look unique. I know there are CSS attributes below we haven't learned, but it doesn't hurt to change a value to see what happens! Explore for the next 15 minutes, make changes!

**Great Resource:** https://www.w3schools.com/css/default.asp

**Hints for making this CSS yours!:**

- Change Font colors
- Change Background colors
- Maybe add a background image to our gameboard? or our webpage?
- Change Font Sizes
- Change Border Colors
- Change Border Sizes
- Change Hover Effects (notice what happens when our mouse hovers over a box)
- Change Border Styles

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
}

#scoreTime {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 15px;
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
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px;
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
  width: 300px;
  height: 410px;
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

## THE DOM

1.  Document Object Model (DOM)
2.  The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
3.  Every element in a document—the document as a whole, the head, tables within the document, table headers, text within the table cells—is part of the document object model for that document, so they can all be accessed and manipulated using the DOM and a scripting language like JavaScript.

# CAPSTONE PROJECT DEVELOPMENT

FULL DISCLOSURE: There are pieces of code you won't understand. Truthfully, explaining everything at this point may make you more confused. So you will touch the important topics.

🤦🏾‍🤬😶🤓😢😎🙈💀

# STEP 1 (5 MINUTES)

1.  In the example below, we are selecting various HTML elements.
2.  The DOM exposes several methods "functions" that allow us to grab elements. For example: `getElementById` will get a HTML element by it's `id`. Likewise, `querySelector` allows us to select elements by `class` or `id`.

```javascript
// DOM ELEMENTS
const app = document.getElementById("app");
const status = document.getElementById("status");
const time = document.getElementById("time");
const scoreDiv = document.getElementById("score");
const gameoverDiv = document.getElementById("gameover");
const finalScore = document.querySelector(".finalScore");
const reset = document
  .getElementById("reset")
  .addEventListener("click", () => window.location.reload());
```

# STEP 2 (5 MINUTES)

```javascript
```

# STEP 3 (5 MINUTES)

```javascript
```

# STEP 4 (5 MINUTES)

```javascript
```

# STEP 5 (5 MINUTES)

```javascript
```

# STEP 6 (5 MINUTES)

```javascript
```

# STEP 7 (5 MINUTES)

```javascript
```
