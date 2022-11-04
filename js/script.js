var game = document.getElementById("game")
var loseScreen = document.getElementById("lose-screen")
var startScreen = document.getElementById("start-screen")

var menu = document.getElementById("menu")
var mainMenu = document.getElementById("main-menu")
var options = document.getElementById("options")
var levels = document.getElementById("levels")

var startButton = document.getElementById("start-btn")

var character = document.getElementById("character")
var obstacle = document.getElementById("obstacle")

function start(){
  menu.classList.add("hide")
  setTimeout(
    function() {
      game.classList.add("can-jump")
      character.classList.remove("hide")
      startScreen.innerText = 'Left Click to Jump'
    }, 100
  )
  setTimeout(
    function () {
      obstacle.classList.remove("hide")
      obstacle.classList.add("animate-obstacle");
      startScreen.innerText = ''
     }, 2500
  )
}

function optionsMenu(){
  mainMenu.classList.add("hide")
  options.classList.remove("hide")
}

function levelsMenu(){
  mainMenu.classList.add("hide")
  levels.classList.remove("hide")
}

function back() {
  mainMenu.classList.remove("hide")
  if (options.classList !== "hide") {
    options.classList.add("hide")
  }
  if (levels.classList !== "hide") {
    levels.classList.add("hide")
  }
}

function jump(){
  if (character.classList !== "animate-jump" && game.classList == "can-jump") {
    // character.classList.remove("animate-walk")
    character.classList.add("animate-jump")
  }
  setTimeout(function(){
    character.classList.remove("animate-jump")
    // character.classList.add("animate-walk")
  },500)
}


var checkDead = setInterval(function(){
  var charcaterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
  var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))

  if (obstacleLeft < 60 && obstacleLeft >30 && charcaterTop >= 130) {
    obstacle.classList.remove("animate-obstacle");
    game.classList.remove("can-jump")
    character.classList.add("hide")
    obstacle.classList.add("hide")
    loseScreen.innerHTML = 'You lose';
    setTimeout(
      function(){
        loseScreen.innerHTML = '';
        menu.classList.remove("hide")
        startButton.onclick = function () {start()}
      }, 2500 )
    
  }
}, 10)