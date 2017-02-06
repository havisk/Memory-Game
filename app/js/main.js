(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// import $ from 'jquery';

'use strict';

var tileImage = ['illini.jpeg', 'indiana.jpg', 'Iowa.png', 'min.jpg', 'michstate.jpg', 'neb.jpg', 'northwestern.png', 'ohiostate.png', 'penn.gif', 'purdue.gif', 'Rutgers.jpg', 'terps.png', 'wis.png', 'Mich.jpg'];
var board = document.getElementById("gameboard");
var cardsFlippedOver = 0;
var solutionArray = tileImage.concat(tileImage);
var fliparray = [];
var lastCardPicked = -1;
var timer = '';
var score = 0;
var messageText = document.getElementById("message");
var mess = '';
var newMessage = document.getElementById("control");
// console.log(solutionArray);

document.getElementById("control").addEventListener("click", start); //gives function to button
// console.log(solutionArray);
// console.log(tileImage);

start();
function start() {
  clearInterval(timer);
  shuffleArray(solutionArray); //shuffle tiles
  score = 0;
  board.innerHTML = ""; //clear board
  text("Click a Tile to start");
  //Create gameboard
  for (var i = 0; i <= solutionArray.length - 1; i++) {
    board.innerHTML += '<div class=" left col-md-3 col-xs-3 card"><img id="cardz' + i + '" src="images/big10.jpg" onclick="pickCard(\'' + solutionArray[i] + '\', \'' + i + '\',this); return false;" class="img"></div>';
    // console.log(i);
  }
}

window.pickCard = function (a, b, c) {
  console.log(b);
  //setting to only be able to flip 2 cards
  if (cardsFlippedOver < 2 && lastCardPicked !== b) {
    fliparray[cardsFlippedOver] = solutionArray[b];
    fliparray[cardsFlippedOver + 2] = c.id;
    cardsFlippedOver++;
    c.src = 'images/' + solutionArray[b];
    if (cardsFlippedOver === 2) {
      if (fliparray[0] === fliparray[1]) {
        // console.log('same');
        text("MATCH FOUND");
        animate();
        pickAgain();
        score++;
        //check if game is won
        if (tileImage.length === score) {
          gameOver();
          // console.log('end game');
        }
      } else {
          timer = setInterval(hideCard, 500);
          // console.log("different");
          text("NOT A MATCH");
        }
    }
    lastCardPicked = b;
  }
  // console.log(fliparray);
};

function text(message) {
  clearInterval(mess);
  messageText.innerHTML = message;
  if (message !== 'Find a Match') {
    mess = setInterval(text, 2000, 'Find a Match');
  }
}

function gameOver() {
  text("YOU DID IT <br> BIG 10 RULES!!");
  newMessage.innerHTML = "Click to Play Again";
}

function pickAgain() {
  cardsFlippedOver = 0;
  fliparray = [];
  lastCardPicked = -1;
  clearInterval(timer);
}

function hideCard(b) {
  document.getElementById(fliparray[2]).src = "images/big10.jpg";
  document.getElementById(fliparray[3]).src = "images/big10.jpg";
  pickAgain();
}
//shuffle tiles on board
function shuffleArray(d) {
  for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d;
}

//Animation
function animate() {
  //identify the elements
  var cor = document.querySelector('.pq');
  var nor = document.querySelector('.bee');
  var bop = document.querySelector('.gq');
  var pop = document.querySelector('.see');
  var gin = document.querySelector('.gee');
  var sip = document.querySelector('.nip');

  var tween1 = KUTE.fromTo(cor, { translateX: 0, rotateX: 0, rotateY: 0 }, { translateX: 250, rotateX: 360, rotateY: 370 }, { parentPerspective: 800, parentPerspectiveOrigin: '100% top', duration: 1000, repeat: 1, yoyo: true,
    easing: 'easingCubicOut' }).start();

  var tween2 = KUTE.fromTo(nor, { translateX: 0, rotateX: 0, rotateY: 0 }, { translateX: -250, rotateX: 360, rotateY: 370 }, { perspective: 800, perspectiveOrigin: 'center top', duration: 1000, repeat: 1, yoyo: true,
    easing: 'easingCubicOut' }).start();

  var tween3 = KUTE.fromTo(bop, { translateX: 0, rotateX: 0, rotateY: 0 }, { translateX: 250, rotateX: 360, rotateY: 370 }, { parentPerspective: 800, parentPerspectiveOrigin: '100% top', duration: 1000, repeat: 1, yoyo: true,
    easing: 'easingCubicOut' }).start();

  var tween4 = KUTE.fromTo(pop, { translateX: 0, rotateX: 0, rotateY: 0 }, { translateX: -250, rotateX: 360, rotateY: 370 }, { perspective: 800, perspectiveOrigin: 'center top', duration: 1000, repeat: 1, yoyo: true,
    easing: 'easingCubicOut' }).start();

  var tween5 = KUTE.to(gin, { translate: -300 }, { duration: 1000, repeat: 1, yoyo: true }).start();
  var tween6 = KUTE.to(sip, { translate: -300 }, { duration: 1000, repeat: 1, yoyo: true }).start();
}

},{}]},{},[1])

//# sourceMappingURL=main.js.map
