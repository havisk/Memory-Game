// import $ from 'jquery';

let tileImage = ['illini.jpg', 'indiana.jpg', 'Iowa.jpg', 'min.jpg', 'michstate.jpg', 'neb.jpg',
 'northwestern.jpg', 'ohiostate.jpg', 'penn.jpg', 'purdue.jpg', 'Rutgers.jpg', 'terps.jpg', 'wis.jpg', 'Mich.jpg'];
let board = document.getElementById("gameboard");
let cardsFlippedOver = 0;
let solutionArray = tileImage.concat(tileImage);
let fliparray = [];
let lastCardPicked = -1;
let timer = '';
let score = 0;
let messageText = document.getElementById("message");
let mess = '';
let newMessage = document.getElementById("control");


document.getElementById("control").addEventListener("click", start);//gives function to button



start();
function start(){
  clearInterval(timer);
  shuffleArray(solutionArray); //shuffle tiles
  score = 0;
  board.innerHTML = "";//clear board
  text("Click a Tile to start");

  //Create gameboard
  for(let i = 0; i <= (solutionArray.length)-1; i++){
    board.innerHTML += '<div class=" left col-md-3 col-xs-6 col-sm-6 card"><img id="cardz'+i+'" src="images/big10.jpg" onclick="pickCard(\''+solutionArray[i]+'\', \''+i+'\',this); return false;" class="img"></div>';
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
    if(cardsFlippedOver===2){
      if(fliparray[0]===fliparray[1]){
        text("MATCH FOUND");
        animate();
        pickAgain();
        score++;
        //check if game is won
        if(tileImage.length === score){
          gameOver();

        }
      }else{
        timer = setInterval(hideCard, 1000);
        text("NOT A MATCH");

        
      }
    }
    lastCardPicked = b;
  }
};

function text(message){
  clearInterval(mess);
  messageText.innerHTML = message;
  if(message !=='Find a Match'){
    mess = setInterval(text, 2000, 'Find a Match');
  }
}

function gameOver(){
  text("YOU DID IT <br> BIG 10 RULES!!");
  newMessage.innerHTML = "Click to Play Again";
}

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
  for (let c = d.length - 1; c > 0; c--) {
    let b = Math.floor(Math.random() * (c + 1));
    let a = d[c];
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
  {parentPerspective:800, parentPerspectiveOrigin: '100% top', duration: 1000, repeat:1, yoyo:true, 
  easing: 'easingCubicOut'}).start();


  let tween2 = KUTE.fromTo(
    nor, {translateX:0,rotateX:0,rotateY:0}, {translateX:-250,rotateX:360, rotateY:370},
  {perspective:800, perspectiveOrigin: 'center top', duration: 1000, repeat:1, yoyo:true, 
  easing: 'easingCubicOut'}).start();

  let tween3 = KUTE.fromTo(
    bop, {translateX:0, rotateX:0,rotateY:0}, {translateX:250,rotateX:360, rotateY:370},
  {parentPerspective:800, parentPerspectiveOrigin: '100% top', duration: 1000, repeat:1, yoyo:true, 
  easing: 'easingCubicOut'}).start();


  let tween4 = KUTE.fromTo(
    pop, {translateX:0,rotateX:0,rotateY:0}, {translateX:-250,rotateX:360, rotateY:370},
  {perspective:800, perspectiveOrigin: 'center top', duration: 1000, repeat:1, yoyo:true, 
  easing: 'easingCubicOut'}).start();

  let tween5 = KUTE.to(gin,{translate:-300}, {duration: 1000, repeat:1, yoyo:true}).start();
  let tween6 = KUTE.to(sip,{translate:-300}, {duration: 1000, repeat:1, yoyo:true}).start();
}





