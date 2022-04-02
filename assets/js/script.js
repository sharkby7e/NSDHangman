console.log("sup bro")

var word = document.querySelector(".word")
var result = document.querySelector('.result')
var clock = document.querySelector('.clock')
var time = document.querySelector('.timer')
var reset = document.querySelector('.reset')
var start = document.querySelector('.start')
var wins = document.querySelector(".wins")
var losses = document.querySelector(".losses")

var library = ["query", "console", "farley", "sharkbyte", "mississippi", "nvdia"]
var displayWord = ""

var timeLeft = 3;

var targetWord = ""

// add eventListener to start button click===true 
start.addEventListener("click", function() {
  //      hide it z index 0
  displayWord = "";
  start.setAttribute("style","display:none")
  // call generate word
  word.textContent = displayWord
  generateWord()
  countdown()
})
//      word displayed in dashes
//      add start/replay button

// generate word function 
function generateWord() {
  //  targetWord= picks randomly from library
  targetWord = library[Math.floor(Math.random() * library.length)]
  console.log(targetWord)
  // for loop that adds to diplayWord underscores as long as targetWord
  for (let i = 0; i < targetWord.length; i++) {
    displayWord += " _ "
  }
}
 
document.addEventListener("keydown", function(event) {
  var keyPress = event.key
  console.log(keyPress)
  console.log(targetWord)
  var newWord = ""
  for (let i = 0; i < targetWord.length; i++) {
    if (targetWord[i] === keyPress) {
      console.log("match found")
      newWord+= keyPress
    }else{
      newWord+=' _ '
    }   
  }
      word.textContent = newWord
})

// add event listner for key press 
//      if key press by user check matches any letter in the word then 
//          change that word from blank to actual letter
//      else return()


// create local storage for wins/losses
//  localStorage.set item an arrary called score has two items in array first wins second losses

function countdown() {
  timeLeft=3
  time.textContent = timeLeft
  var timeInterval = setInterval(function() {
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
  } else {
    time.textContent = "☠";

  }
}

// create timer countdown
//   result
//     if display==target word 
//            THEN DISPLAY YOU WIN
//      else display you lose
