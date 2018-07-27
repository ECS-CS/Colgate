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

//copy and paste and add to function
//  if (checkStorage()) {
//    taskArr = JSON.parse(localStorage.getItem('masterList'));
//    addExisitingTask(taskArr);
//  }

// function checkStorage() {
//   if (typeof Storage !== 'undefined') {
//     if (localStorage.getItem('masterList')) {
//       return true;
//     }
//   }
//   return false;
// }

```
# STEP 2

1.  Yesterday we learned about conditional statements. Can anybody tell me those three types?

# 🚨 CHALLENGE 🚨

1.  Spend the next 10-15min doing the task below.
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

1.  We just made our button clickable and now let's go ahead and conpy and paste the code below in codepen. Please paste below after the inputHandler functions

```javascript
function checkStorage() {
  if (typeof Storage !== 'undefined') {
    if (localStorage.getItem('masterList')) {
      return true;
    }
  }
  return false;
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

1.  Now What Good is a TODO List If we can't add any items to it. We will use some of the skils we learned this past week.

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. CREATE AN FUNCTION CALLED createNewTask with the parameter `task`.'
  2. CREATE A VARIABLE NAMED currentTask and store the phrase `task.value.trim()`
  3. CREATE A VARIABLE NAMED currentDate and store 
  4. CREATE A VARIABLE NAMED taskOBJ and store an object
  5. Invoke function addTaskToDOM with the parameters taskOBJ.task adndtaskOBJ.date
  6. Invoke function saveToStorage with the parameter taskOBJ
  7. Store and empty string inside task.value

```javascript
/*
* STEP 3
*/

//  Spend the next 10-15min doing the task below.
//  1. CREATE AN FUNCTION CALLED createNewTask with the parameter `task`.'
//  2. CREATE A VARIABLE NAMED currentTask and store the phrase `task.value.trim()`
//  3. CREATE A VARIABLE NAMED currentDate and store the invoked getDate function
//  4. CREATE A VARIABLE NAMED taskOBJ and store an object
//  5. Invoke function addTaskToDOM with the parameters taskOBJ.task adndtaskOBJ.date
//  6. Invoke function saveToStorage with the parameter taskOBJ
//  7. Store and empty string inside task.value

//1.
function createNewTask (...............){
  // THE TASK THE USER SUBMITTED
  //2.
  // GET DATE
  //3. 
  // TASK
  //4. 
  // ADD TASK TO DOM
  //5. 
  // SAVE TASK TO LOCALSTORAGE
  //6. 
  // CLEAR INPUT FIELD
  //7. 

}

```

# STEP 4

1.  Now were at the point where we are going to add our created task to DOM/Webpage. We will introduce a new method that will allow us to create elements in javascript. Take 3-5 minutes and google `how to create html elements in javascript`

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. LOOK IN YOUR HTML AND LET'S FIND THE ID FOR THE listContainer variable
     FOR `checkBox, spanTask, spanDate` LET'S USE THE `document.createElement` AND CREATE A SPAN TAG;
     FOR `listItems` WHAT HTML TAG SHOULD WE CREATE? THINK ABOUT WHEN WE CREATE A LIST WHAT TAG DO WE USE 🤔
     FOR `divContainer` LET'S CREATE THIS ELEMENT. HINT THE TAG WE NEED TO CREATE IS IN THE NAME OF THE VARIABLE
  2. LET'S LOOKS IN `CSS` AND FIND THE `CLASS` AND LET'S ENTER THEM (..........) FOR `checkBox` AND `listItems`
  3. CREATE A VARIABLE NAMED currentDate and store the invoked getDate function
  4. LET'S ADD `spanTask` AND `spanDate` TO THE `divContainer`
  5. LET'S ADD `divContainer` AND `checkBox` TO THE `listItems`
  6. LET'S ADD `listItems` TO THE `listContainer`
  7. INVOKE A FUNCTION NAMED `checkBoxButton` WITH THE ARGUEMENTS `checkBox`, `currentTask`, `listItems`.

```javascript
/*
* STEP 4
*/

//  Spend the next 10-15min doing the task below.
//  1. LOOK IN YOUR HTML AND LET'S FIND THE ID FOR THE listContainer variable
//     FOR checkBox, spanTask, spanDate LET'S USE THE document.createElement AND CREATE A SPAN TAG;
//     FOR listItems WHAT HTML TAG SHOULD WE CREATE? THINK ABOUT WHEN WE CREATE A LIST WHAT TAG DO WE USE
//     FOR divContainer LET'S CREATE THIS ELEMENT. HINT THE TAG WE NEED TO CREATE IS IN THE NAME OF THE        //     VARIABLE
//  2. LET'S LOOKS IN CSS AND FIND THE CLASSES AND LET'S ENTER THEM (..........) FOR checkBox AND listItems
//  3. CREATE A VARIABLE NAMED currentDate and store the invoked getDate function
//  4. LET'S ADD spanTask AND spanDate TO THE divContainer
//  5. LET'S ADD divContainer AND checkBox TO THE listItems
//  6. LET'S ADD listItems TO THE listContainer
//  7. INVOKE A FUNCTION NAMED checkBoxButton WITH THE ARGUEMENTS checkBox, currentTask, listItems.


function addTaskToDOM(currentTask, currentDate) {
  // DOM
  //1.
  const listContainer = document.getElementById(............);
  const checkBox = document.createElement(..........);
  const spanTask = document.createElement(..........);
  const spanDate = document.createElement(.........);
  const listItems = document.createElement(........);
  const divContainer = document.createElement(........);
  // META
  //2.
  checkBox.classList.add(.........);
  listItems.classList.add(........);
  divContainer.setAttribute('class', 'taskContent');
  spanTask.textContent = currentTask;
  spanTask.setAttribute('class', 'taskText');
  spanTask.setAttribute('contenteditable', true);

  //DON'T TOUCH
  spanTask.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      const updatedTask = e.target.textContent;
      editTask(updatedTask, currentTask);
    }
  });
  spanDate.textContent = currentDate;
  spanDate.setAttribute('class', 'taskDate');

  // APPEND TO DOM
  //4
  divContainer.appendChild(...........);
  divContainer.appendChild(.........);

  //5
  listItems.append(...........);
  listItems.append(...........);

  //6
  listContainer.append(...........);

  //7
  checkBoxButton(.......................);
}

}

```

# STEP 5

1. Now that we have our task on our list DOES OUR CHECK BOX WORK? let's click the box, did the task delete?
   If it didn't delete, we're going to make the check box clickable.

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. LET'S DECLARE A FUNCTION NAMED `checkBoxButton` WITH THE PARAMETERS `checkBox, task, item` ABOVE THE `askTaskToDom`
  2. INSIDE YOUR `checkBoxButton` FUNCTION LET'S ADD A CLICK EVENT TO `checkBox`. After the `click,` copy and paste `e => deleteTask(e, task, item)`.



```javascript

// 1. LET'S DECLARE A FUNCTION NAMED `checkBoxButton` WITH THE PARAMETERS `checkBox, task, item`


// 2. LET'S ADD A CLICK EVENT TO `checkBox`. After the `click,` copy and paste `e => deleteTask(e, task, item)`.

```


# STEP 6

1. NOW LET'S GIVE FUNCTIONALITY TO OUR `deleteTask` FUNCTION SO WE CAN REMOVE ITEMS FROM THE LIST

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. COPY THE FUNCTION BELOW AND PASTE IT ABOVE THE `checkBoxButton` FUNCTION.
  2. LET'S TAKE A LOOK IN OUR CSS AND LET'S LOOK FOR THE RIGHT`class` to add in the `parentheses`.
    `e.target.classList` WE NEED TO ADD A CLASS TO DISPLAY A CHECK.
    `listItem.classList` WE NEED TO ADD A CLASS TO DISPLAY A `line-through` OUR TEXT.
    `listItem.classList` WE NEED TO ADD A CLASS TO ADD AN ANIMATION TO FADE OUT OUR DELETED TASK.
  3. STORE THE `newArr` VARIABLE IN THE `taskArr` VARIABLE.
  4. INVOKE THE `updateStorage` FUNCTION AND ADD `newArr` AS AN ARGUEMENT FOR THAT FUNCTION 


```javascript
//1
function deleteTask(e, deletedTask, listItem) {
  //2  
  e.target.classList.add(..........);
  listItem.classList.add(..........);
  listItem.classList.add(...........);
  const newArr = taskArr.filter(t => t.task !== deletedTask);
  //3
  
  //4
  updateStorage(newArr);

  setTimeout(() => {
    listItem.style.display = 'none';
  }, 2000);
}
```

# STEP 7

1. NOW WHAT HAPPENS IF YOU MAKE A MISTAKE AND NEED TO MAKE AN EDIT TO YOUR TASK? LET'S ADD A FUNCTION THAT        WILL ALLOW US TO EDIT OUR TASK.

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. COPY THE FUNCTION BELOW AND PASTE IT BELOW THE `deleteTask`.
  2. STORE THE `newArr` VARIABLE IN THE `taskArr` VARIABLE. 



```javascript

//# 🚨 CHALLENGE 🚨
//  Spend the next 10-15min doing the task below.
//  1. COPY THE FUNCTION BELOW AND PASTE IT BELOW THE `deleteTask`.
//  2. STORE THE `newArr` VARIABLE IN THE `taskArr` VARIABLE. 
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
  taskArr = newArr;
  updateStorage(newArr);
  setTimeout(() => window.location.reload(), 300);
}
```

# STEP 7

1. NOW LET'S ADD A NEW TASK DID IT WORK? GOOD JOB YOU HAVE A FUNCTIONING TODO LIST 👍. NOW DO ME A FAVOR LET'S SAVE AND RELOAD OUR PAGE. DID YOUR TASKS LOAD BACK TO YOUR LIST. IF IT DIDN'T, LET'S MAKE IT LOAD OUR SAVED TASKS

# 🚨 CHALLENGE 🚨
  Spend the next 10-15min doing the task below.
  1. CREATE A FUNCTION NAMED `addExisitingTask` with the parameter `data`
  2. INSIDE THIS FUNCTION LET'S COPY AND PASTE THIS LINE`  data.forEach(element => ........));`
  3. WEHRE THE ......... LET'S INVOKE THE FUNCTION `addExistingTask` with the parameter `element.task, element.date`



```javascript

// # 🚨 CHALLENGE 🚨
//  Spend the next 10-15min doing the task below.
//   1. CREATE A FUNCTION NAMED `addExisitingTask` with the parameter `data`
//   2. INSIDE THIS FUNCTION LET'S COPY AND PASTE THIS LINE`  data.forEach(element => ........));`
//   3. WEHRE THE ......... LET'S INVOKE THE FUNCTION `addExistingTask` with the parameter `element.task, element.date`
//1.

    //2 & 3.

```

#STEP 8

1. AT THIS POINT YOU HAVE FINISHED AND NOW HAVE A WORKING TODO LIST. NOW YOU SHOULD HAVE SOME NICE ANIMATION WHEN YOU ADD A TASK AND DELETE A TASK.

2. LET'S TAKE A LOOK IN OUR CSS THERE ARE MORE ANIMATIONS THAT WE CAN CHOOSE FROM FOR WHEN WE ADD A TASK AND WHEN WE DELETE.

    1. ADDING A TASK - IF YOU LOOK AT THE LAST STYLE IN OUR `listItems` CLASS IN `CSS` YOU WILL SEE `animtation` YOU CAN EDIT THE NAME(`fadeInRight`) OF THE ANIMATION AND THE DURATION (`2s`) OF THE ANIMATION.

    2. DELETE A TASK - IF YOU LOOK AT  OUR `fade` CLASS YOU WILL SEE `animtation` YOU CAN EDIT THE NAME(`fadeOutSpin`) OF THE ANIMATION AND THE DURATION (`2s`) OF THE ANIMATION
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
        * fadeOutSpin
        * fadeOutRight
        * fadeOutZip
        * fadeOutUp
        * fadeOutDown
        * fadeOutSpin
        * fadeInSpin
        * fadeInZip
        * fadeInUp
        * fadeInDown
        * fadeInLeft
        * fadeInRight


# CONGRATULATIONS YOU'VE COMPLETED TO DO LIST


1. TEST OUT YOUR CODE AND TELL ME WHAT COOL THINGS YOU SEE.
2. TRY DIFFERENT ANIMATIONS .
3. KEEP ON CODING.

