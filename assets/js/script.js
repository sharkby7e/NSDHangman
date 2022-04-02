console.log("WOW UR A CHEATER")

var word = document.querySelector(".word")
var result = document.querySelector('.result')
var clock = document.querySelector('.clock')
var time = document.querySelector('.timer')
var reset = document.querySelector('.reset')
var start = document.querySelector('.start')
var winDisp = document.querySelector("#wins")
var lossDisp = document.querySelector("#losses")
var wins = localStorage.getItem("wins")
var losses = localStorage.getItem("losses")

var library = ["query", "console", "farley", "sharkbyte", "mississippi", "nvdia"]

var targetWord = ""
var displayWord = ""
var timeLeft = 3;

// create local storage for wins/losses
//  localStorage.set item an arrary called score has two items in array first wins second losses
if(wins === null){
  wins = 0
}
winDisp.textContent = wins

if(losses === null){
  losses = 0
}
lossDisp.textContent = losses

// add eventListener to start button 
start.addEventListener("click", function() {
  //hide it
  start.setAttribute("style","display:none")
  //begin game loop 
  gameLoop()
})

reset.addEventListener("click", function(){ //add event listener to reset
  reset.setAttribute("style","display:none") //hide it
  gameLoop() //begin new game
})

function gameLoop(){
  //start counting down
  countdown()
  // clear word 
  displayWord= ""
  // call generate word
  generateBlankWord()
}

function writeDisplay(wrd){
  var dsp =""
  for (let i = 0; i < wrd.length; i++) {
   dsp+= wrd[i] + " " 
  }
  word.textContent = dsp 
}

// generate word function 
function generateBlankWord() { //  targetWord= picks randomly from library
  targetWord = library[Math.floor(Math.random() * library.length)]
  console.log(targetWord)
  // for loop that adds to diplayWord underscores as long as targetWord
  for (let i = 0; i < targetWord.length; i++) {
    displayWord += "_"
  }
  writeDisplay(displayWord)
}

// add event listner for key press 
document.addEventListener("keydown", function(event) {
  var keyPress = event.key
  displayWordReplacer(keyPress)
})

function displayWordReplacer(letter) {
  var newDsp = ""//make new displayWord
  for (let i = 0; i < displayWord.length; i++) { //for every letter in displayWord 
    if(displayWord[i] !== '_'){ //if it is not blank
      newDsp+=displayWord[i] //leave it to be what it is
    }else if(targetWord[i] === letter){ //if it matches letter
      newDsp+= letter //add the letter
    }else {
      newDsp+= '_' //otherwise add a blank
    } 
  }
  displayWord= newDsp
  writeDisplay(newDsp)
}

function countdown() {
  timeLeft=15
  time.textContent = timeLeft
  var timeInterval = setInterval(function() {
    if (displayWord === targetWord){
      timeLeft = 0 
    }
    if (timeLeft > 0) {
      timeLeft--;
      time.textContent = timeLeft
    } else {
      reset.setAttribute("style","display:block")
      clearInterval(timeInterval)
      winOrLose()
    }
  }, 1000)
}

function winOrLose() {
  if (targetWord === displayWord) {
    time.textContent = "🤠";
    wins++
    localStorage.setItem("wins",wins)
    winDisp.textContent = wins
  } else {
    time.textContent = "☠";
    losses ++
    localStorage.setItem("losses",losses)
    lossDisp.textContent = losses
  }
}

