# CAPSTONE PROJECT

## UPDATES

1.  In the `gameOver` function we created in **Step 12**. We are going to add the following lines to our code... What we did here was remove the `score` and `status` from our gameOver screen. (Makes our ending page look better).

    Let's find:

    ```javascript
    // #2
    status.textContent = "";
    ```

    and below, insert:

    ```javascript
    // DO NOT TOUCH
    scoreTime.remove();
    status.remove();
    scoreDiv.remove();
    ```

2.  At the very top of the JS section, lets look for:

    ```javascript
    startBTN.addEventListener("click", () => createBoard());
    ```

    **and change it to:**

    ```javascript
    startBTN.addEventListener("click", createBoard);
    ```

3.  In the `CSS` section in codePen, lets find:

    ```css
    #gameover {
      display: none;
      text-align: center;
      border: 10px dashed #f44336;
      background-color: white;
      width: 50%;
      ------margin: 0 auto;
      =>margin: 20px auto;
      ------transition: 0.4s;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    ```

    and let's change this value: `margin: 0 auto;` to `margin: 20px auto;`.

4.  Inside the `gameTimer()` function, lets find: (we changed the 0 to 1000)

    ```javascript
    setTimeout(() => {
      gameoverDiv.style.display = "block";
      finalScore.textContent = score;
    ------
    }, 0); => }, 1000);
    ------
    ```

    **to:**

    ```javascript
    setTimeout(() => {
      gameoverDiv.style.display = "block";
      finalScore.textContent = score;
    }, 1000);
    ```

## PRESENTATION

1.  Because codePen.io doesn't allow us `window.location.reload()` (among other things), we will instead `deploy` our projects to the internet.
    - What we mean by `deploy` is make our projects available on the internet.
      - Once you are totally **satisfied**, I will `deploy` your project, and give you a link you can use to access your project.
2.  Make any more CSS changes
3.  Add more cards to your `cards` array.
4.  ANY questions/feature requests you want to add to your game to make it more unique.
