 
// fruits = ['apple', 'orange', 'pear', 'banana',]

// const randomFruit = (fruits) => {

//     // return a random fruit in the array
//     const randomNumber = Math.floor(Math.random * fruits.length)

//     return fruits[randomNumber]
// }
//      console.log(randomFruit(fruits));


// // if else if else
// // rainy(1), sunny (-1), overcast (0)

// const weatherScorer = (weather, weather2) => {
//         let score
//         if (weather === 'rainy' && weather2 === 'overcast') {
//         // if the first 'if' statement runs, then 'else if' will not run 
//             score = 2
//             } else if (weather === 'rainy') {
//             score = 1    
//             } else if (weather == 'sunny') {
//                 score = -1  
//             } else {
//                 score = 0
//             }
//     return score
// }

// console.log(weatherScorer('rainy', 'overcast'));

/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const totalScore = {computerScore: 0, playerScore: 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
  
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice){
    score = 0
  
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
    score = 1
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
    score = 1
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
        score = 1

  // Otherwise human loses (aka set score to -1)
    } else {
        score = -1
    }
  // return score
  return score
}
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  if (score === -1) {
    resultDiv.innerText = 'You lose'
  } else if (score === 0) {
    resultDiv.innerText = "it's a tie"
  } else {
    resultDiv.innerText = 'you won!'
  }

  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}` 
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log(playerChoice)
  const computerChoice = getComputerChoice()
  console.log(computerChoice)
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  console.log({score})
  console.log(totalScore)
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
    const rpsButtons = document.querySelectorAll('.rpsButton')
   
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  rpsButtons.forEach(rpsButton =>  {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
  const endGameButton = document.getElementById('endGameButton')

  endGameButton.onclick = () => endGame(totalScore)

  
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''  
  playerScoreDiv.innerText = ''
}

playGame()


// promises
// asynchoronous code - may return data or not at a later time (like fetch, fetch is also a 'promise')
// promise takes either resolve - retrieve the data 
// or reject - fails to retrieve the data

const promise1 = new Promise((resolve, reject) =>
{
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random() * 2 )]

        // ternary will either return 'resolve' if true or 'reject' if false.
        isReady ? resolve('soup is ready') : reject('no soup today')
    }, 3000)
})

// in order to get the data from promise1, need to use .then to extract the value. 
console.log(promise1.then(value => console.log(value)))

// if isReady = false (reject), use try and catch when an error happens 
console.log(
    promise1
    .then(success => console.log({success}))
    .catch(error => console.log({error}))
    )

console.log(
    // fetch is a promise
    fetch('http://dog.ceo/api/breeds/image/random')
    // response.json is also a promise so you need another .then
    .then(response => response.json())
    // here is where we extract the data
    .then(data => console.log(data))
)

// async/ await - syntactic sugar to replace .then x2
// must create a function for async/ await
// must use keyword 'async/ await'

const getDog = async () => {
    const url = 'http://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

}

getDog()


// turning promise1 into async
// try = resolved
// catch = reject
const getSoup = async () => {
    try{
        const soup = await promise1
        console.log(soup)
    } catch(error) {
        console.log(error)
    }
    
}

getSoup()