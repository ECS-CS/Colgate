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
    z-index: 5;
    position: relative;

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
    position: relative;
    z-index: 5;
    /* animation: fadeInRight 2s forwards; */
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
  .fadeOutLeft {
    animation: fadeOutLeft 2s forwards;
  }

  .fadeOutRight {
    animation: fadeOutRight 2s forwards;
  }
  .fadeOutZip {
    animation: fadeOutZip 2s forwards;
  }
  .fadeOutUp {
    animation: fadeOutUp 2s forwards;
  }
  .fadeOutDown {
    animation: fadeOutDown 2s forwards;
  }
  .fadeOutSpin {
    animation: fadeOutSpin 2s forwards;
  }
  .fadeInSpin {
    animation: fadeInSpin 2s forwards;
  }
  .fadeInZip {
    animation: fadeInZip 2s forwards;
  }
  .fadeInUp {
    animation: fadeInUp 2s forwards;
  }
  .fadeInDown {
    animation: fadeInDown 2s forwards;
  }
  .fadeInLeft {
    animation: fadeInLeft 2s forwards;
  }
  .fadeInRight {
    animation: fadeInRight 2s forwards;
  }






  @keyframes fadeOutLeft {
    from {
        opacity: 1;
    }
    to {
        transform: translateX(-100%);
        opacity: 0;
        background-color: white;
    }
  }
  @keyframes fadeOutRight {
    from {
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
        background-color: white;
    }
  }
  @keyframes fadeOutZip {
    from {
        opacity: 1;
        left: 0%;
        width: 100%;
    }
    to {
        width: 0%;
        left: 50%;
        opacity: 0;
        background-color: white;
    }
  }
  @keyframes fadeOutUp {
    from {
        opacity: 1;
        z-index: -1;
    }
    to {
        z-index: -1;
        transform: translateY(-100%);
        opacity: 0;
        background-color: white;
    }
  }
  @keyframes fadeOutDown {
    from {
        opacity: 1;
        top: 0%;
        z-index: 1;
    }
    to {
        z-index: 1;
        transform: translateY(100%);
        opacity: 0;
        background-color: white;
    }
  }
  @keyframes fadeOutSpin{
    from {
        opacity: 1;
        width: 100%;
        z-index: 1;
        left: 0%;
    }
    to {
        z-index: 1;
        transform: rotateZ(360deg) scale(0);
        left: 50%;
        opacity: 0;
        width: 0%;
        background-color: white;
    }
  }
  @keyframes fadeInSpin{
    from {
        opacity: 0;
        /* width: 0%; */
        z-index: 1;
        transform: rotateZ(0deg) scale(0);

    }
    to {
        z-index: 1;
        transform: rotateZ(360deg) scale(1);
        opacity: 1;
        /* width: 97%; */
    }
  }
  @keyframes fadeInZip{
    from {
        opacity: 0;
        /* width: 0%; */
        z-index: 1;
        transform:  scale(0);

    }
    to {
        z-index: 1;
        transform:  scale(1);
        opacity: 1;
        /* width: 97%; */
    }
  }
  @keyframes fadeInUp{
    from {
        opacity: 0;
        /* width: 0%; */
        z-index: 1;
        transform:  translateY(100%);

    }
    to {
        z-index: 1;
        transform:   translateY(0%);
        opacity: 1;
        /* width: 97%; */
    }
  }
  @keyframes fadeInDown{
    from {
        opacity: 0;
        /* width: 0%; */
        z-index: 1;
        transform:  translateY(-100%);

    }
    to {
        z-index: 1;
        transform:   translateY(0%);
        opacity: 1;
        /* width: 97%; */
    }
  }
  @keyframes fadeInLeft{
    from {
        opacity: 0;
        /* width: 0%; */
        z-index: 1;
        transform:  translateX(-100%);

    }
    to {
        z-index: 1;
        transform:   translateX(0%);
        opacity: 1;
        /* width: 97%; */
    }
  }
  @keyframes fadeInRight{
    from {
        opacity: 0;
        /* width: 0%; */
        z-index: 1;
        transform:  translateX(100%);

    }
    to {
        z-index: 1;
        transform:   translateX(0%);
        opacity: 1;
        /* width: 97%; */
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
3. Copy if statement and paste inside of our `start` function above the variable `submitButton`

```javascript
/*
* STEP 1
*/

// #1
//write a function

// #2
submitButton.addEventListener('click', ............);

//#3
 if (checkStorage()) {
   taskArr = JSON.parse(localStorage.getItem('masterList'));
   addExistingTask(taskArr);
 }

```
# STEP 2

1.  Yesterday we learned about conditional statements. Can anybody tell me those three types?

# 🚨 CHALLENGE 🚨

1.  Spend the next 10-15min doing the task below.
2.  CREATE AN FUNCTION CALLED inputHandler. 
3.  INSIDE THAT FUNCTION DECLARE A VARIABLE NAMED taskInput AND USE document.getElementById TO GET THE TASKELEMENT.
4.  NOW LET'S USE AN IF STATEMENT TO CHECK IF OUR TASK INPUT ACTUALLY HAS TEXT.
5.  INSIDE YOUR IF STATEMENT INVOKE A FUNCTION NAMED createNewTask and in the parameters add the variable taskInput.


```javascript
/*
* STEP 2


if(................){

}else{

}
```



# STEP 3

1.  We just made our button clickable and now let's go ahead and copy and paste the code below in codepen. Please paste below          after the inputHandler functions

```javascript
/*
* STEP 3
*/

//#1
function checkStorage() {
  if (typeof Storage !== 'undefined') {
    if (localStorage.getItem('masterList')) {
      return true;
    }
  }
  return false;
}

function randomAnimation(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }

function updateStorage(arr) {
  return localStorage.setItem('masterList', JSON.stringify(arr));
}
function saveToStorage(obj) {
  taskArr.push(obj);
  localStorage.setItem('masterList', JSON.stringify(taskArr));
}
function getDate() {
  const dateObj = new Date();
  return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
}
```




# STEP 4

1.  Now What Good is a TODO List If we can't add any items to it. We will use some of the skills we learned this past week.

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. CREATE AN FUNCTION CALLED `createNewTask` with the parameter `task`.
  2. CREATE A VARIABLE NAMED `currentTask` and store the  value `task.value.trim()`
  3. CREATE A VARIABLE NAMED `currentDate` and Invoke the function `getDate()`.
  3. Invoke function `addTaskToDOM` with the parameters `taskOBJ.task , taskOBJ.date`
  5. Invoke function `saveToStorage` with the parameter `taskOBJ`
  6. Store and empty string inside task.value

```javascript
/*
* STEP 4
*/


//1.
function createNewTask (...............){
  // THE TASK THE USER SUBMITTED
  //2.
  // GET DATE
  //3. 
  // TASK
  const taskOBJ = {
    task: currentTask,
    date: currentDate,
  };
  // ADD TASK TO DOM
  //4. 
  // SAVE TASK TO LOCALSTORAGE
  //5. 
  // CLEAR INPUT FIELD
  //6. 

}

```

# STEP 5

1.  Now were at the point where we are going to add our created task to DOM/Webpage. We will introduce a new       method that will allow us to create `html`elements in javascript. 
    Take 3-5 minutes and google `how to create html elements in javascript`

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. LooK in your html and let's find the ID for the listContainer variable.
     * For the following variables. LET'S USE `document.createElement()` to create `SPAN` tags
      * `checkBox`
      * `spanTask` 
      * `spanDate`
     * For the following variables. LET'S USE `document.createElement()` to create html tags
       * `listItems`
          * `hint` what html tag should we create? think about when we create a list what tag do we use. 🤔
       * `divContainer`
          * `hint` the tag we need to create is in the name of the variable
      * For the following variable Invoke the function `randomAnimation` with the parameter `fadeInAnimations`
          * `tempAnimation`
  2. Let's looks in `css` and find the `class` and let's enter them (..........) for: 
      * `checkBox`
      * `listItems`
      * `spanTask`
      * `divContainer`
      * `spanDate`
  3. Let's store the values `currentTask` and `currentDate`in the variables below:
      * spanTask.textContent 
      * spanDate.textContent
  4. Let's Add `spanTask` and `spanDate` to the `divContainer`.
    * `hint`let's google `appendChild javascript`
  5. Let's Add `divContainer` and `checkBox` to the `listItems`.
  6. Let's Add `listItems` to the `listContainer`.
  7. Invoke a function named `checkBoxButton` with the arguments `checkBox`, `currentTask`, `listItems`, `tempAnimation`.

```javascript
/*
* STEP 5
*/

function addTaskToDOM(currentTask, currentDate) {
  // DOM
  //1.
  const listContainer = document.getElementById(............);
  const checkBox = document.createElement(..........);
  const spanTask = document.createElement(..........);
  const spanDate = document.createElement(.........);
  const listItems = document.createElement(........);
  const divContainer = document.createElement(........);
  let tempAnimation = 
  // META
  
  //2.
  checkBox.classList.add(.........);
  listItems.classList.add(........);
  listItems.classList.add(........);
  divContainer.classList.add(........);
  spanDate.classList.add(........); 
  spanTask.classList.add(........);



  //DON'T TOUCH
  spanTask.setAttribute('contenteditable', true);
  spanTask.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      const updatedTask = e.target.textContent;
      editTask(updatedTask, currentTask);
    }
  });
  
  //3
  spanTask.textContent 
  spanDate.textContent

  // APPEND TO DOM
  //4
  divContainer.appendChild(...........);
  divContainer.appendChild(.........);

  //5
  listItems.appendChild(...........);
  listItems.appendChild(...........);

  //6
  listContainer.appendChild(...........);

  //7
  checkBoxButton(.......................);
}

}

```

# STEP 6

1. Now that we have our task on our list, DOES OUR CHECK BOX WORK? let's click the box, did the task delete?
   If it didn't delete, we're going to make the check box clickable.

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. Let's declare a function named `checkBoxButton` with the parameters `checkBox, task, item, oldAnimation` above the `askTaskToDom` function.
  2. Inside your `checkBoxButton` function let's add a click event to `checkBox`. After the `click,` copy and paste `e => deleteTask(e, task, item)`.


```javascript

// 1. 
    // 2. 


```


# STEP 7

1. Now let's give functionality to our `deleteTask` function so we can remove items from the list.

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. Copy the function below and paste it above the `checkBoxButton` function.
  2. Let's take a look in our css and let's look for the right `class` to add in the `(.............)`.
    * `e.target.classList` We need to add a class to display a `check`.
    * `listItem.classList` We need to add a class to display a `line-through` OUR TEXT.
    * `listItem.classList` let's invoke the function `randomAnimation` with the parameter `fadeOutAnimations`
  3. STORE THE `newArr` value in the `taskArr` VARIABLE.
  4. Invoke the `updateStorage` function and add `newArr` ss an argument for that function. 


```javascript
//1
function deleteTask(e, deletedTask, listItem,prevAnimation) {
  //DON'T TOUCH
  listItem.classList.remove(prevAnimation);  
  //2  
  e.target.classList.add(..........);
  listItem.classList.add(..........);
  listItem.classList.add(...........);
  //Don't Touch
  const newArr = taskArr.filter(t => t.task !== deletedTask);
  //3
  
  //4

  //Don't Touch
  setTimeout(() => {
    listItem.style.display = 'none';
  }, 2000);
}
```

# STEP 8

1. Now what happens if you make a mistake and need to make an edit to your task? let's add a function that will allow us to edit our task.

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. Copy the function below and paste it below the `deleteTask` function.
  2. STORE THE `newArr` VARIABLE IN THE `taskArr` VARIABLE. 
  3. Invoke the `updateStorage` function and add `newArr` as an argument for that function.



```javascript
//1
function editTask(updatedTask, oldTask) {
  const newArr = taskArr.map(e => {
    if (e.task === oldTask) {
      return {
        task: updatedTask,
        date: getDate(),
      };
    }
    return e;
  });
  //2

  //3

  setTimeout(() => window.location.reload(), 300);
}
```

# STEP 9

1. Now let's add a new task did it work? Good job you have a functioning todo list 👍. Now do me a favor let's save and reload our page. did your tasks load back to your list. if it didn't, let's make it load our saved tasks.

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. CREATE A FUNCTION NAMED `addExistingTask` with the parameter `data`.
  2. INSIDE THIS FUNCTION LET'S COPY AND PASTE THIS LINE`  data.forEach(element => ........));`
  3. Where THE `.........` LET'S INVOKE THE FUNCTION `addExistingTask` with the parameter `element.task, element.date`



```javascript

//1.

    //2 & 3.

```

#STEP 10

1. AT THIS POINT YOU HAVE FINISHED AND NOW HAVE A WORKING TODO LIST. NOW YOU SHOULD HAVE SOME NICE ANIMATION WHEN YOU ADD A TASK AND DELETE A TASK.

2. LET'S TAKE A LOOK IN OUR CSS THERE ARE MORE ANIMATIONS THAT WE CAN CHOOSE FROM FOR WHEN WE ADD A TASK AND WHEN WE DELETE.

    1. ADDING A TASK - IF YOU LOOK AT THE LAST STYLE IN OUR `listItems` CLASS IN `CSS` YOU WILL SEE `animation` YOU CAN EDIT THE NAME(`fadeInRight`) OF THE ANIMATION AND THE DURATION (`2s`) OF THE ANIMATION.

    2. DELETE A TASK - IF YOU LOOK AT  OUR `fade` CLASS YOU WILL SEE `animation` YOU CAN EDIT THE NAME(`fadeOutSpin`) OF THE ANIMATION AND THE DURATION (`2s`) OF THE ANIMATION.
    ```css
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
        position: relative;
        z-index: 5;
        animation: fadeInRight 2s forwards;
    }


      .fade {
         animation: fadeOutSpin 2s forwards;
     }


    ```
    3. HERE IS A LIST OF ANIMATIONS TO CHOOSE FROM
        * fadeOutLeft,
        * fadeOutRight,
        * fadeOutZip,
        * fadeOutUp,
        * fadeOutDown,
        * fadeOutSpin,
        * fadeInSpin,
        * fadeInZip,
        * fadeInUp,
        * fadeInDown,
        * fadeInLeft,
        * fadeInRight,


#CONGRATULATIONS YOU'VE COMPLETED TO DO LIST


1. TEST OUT YOUR CODE AND TELL ME WHAT COOL THINGS YOU SEE.
2. TRY DIFFERENT ANIMATIONS.
3. KEEP ON CODING.

