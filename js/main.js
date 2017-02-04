// import $ from 'jquery';

var tileImage = ['illini.jpeg', 'indiana.jpg', 'Iowa.png', 'min.jpg', 'michstate.jpg', 'neb.jpg',
 'northwestern.png', 'ohiostate.png', 'penn.gif', 'purdue.gif', 'Rutgers.jpg', 'terps.png', 'wis.png', 'Mich.jpg'];
var board = document.getElementById("gameboard");
var cardsFlippedOver = 0;
var solutionArray = tileImage.concat(tileImage);
var fliparray = [];
var lastCardPicked = -1;
var timer = '';
var score = 0;
// console.log(solutionArray);
shuffleArray(solutionArray);
// console.log(solutionArray);


// console.log(tileImage);
start();
function start(){
  score = 0;
  //clear board
  board.innerHTML = " ";
  //Create gameboard
  for(var i = 0; i <= (solutionArray.length)-1; i++){
    board.innerHTML += '<div class=" left col-md-3 col-xs-3 card"><img id="cardz'+i+'" src="images/big10.jpg" onclick="pickCard(\''+solutionArray[i]+'\', \''+i+'\',this); return false;" class="img"></div>';
    // console.log(i);
  }

}


window.pickCard = function(a,b,c){
  console.log(b);
  //setting to only be able to flip 2 cards
  if(cardsFlippedOver < 2 && lastCardPicked !== b){
    fliparray[cardsFlippedOver] = solutionArray[b];
    fliparray[(cardsFlippedOver+2)] = c.id;
    cardsFlippedOver++;
    c.src = 'images/'+solutionArray[b];
    if(cardsFlippedOver ===2){
      if(fliparray[0]===fliparray[1]){
        console.log('same');
        animate();
        pickAgain();
        score++;
        //check if all game is won
        if(tileImage.length === score){
          console.log('end game');
        }
      }else{
        timer = setInterval(hideCard, 500);
        console.log("different");
        
      }
    }
    lastCardPicked = b;
  }
  // console.log(fliparray);
};

function pickAgain(){
  cardsFlippedOver = 0;
  fliparray = [];
  lastCardPicked = -1;
  clearInterval(timer);

}

function hideCard(b){
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
function animate(){
  //identify the elements
  let cor = document.querySelector('.pq');
  let nor = document.querySelector('.bee');
  let bop = document.querySelector('.gq');
  let pop = document.querySelector('.see');
  let gin = document.querySelector('.gee');
  let sip = document.querySelector('.nip');


  let tween1 = KUTE.fromTo(
    cor, {translateX:0, rotateX:0,rotateY:0}, {translateX:250,rotateX:360, rotateY:370},
  {parentPerspective:800, parentPerspectiveOrigin: '100% top', duration: 2000, repeat:1, yoyo:true, 
  easing: 'easingCubicOut'}).start();


  let tween2 = KUTE.fromTo(
    nor, {translateX:0,rotateX:0,rotateY:0}, {translateX:-250,rotateX:360, rotateY:370},
  {perspective:800, perspectiveOrigin: 'center top', duration: 2000, repeat:1, yoyo:true, 
  easing: 'easingCubicOut'}).start();

  let tween3 = KUTE.fromTo(
    bop, {translateX:0, rotateX:0,rotateY:0}, {translateX:250,rotateX:360, rotateY:370},
  {parentPerspective:800, parentPerspectiveOrigin: '100% top', duration: 2000, repeat:1, yoyo:true, 
  easing: 'easingCubicOut'}).start();


  let tween4 = KUTE.fromTo(
    pop, {translateX:0,rotateX:0,rotateY:0}, {translateX:-250,rotateX:360, rotateY:370},
  {perspective:800, perspectiveOrigin: 'center top', duration: 2000, repeat:1, yoyo:true, 
  easing: 'easingCubicOut'}).start();

  let tween5 = KUTE.to(gin,{translate:-300}, {repeat:1, yoyo:true}).start();
  let tween6 = KUTE.to(sip,{translate:-300}, {repeat:1, yoyo:true}).start();
}





