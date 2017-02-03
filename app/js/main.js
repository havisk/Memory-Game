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
// console.log(solutionArray);
shuffleArray(solutionArray);
console.log(solutionArray);

// console.log(tileImage);
start();
function start() {
  score = 0;
  //clear board
  board.innerHTML = " ";
  //Create gameboard
  for (var i = 0; i <= solutionArray.length - 1; i++) {
    board.innerHTML += '<div class="col-md-3 col-xs-3 card"><img id="cardz' + i + '" src="images/big10.jpg" onclick="pickCard(\'' + solutionArray[i] + '\', \'' + i + '\',this); return false;" class="img"></div>';
    // console.log(i);
  }
}

window.pickCard = function (a, b, c) {
  // console.log(c);
  //setting to only be able to flip 2 cards
  if (cardsFlippedOver < 2 && lastCardPicked !== b) {
    fliparray[cardsFlippedOver] = solutionArray[b];
    fliparray[cardsFlippedOver + 2] = c.id;
    cardsFlippedOver++;
    c.src = 'images/' + solutionArray[b];
    if (cardsFlippedOver === 2) {
      if (fliparray[0] === fliparray[1]) {
        console.log('same');
        inFade(b);
        pickAgain();
        score++;
        //check if all game is won
        if (tileImage.length === score) {
          console.log('end game');
        }
      } else {
        timer = setInterval(hideCard, 500);
        console.log("different");
      }
    }
    lastCardPicked = b;
  }
  // console.log(fliparray);
};

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

//fade in
function inFade() {
  var output = document.getElementById('cardz');
  output.innerHTML = '';
  $("#cardz").fadeIn(500);

  output.innerHTML = c.src;
}

//fade out

},{}]},{},[1])

//# sourceMappingURL=main.js.map
