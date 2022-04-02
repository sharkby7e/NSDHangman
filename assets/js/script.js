console.log("sup bro")

var word = document.querySelector(".word")
var result = document.querySelector('.result')
var clock = document.querySelector('.clock')
var timer = document.querySelector('.timer')
var reset = document.querySelector('.reset')
var start = document.querySelector('.start')
var wins = document.querySelector(".wins")
var losses = document.querySelector(".losses")
var library = ["query", "console", "farley", "sharkbyte", "mississippi", "nvdia"]



// add eventListener to start button click===true 
//      hide it z index 0
//      call generate word
//      word displayed in dashes
//      add start/replay button


// generate word function 
//  targetWord= picks randomly from library
//   displayWord=""
// for loop that adds to diplayWord underscores as long as targetWord
//        displayWord+="_"
//  return displayWord


// add event listner for key press 
//      if key press by user check matches any letter in the word then 
//          change that word from blank to actual letter
//      else return()


// create local storage for wins/losses
//  localStorage.set item an arrary called score has two items in array first wins second losses


// create timer countdown
//   result
//     if display==target word 
//            THEN DISPLAY YOU WIN
//      else display you lose