let keypress = require("./keypress");
let Player = require("./entity/Player").Player;
let mdraw = require("./mihirdraw");
console.log(Player);

var player1 = new Player({
  x: 10,
  y: 10,
  width: 50,
  height: 50,
  color: "red",
  speed: 5,
  keycodes: [37, 39, 38, 40],
});

var player2 = new Player({
  x: 100,
  y: 10,
  width: 50,
  height: 50,
  color: "blue",
  speed: 5,
  keycodes: [65, 68, 87, 83],
});
function update() {
  keypress.input(player1);
  keypress.input(player2);
}

function draw() {
  //clears thd whole screen before each frame and calls drawPlayer function//
  //clears the whole canvas//
  mdraw.clear_screen();
  player1.draw(); // redwars the player1 in the next x,y value//
  player2.draw(); // redwars the player1 in the next x,y value//
}

function loop() {
  //this function does the looping and//
  // also loops other function in it//
  update(); //this function updates after keypress//
  draw(); //draw and redraw//
  window.requestAnimationFrame(loop); //runs loop for refreshing the page//
}

loop(); // things get started reverse from here//

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// function draw() {

// }
// setInterval(draw, 10);

// ctx.strokeStyle = 'green';
// ctx.fillStyle = "#008000";
// ctx.fillRect(20, 20, 25, 20);
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(50, 200, 25, 20);
// player3 1,2,3,4.
