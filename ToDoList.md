# CAPSTONE PROJECT

### DEMO: https://codepen.io/jchap123/pen/mjMawo

# OBJECTIVE

1.  Create HTML structure for To Do List
2.  Create and Edit CSS for To Do List
3.  Start building To Do List logic
4.  Develop a basic understanding regarding the logic in our To Do List

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
    <title>To Do List</title>
    <link href="https://fonts.googleapis.com/css?family=Merienda" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <div class="container">

        <div class="inputSection">
            <h1>My To Do List</h1>
            <h2>Mr. Chapman</h2>
            <div id="inputTask">
                <input id="task" type="text">
                <button id="submit">Add</button>
            </div>
        </div>

        <div class="list">
            <ul id="listContainer">
            </ul>
        </div>

    </div>
    <script src="main.js"></script>
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
    background-color: cornflowerblue;  
  }
  h1{
    font-family: 'Pacifico', cursive;
  }
  h2{
    font-family: 'Shadows Into' , cursive;
  }
  .taskText, .taskDate {
    display: block;
  }
  .container {
    width: 50%;
    margin: 0 auto;
  }
  .inputSection {
    border: solid 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: blueviolet;
    justify-content: space-around;
  }
  #inputTask {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  #task {
    flex: 10;
    padding: 10px;
    font-size: 16px;
  }
  #submit {
    flex: 2;
    padding: 10px;
    font-size: 16px;
    background-color: aqua;
  }
  #submit:hover {
    background-color: coral;
  }
  /* This section controls the style for  */
  .listSection {
    width: 100%;
    overflow: auto;
  }
  #listContainer {
    padding: 0;
    margin: 0;
    /* flex:; */
  }
  .listItems {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgba(2, 199, 170, .5);
    list-style: none;
    padding: 10px;
    opacity: 1;
    margin: 0;
    overflow: auto;
    font-family: 'Merienda', cursive;
  }
  .listItems:hover {
    background-color: lightgrey;
  }
  .checkbox {
    width: 25px;
    height: 25px;
    border: solid 2px black;
    justify-self: end;
    margin: 10px;
  }
  .checkbox:hover {
    background-color: crimson;
  }
  .checkAppear {
    background-image: url('download.png');
    background-size: cover;
  }
  .strike {
    text-decoration: line-through;
  }
  .fadeL {
    animation: fadeZip 2s forwards;
  }
  @keyframes fadeLeft {
    from {
        opacity: 1;
        left: 0%;
    }
    to {
        left: 100%;
        opacity: 0;
        background-color: white;
    }
  }
  
  @keyframes fadeZip {
    from {
        opacity: 1;
        left: 0%;
        width: 100%;
    }
    to {
        width: 25%;
        left: 50%;
        opacity: 0;
        background-color: white;
    }
  }

  @keyframes fadeUp {
    from {
        opacity: 1;
        top: 0%;
    }
    to {
        top: -100%;
        opacity: 0;
        background-color: white;
    }
  }

  @keyframes fadeDown {
    from {
        opacity: 1;
        top: 0%;
    }
    to {
        top: 100%;
        opacity: 0;
        background-color: white;
    }
  }
```

# JS

# CAPSTONE PROJECT DEVELOPMENT

**FULL DISCLOSURE:** 

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

1.  Declare a `function` and call it start `start`. Inside that function let's declare a `variable` name `submitButton` and let's fill in the `()` for the document.getElementById().
2.  `Invoke` the `inputHandler` function.

```javascript
/*
* STEP 1
*/

// #1
//write a function

// #2
submitButton.addEventListener('click', ............);

```
# STEP 2

1.  Yesterday we learned about conditional statements. Can anybody tell me those three types?

# 🚨 CHALLENGE 🚨

1.  Spend the next 5-10min doing the task below.
2.  CREATE AN FUNCTION CALLED inputHandler. 
3.  INSIDE THAT FUNCTION DECLARE A VARIABLE NAMED taskInput AND USE document.getElementById TO GET THE TASK    ELEMENT.
4.   NOW LET'S USE AN IF STATEMENT TO CHECK IF OUR TASK INPUT ACTUALLY HAS TEXT.
5.   INSIDE YOUR IF STATEMENT INVOKE A FUNCTION NAMED createNewTask and in the parameters add the variable taskInput.


```javascript
/*
* STEP 2
*/

// CREATE AN FUNCTION CALLED inputHandler 
// INSIDE THAT FUNCTION DECLARE A VARIABLE NAMED taskInput AND USE document.getElementById TO GET THE TASK ELEMENT
// NOW LET'S USE AN IF STATEMENT TO CHECK IF OUR TASK INPUT ACTUALLY HAS TEXT
// INSIDE YOUR IF STATEMENT INVOKE A FUNCTION NAMED createNewTask and in the parameters add the variable taskInput

if(................){

}else{

}
```

# STEP 3

1.  Now What Good is a TODO List If we can't add any items to it. We will use some of the skils we learned this past week and we will have to do a little research. let's google `how to create an element in HTML`. 

# 🚨 CHALLENGE 🚨

1.  Spend the next 15-20min doing the task below.
2.  CREATE AN FUNCTION CALLED createNewTask with the arguement `task`.
3.  CREATE A VARIABLE NAMED `listContainer` and use `document.getElementById`
4.  CREATE A VARIABLE NAMED `listItem` and store a `li` tag.
5.  CREATE A VARIABLE NAMED `checkBox` and store a `span` tag.
6.  Add The Class checkbox to the `to the Variable checkbox`.
7.  Add The Class listItem to the `to the Variable listItem`.



```javascript
/*
* STEP 3
*/

//  Spend the next 15-20min doing the task below.
//  CREATE AN FUNCTION CALLED createNewTask with the arguement `task`.
//  CREATE A VARIABLE NAMED listContainer and use document.getElementById
//  CREATE A VARIABLE NAMED listItem and store a li tag.
//  CREATE A VARIABLE NAMED checkBox and store a span tag.
//  Add The Class checkbox to the `to the Variable checkbox`.
//  Add The Class listItem to the `to the Variable listItem`.


function createNewTask (...............){
    //Dont Touch
    let dateObj = new Date()
    let currentDate = `${dateObj.getMonth()+1}/${dateObj.getDate()}/${dateObj.getFullYear()}`
    //


    let listContainer = document.getElementById(........);
    let listItem 
    let checkBox 

    //Dont Touch    
    let currentTask = task.value.trim()
    //

    checkBox.classList.add(..........);
    listItems.classList.add(...........);

    paragraph.innerHTML = `${currentTask} <br> ${currentDate}`
    listItems.append(paragraph);
    listItems.append(checkBox);
    listContainer.append(listItems);
    //checkBoxButton(checkBox,listItems);
    //task.value="";
}

```



