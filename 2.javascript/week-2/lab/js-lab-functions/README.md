# JavaScript Functions Lab

You will be writing some functions in JavaScript. JavaScript was designed to work in the browser.  But we can use `node` to run JS in our terminal!

## Objectives 

- learn to write functions
## Repo Instructions

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-hw-loops) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialogue box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

For example: 

```bash 
clone git@github.com:DigitalCraftsStudents/js-lab-functions.git
```
## Task Instructions
To take in user input from the terminal, we are using a package called `prompt-sync` (more on this in a later lesson). 
- Navigate into the folder titled `js-lab-functions`
- Open the file called `index.js` and solve the lab problem
  - (hint: the structure to use is shown in comments)
  - (double hint: you might need to comment out problems you have solved)
- To run a file javascript file using node, you can run it from your terminal like this:
```bash
$ node index.js
``` 
Alternately, if you would like to bypass `prompt-sync`, create a new `js` file for each problem. Then, run a file javascript file using node from your terminal like this:

```bash
$ node theNameOfTheFile.js
```

## Hello, you!

Write a function `hello` which given a name, says hello to the name. Use the following template:

```js
function hello(name) {
  // put your code here
}
hello('Mustache');
```

Make the above program print the following to the console:

```
Hello, Mustache!
```

## Hello, you! Part 2

Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.

## Madlib

Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

Example:

```js
madlib('Anushka', 'art');
```

Output

```
'Anushka's favorite subject in school is art.'
```

## Tip Calculator

Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

> good -> 20%
>
> fair -> 15%
>
> bad -> 10%

```js
tipAmount(100, 'good');
// 20

tipAmount(40, 'fair');
// 6
```

## Tip Calculator 2

Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

```js
> totalAmount(100, 'good')
// 120

> totalAmount(40, 'fair')
// 46
```

## Tip Calculator 3

Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

```js
splitAmount(100, 'good', 5);
// 24

splitAmount(40, 'fair', 2);
// 23
```
